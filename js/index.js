// ===============================
// Hero YouTube 영상 자동 반복
// 영상 리스트 변경본
// ===============================

const videos = [
    { id: "vvdcXFDIrIk", time: 180 },
    { id: "y99oMCIcYkU", time: 180 },
    { id: "zcYW4XYFF08", time: 180 },
    { id: "z3K_OHtIObk", time: 180 }
];

let current = 0;
let videoTimer = null;

const iframe = document.getElementById("heroIframe");

function playVideo(index) {

    if (!iframe) return;

    iframe.src =
        `https://www.youtube-nocookie.com/embed/${videos[index].id}?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&modestbranding=1`;

    clearTimeout(videoTimer);

    videoTimer = setTimeout(() => {

        current++;

        if (current >= videos.length) {
            current = 0;
        }

        playVideo(current);

    }, videos[index].time * 1000);
}

window.addEventListener("load", () => {
    playVideo(current);
});


// ===============================
// 뉴스 슬라이더
// ===============================

const slider = document.querySelector('.news-slider');
const prevBtn = document.querySelector('.news-slider-wrapper .slider-btn.prev');
const nextBtn = document.querySelector('.news-slider-wrapper .slider-btn.next');

const cards = document.querySelectorAll('.news-card');

if (slider && prevBtn && nextBtn && cards.length > 0) {

    const totalCards = cards.length;
    let currentIndex = 0;
    let isAnimating = false;

    function getCardWidth() {
        return cards[0].offsetWidth + 16;
    }

    function slideTo(index) {
        slider.scrollTo({
            left: getCardWidth() * index,
            behavior: 'smooth'
        });

        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }

    nextBtn.addEventListener('click', () => {

        if (isAnimating) return;
        isAnimating = true;

        if (currentIndex === totalCards - 1) {

            currentIndex = 0;

            slider.scrollTo({
                left: 0,
                behavior: 'smooth'
            });

            setTimeout(() => {
                isAnimating = false;
            }, 500);

        } else {

            currentIndex++;
            slideTo(currentIndex);

        }

    });

    prevBtn.addEventListener('click', () => {

        if (isAnimating) return;
        isAnimating = true;

        if (currentIndex === 0) {

            currentIndex = totalCards - 1;

            slider.scrollTo({
                left: getCardWidth() * currentIndex,
                behavior: 'smooth'
            });

            setTimeout(() => {
                isAnimating = false;
            }, 500);

        } else {

            currentIndex--;
            slideTo(currentIndex);

        }

    });
}


// ===============================
// 스토리 슬라이더
// ===============================

const storySlider = document.querySelector('.story-slider');
const storyPrevBtn = document.querySelector('.story-slider-wrapper .slider-btn.prev');
const storyNextBtn = document.querySelector('.story-slider-wrapper .slider-btn.next');

const storyCards = document.querySelectorAll('.story-card');

if (storySlider && storyPrevBtn && storyNextBtn && storyCards.length > 0) {

    const storyTotalCards = storyCards.length;
    let storyIndex = 0;
    let storyAnimating = false;

    function getStoryCardWidth() {
        return storyCards[0].offsetWidth + 16;
    }

    function storySlideTo(index) {

        storySlider.scrollTo({
            left: getStoryCardWidth() * index,
            behavior: 'smooth'
        });

        setTimeout(() => {
            storyAnimating = false;
        }, 500);
    }

    storyNextBtn.addEventListener('click', () => {

        if (storyAnimating) return;
        storyAnimating = true;

        if (storyIndex === storyTotalCards - 1) {

            storyIndex = 0;

            storySlider.scrollTo({
                left: 0,
                behavior: 'smooth'
            });

            setTimeout(() => {
                storyAnimating = false;
            }, 500);

        } else {

            storyIndex++;
            storySlideTo(storyIndex);

        }

    });

    storyPrevBtn.addEventListener('click', () => {

        if (storyAnimating) return;
        storyAnimating = true;

        if (storyIndex === 0) {

            storyIndex = storyTotalCards - 1;

            storySlider.scrollTo({
                left: getStoryCardWidth() * storyIndex,
                behavior: 'smooth'
            });

            setTimeout(() => {
                storyAnimating = false;
            }, 500);

        } else {

            storyIndex--;
            storySlideTo(storyIndex);

        }

    });
}


// ===============================
// Header 스크롤 효과
// ===============================

const header = document.querySelector('header');
const hero = document.querySelector('.section_1');

if (header && hero) {

    const heroHeight = hero.offsetHeight;

    window.addEventListener('scroll', () => {

        if (window.scrollY >= heroHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

    });
}


// ===============================
// 스크롤 효과
// ===============================
const section = document.querySelector('.main_content .section_1');
const image = document.querySelector('.main_content .section_1 .bg_img img');
const content = document.querySelector('.main_content .section_1 .about-content');
const gradient = document.querySelector('.main_content .section_1 .section1-gradient'); /* 희원 */

window.addEventListener('scroll', () => {

    const rect = section.getBoundingClientRect();

    const progress = Math.min(
        Math.max((-rect.top) / (window.innerHeight * 1.2), 0),
        1
    );

    const width = 72 + (28 * progress);
    const height = 65 + (35 * progress);

    image.style.width = width + '%';
    image.style.height = height + 'vh';

    image.style.transform = `
        translateY(${140 - (140 * progress)}px)
    `;

    const radius = 32 - (32 * progress);

    image.style.borderRadius = radius + 'px';

    if (progress > 0.45) {
        content.classList.add('show');
    } else {
        content.classList.remove('show');
    }

    /* 희원 - 이미지가 풀스크린에 가까워질수록 그라데이션 등장 */
    if (gradient) {
        const gradientOpacity = Math.min(Math.max((progress - 0.6) / 0.4, 0), 1);
        gradient.style.opacity = gradientOpacity;
    }

});