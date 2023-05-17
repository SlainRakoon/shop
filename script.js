// Форматирование даты
function getDayInfo(dateString) {
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

  const date = new Date(dateString);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const weekNumber = Math.ceil(date.getDate() / 7);
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayOfWeek}, ${weekNumber} неделя ${month} ${year} года`;
}

// При загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  // Обновление форматированной даты на карточках товаров
  const formattedDates = document.querySelectorAll('.formatted-date');
  formattedDates.forEach(function (element) {
    const date = element.parentElement.querySelector('img').getAttribute('data-date-added');
    element.textContent = getDayInfo(date);
  });
});

// При клике на кнопку "Купить"
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('buy-button')) {
    event.preventDefault();
    openPopup();
  }
});

// Открытие попапа
function openPopup() {
  document.getElementById('overlay').style.display = 'flex';
  document.addEventListener('click', handleOverlayClick);
  document.addEventListener('keydown', handleEscKey);
}

// Закрытие попапа
function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  document.removeEventListener('click', handleOverlayClick);
  document.removeEventListener('keydown', handleEscKey);
}

// Обработка клика на оверлей
function handleOverlayClick(event) {
  if (event.target.id === 'overlay') {
    closePopup();
  }
}

// Обработка нажатия кнопки Esc
function handleEscKey(event) {
  if (event.key === 'Escape') {
    closePopup();
  }
}

// При отправке формы покупки
document.getElementById('purchase-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Спасибо за покупку!');
  closePopup();
});

// При клике на кнопку "Закрыть"
document.getElementById('close-button').addEventListener('click', function() {
  closePopup();
});

// При прокрутке страницы
window.addEventListener('scroll', function () {
  const scrollButton = document.getElementById('scroll-to-top');
  if (window.pageYOffset > 200) {
    scrollButton.classList.remove('hidden');
  } else {
    scrollButton.classList.add('hidden');
  }
});

// При клике на кнопку "Наверх"
document.getElementById('scroll-to-top').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// При клике на кнопку переключения темы
document.getElementById('theme-toggle').addEventListener('click', function () {
  document.body.classList.toggle('dark');
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle.textContent === 'Светлая тема') {
    themeToggle.textContent = 'Темная тема';
  } else {
    themeToggle.textContent = 'Светлая тема';
  }
});
