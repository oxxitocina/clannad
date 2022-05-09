document.querySelector('#sort-asc').onclick = mySort;
document.querySelector('#sort-desc').onclick = mySortDesc;
document.querySelector('#sort-abc').onclick = mySortAbc;

function mySort() {
     let nav = document.querySelector('#productscontaier');
     for (let i = 0; i < nav.children.length; i++) {
         for (let j = i; j < nav.children.length; j++) {
             if (+nav.children[i].getAttribute('data-price') > +nav.children[j].getAttribute('data-price')) {
                 replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                 insertAfter(replacedNode, nav.children[i]);
             }
         }
     }
}

function mySortDesc() {
    let nav = document.querySelector('#productscontaier');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data-price') < +nav.children[j].getAttribute('data-price')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}

function mySortAbc() {
    let nav = document.querySelector('#productscontaier');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data-price') < +nav.children[j].getAttribute('data-price')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}