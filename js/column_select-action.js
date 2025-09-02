const infoSlides = document.querySelectorAll('.info-list ul li');
const columnCards = document.querySelectorAll('.column-item');
const IS_ACTIVE = 'is-active';


infoSlides.forEach(slide => {
    const slideImage = slide.querySelector('.image-box');
    slide.addEventListener('mouseenter', function() {
        slideImage.classList.add(IS_ACTIVE);
    });
    slide.addEventListener('mouseleave', function() {
        slideImage.classList.remove(IS_ACTIVE);
    });
});



columnCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const cardImage = card.querySelector('.card-image');

        columnCards.forEach(c => c.classList.remove(IS_ACTIVE));
        card.classList.add(IS_ACTIVE);
        cardImage.classList.add(IS_ACTIVE);
    });

    card.addEventListener('mouseleave', function() {
        const cardImage = card.querySelector('.card-image');
        card.classList.remove(IS_ACTIVE);
        cardImage.classList.remove(IS_ACTIVE);
    });
});


const tagItems = document.querySelectorAll('.tag-item');
tagItems.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]')

    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            item.classList.add('is-checked');
        } else {
            item.classList.remove('is-checked');
        }
    })

});