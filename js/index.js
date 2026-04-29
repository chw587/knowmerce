// 영상재생
const videos = [
    "https://drive.google.com/uc?export=view&id=1Fjh7OCLdR3MyRg8XTxjjMbkjKDCm6URk",
    "https://drive.google.com/uc?export=view&id=1JR8CSnB94VroQFhZO1ESaFxhD27B2LTd",
];

const videoEl = document.getElementById("heroVideo");
let current = 0;

videoEl.src = videos[current];
videoEl.play();

videoEl.addEventListener("ended", () => {
    current = (current + 1) % videos.length;
    videoEl.src = videos[current];
    videoEl.play();
});


// 뉴스 슬라이더
const slider = document.querySelector('.news-slider');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

const cards = document.querySelectorAll('.news-card');
const totalCards = cards.length; // 6개
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
    setTimeout(() => { isAnimating = false; }, 500);
}

nextBtn.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    if (currentIndex === totalCards - 1) {
        // 마지막 → 첫번째로 순간이동
        currentIndex = 0;
        slider.scrollTo({ left: 0, behavior: 'smooth' });
        setTimeout(() => { isAnimating = false; }, 500);
    } else {
        currentIndex++;
        slideTo(currentIndex);
    }
});

prevBtn.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    if (currentIndex === 0) {
        // 첫번째 → 마지막으로 순간이동
        currentIndex = totalCards - 1;
        slider.scrollTo({ left: getCardWidth() * currentIndex, behavior: 'smooth' });
        setTimeout(() => { isAnimating = false; }, 500);
    } else {
        currentIndex--;
        slideTo(currentIndex);
    }
});


// 스토리 슬라이더
const storySlider = document.querySelector('.story-slider');
const storyPrevBtn = document.querySelector('.story-slider-wrapper .slider-btn.prev');
const storyNextBtn = document.querySelector('.story-slider-wrapper .slider-btn.next');

const storyCards = document.querySelectorAll('.story-card');
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
    setTimeout(() => { storyAnimating = false; }, 500);
}

storyNextBtn.addEventListener('click', () => {
    if (storyAnimating) return;
    storyAnimating = true;

    if (storyIndex === storyTotalCards - 1) {
        storyIndex = 0;
        storySlider.scrollTo({ left: 0, behavior: 'smooth' });
        setTimeout(() => { storyAnimating = false; }, 500);
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
        storySlider.scrollTo({ left: getStoryCardWidth() * storyIndex, behavior: 'smooth' });
        setTimeout(() => { storyAnimating = false; }, 500);
    } else {
        storyIndex--;
        storySlideTo(storyIndex);
    }
});


// Header 스크롤 효과
const header = document.querySelector('header');
const heroHeight = document.querySelector('.hero').offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY >= heroHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});