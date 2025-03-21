const swiper = new Swiper(".swiper", {
    loop: true,  // Бесконечный цикл
    direction: "horizontal",  // Горизонтальный слайдер
    slidesPerView: 1,  // Показывать 3 слайда в ряд
    spaceBetween: 20,  // Отступ между слайдами
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, // Автопрокрутка каждые 3 секунды
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 1
        }
    }
    
}
)