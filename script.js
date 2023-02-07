const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const stretch = 500;

const shadow = (e) => {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xStretch = Math.round((x / width * stretch) - (stretch / 2));
    const yStretch = Math.round((y / height * stretch) - (stretch / 2));
    
    text.style.textShadow = `
        ${xStretch}px ${yStretch}px 0 rgba(255, 0, 255, 0.7),
        ${xStretch * -1}px ${yStretch}px 0 rgba(0, 255, 255, 0.7),
        ${yStretch}px ${xStretch * -1}px 0 rgba(0, 255, 0, 0.7),
        ${yStretch * -1}px ${xStretch}px 0 rgba(0, 0, 255, 0.7)
    `;
}

hero.addEventListener('mousemove', shadow)