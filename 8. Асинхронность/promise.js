function CustomPromise(func) {
	let state = 'pending';
	let value;
	let deferred = null;

	function resolve(data) {
		try {
			if (data && data.then === 'function') {
				data.then(resolve, reject);
				return;
			}
			state = 'fulfilled';
			value = data;
		} catch (err) {
			reject(err);
		}
	};

	function reject(reason) {
		state = 'rejected';
		value = reason;

		if (deferred) {
			handle(deferred);
		}
	};

	function handle(handler) {
		if (state === 'pending') {
			deferred = handler;
			return;
		}
		setTimeout(function () {
			let handlerCb;

			if (state === 'fulfilled') {
				handlerCb = handler.onFulfilled;
			}
			else if (state === 'rejected') {
				handlerCb = handler.onRejected;
			}

			if (handlerCb) {
				let returnValueOrReason;
				try {
					returnValueOrReason = handlerCb(value);
				} catch (err) {
					handler.reject(err);
					return;
				}
				if (state === 'fulfilled') {
					handler.resolve(returnValueOrReason);
				}
				else if (state === 'rejected') {
					handler.reject(returnValueOrReason);
				}
			}

			if (!handlerCb) {
				this.state === 'fulfilled' ? handler.resolve(value) : handler.reject(value);
				return;
			}
		}, 0);
	}
	this.then = function (onFulfilled, onRejected) {
		return new CustomPromise((resolve, reject) => {
			handle({
				onFulfilled: onFulfilled,
				onRejected: onRejected,
				reject: reject,
				resolve: resolve
			})
		});
	};

	func(resolve, reject);
};

let customPromise = new CustomPromise(resolve => {
	resolve(1)
})
customPromise.then(value => console.log(value))

