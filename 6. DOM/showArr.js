const array = ['item1', ['item2', ['item3',]]]

let body = document.querySelector('body');
let ul = document.createElement('ul');
let li = document.createElement('li');

body.append(ul)
ul.append(li)
li.textContent = array[0];

let clonnedUl = ul.cloneNode()
li.append(clonnedUl)
let clonnedLi = li.cloneNode();
clonnedUl.append(clonnedLi)

clonnedLi.textContent = array[1][0]

let trdCloneUl = clonnedUl.cloneNode();
let trdCloneLi = clonnedLi.cloneNode();
clonnedLi.append(trdCloneUl);
trdCloneUl.append(trdCloneLi)
trdCloneLi.textContent = array[1][1]



