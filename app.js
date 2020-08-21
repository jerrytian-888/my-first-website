const colors = ['#2196f3', '#e91e63', '#ffeb3b', '#74ff1d'];

function createSquares() {
    const section = document.querySelector('section');
    const square = document.createElement('span');


    const bg_num = Math.floor(Math.random() * 10);
    const bg_num_span = document.createElement('span');
    bg_num_span.innerHTML = bg_num;

    applySpanStyles(bg_num_span);
    bg_num_span.style.background = 'none';
    applySpanStyles(square);

    section.appendChild(square);
    section.appendChild(bg_num_span);

    setTimeout(() => {
        square.remove();
        bg_num_span.remove();
    }, 5000);
}

function applySpanStyles(sElem) {
    const size = Math.random() * 50;
    const bg_color = colors[Math.floor(Math.random() * colors.length)];
    sElem.style.width = 20 + size + 'px';
    sElem.style.height = 20 + size + 'px';
    sElem.style.top = Math.random() * innerHeight + 'px';
    sElem.style.left = Math.random() * innerWidth + 'px';
    sElem.style.color = bg_color;
    sElem.style.background = bg_color;
}

setInterval(createSquares, 150);






let navigation = document.querySelector('.navigation');

// navigation.addEventListener('click', () => {
//     toggleMenu()
// });

function toggleMenu() {
    // let navigation = document.querySelector('.navigation');
    let samllmenu = document.querySelector('.samllmenu');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
    samllmenu.classList.toggle('active');
    clearAllCssActive('');
}

let aElems = document.querySelectorAll('.navigation a');

let aTitleName = '';
aElems.forEach(aElem => {
    aElem.addEventListener('click', () => {
        let arrowSpan = aElem.querySelector('.arrow');
        if (arrowSpan) {

            arrowSpan.classList.toggle('active');
            let subMenu = aElem.nextElementSibling;
            subMenu.classList.toggle('active');
        }
        let aTitleElem = aElem.querySelector('.title');
        if (aTitleElem) {
            let aTitleNameCurr = aTitleElem.innerHTML;
            if (aTitleName && aTitleName === aTitleNameCurr) {

            }
            clearAllCssActive(aTitleNameCurr);
        }

    });
});

function clearAllCssActive(aTitleName) {

    aElems.forEach(aElem => {
        const title = aElem.querySelector('.title');
        if (aTitleName && title && title.innerHTML === aTitleName) {
            // continue;
        } else {
            let arrowSpan = aElem.querySelector('.arrow');
            if (arrowSpan) {
                arrowSpan.classList.remove('active');
                let subMenu = aElem.nextElementSibling;
                subMenu.classList.remove('active');
            }

        }
    })

}