document.addEventListener('DOMContentLoaded', function() {
    const scrollDowns = document.querySelector('.scroll-downs');
    setTimeout(() => {
        scrollDowns.style.display = 'none';
    }, 3000); 
});

window.addEventListener('resize', adjustPosition);

function adjustPosition() {
    const headerHeight = document.querySelector('header').offsetHeight; // 例如顶部有一个头部元素
    const animalContainer = document.querySelector('.animal');
    animalContainer.style.top = `${headerHeight}px`; // 根据头部高度动态设置 top
}

document.addEventListener('scroll', () => {
    const vh = window.innerHeight;
    const scrollY = window.scrollY; 
    const scrollPercent = scrollY / vh;

    const a1 = document.querySelector('.a1');
    if (scrollPercent >= 0.35) {
        const transformAmount = Math.max((scrollPercent - 0.35) * 100, 0);
        a1.style.transform = `translateX(-${transformAmount}vw)`;  // Changed direction
        a1.style.opacity = 1 - transformAmount / 100;
    }

    const a2 = document.querySelector('.a2');
    if (scrollPercent >= 0.80) {
        const transformAmount = Math.max((scrollPercent - 0.80) * 100, 0);
        a2.style.transform = `translateX(${transformAmount}vw)`;  // Changed direction
        a2.style.opacity = 1 - transformAmount / 100;
    }

    const a3 = document.querySelector('.a3');
    if (scrollPercent >= 1.30) {
        const transformAmount = Math.max((scrollPercent - 1.30) * 100, 0);
        a3.style.transform = `translateX(-${transformAmount}vw)`;  // Changed direction
        a3.style.opacity = 1 - transformAmount / 100;
    }

    const a4 = document.querySelector('.a4');
    if (scrollPercent >= 1.80) {
        const transformAmount = Math.max((scrollPercent - 1.80) * 100, 0);
        a4.style.transform = `translateX(${transformAmount}vw)`;  // Changed direction
        a4.style.opacity = 1 - transformAmount / 100;
    }

    const a5 = document.querySelector('.a5');
    if (scrollPercent >= 2.30) {
        const transformAmount = Math.max((scrollPercent - 2.30) * 100, 0);
        a5.style.transform = `translateX(-${transformAmount}vw)`;
        a5.style.opacity = 1 - transformAmount / 100;
    }

    const a6 = document.querySelector('.a6');
    if (scrollPercent >= 2.80) {
        const transformAmount = Math.max((scrollPercent - 2.80) * 100, 0);
        a6.style.transform = `translateX(${transformAmount}vw)`;
        a6.style.opacity = 1 - transformAmount / 100;
    }

    const a7 = document.querySelector('.a7');
    if (scrollPercent >= 3.30) {
        const transformAmount = Math.max((scrollPercent - 3.30) * 100, 0);
        a7.style.transform = `translateX(-${transformAmount}vw)`;
        a7.style.opacity = 1 - transformAmount / 100;
    }

    const a8 = document.querySelector('.a8');
    if (scrollPercent >= 3.80) {
        const transformAmount = Math.max((scrollPercent - 3.80) * 100, 0);
        a8.style.transform = `translateX(${transformAmount}vw)`;
        a8.style.opacity = 1 - transformAmount / 100;
    }
});

  