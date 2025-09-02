const interviewItems = document.querySelectorAll('.interview-list li');
const IS_SHOWED = 'is-showed';


interviewItems.forEach(item => {
    window.addEventListener('scroll', () => {
        const viewPortHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;

        if (elementTop < viewPortHeight * 0.7) {
            item.querySelector('.picture-box .picture').classList.add(IS_SHOWED);
            item.querySelector('.h3-box div').classList.add(IS_SHOWED);
            item.querySelector('.caption-box div').classList.add(IS_SHOWED);
        }
    });
})
