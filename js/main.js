// Плавная прокрутка по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Анимация появления блоков при скролле
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about, .services, .diplomas, .contacts');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('animate');
        }
    });
};
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Простая валидация формы
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const phone = this.phone.value.trim();
    const message = this.message.value.trim();
    if (!name || !phone || !message) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }
    // Здесь можно добавить отправку на сервер или Telegram
    alert('Ваша заявка отправлена! Скоро свяжусь с вами.');
    this.reset();
});