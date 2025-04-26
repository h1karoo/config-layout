function createSpeakerCard(speaker) {
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker-card');
  
    // Фото
    const photo = document.createElement('img');
    photo.classList.add('speaker-card__photo');
    photo.src = speaker.photo;
    photo.alt = speaker.name;
  
    // Контейнер для информации о спикере
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('speaker-card__info');
  
    const name = document.createElement('h3');
    name.classList.add('speaker-card__name');
    name.textContent = speaker.name;
  
    const gender = document.createElement('p');
    gender.classList.add('speaker-card__gender');
    gender.textContent = `${speaker.gender}`;
  
    const role = document.createElement('p');
    role.classList.add('speaker-card__role');
    role.textContent = `${speaker.role}`;
  
    // Добавляем элементы в контейнер
    infoContainer.appendChild(name);
    infoContainer.appendChild(gender);
    infoContainer.appendChild(role);
  
    // Добавляем фото и контейнер с информацией в карточку
    speakerCard.appendChild(photo);
    speakerCard.appendChild(infoContainer);
  
    return speakerCard;
  }
  
  function displaySpeakers() {
    const speakersList = document.querySelector('.speakers-list');
    speakers.forEach(speaker => {
      const speakerCard = createSpeakerCard(speaker);
      speakersList.appendChild(speakerCard);
    });
  }
  
  // Вызов функции для отображения спикеров после загрузки страницы
  window.onload = displaySpeakers;
  
  document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.header__logo');
    
    if (logo) {
      logo.addEventListener('click', function() {
        window.location.href = './index.html';
      });
      logo.style.cursor = 'pointer';
    }
  });