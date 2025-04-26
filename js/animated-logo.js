// === Буква C ===
const containerC = document.getElementById('animationContainerC');
const letterC = document.getElementById('letterC');
const circleC = document.getElementById('circleC');
const squareC = document.getElementById('squareC');

let animationActiveC = false;
let stopRequestedC = false;

function runAnimationLoopC() {
  if (stopRequestedC) {
    animationActiveC = false;
    return;
  }

  // 1. Буква C уменьшает размер и вращается
  letterC.style.transform = 'rotate(-110deg) scale(0)';
  setTimeout(() => {
    letterC.style.opacity = '0';
    circleC.style.opacity = '1';
    circleC.style.transform = 'scale(1)';

    setTimeout(() => {
      circleC.style.opacity = '0';
      circleC.style.transform = 'scale(0)';
      squareC.style.opacity = '1';
      squareC.style.transform = 'rotate(45deg) scale(1)';

      setTimeout(() => {
        squareC.style.opacity = '0';
        squareC.style.transform = 'rotate(90deg) scale(0)';
        circleC.style.opacity = '1';
        circleC.style.transform = 'scale(1)';

        setTimeout(() => {
          circleC.style.opacity = '0';
          circleC.style.transform = 'scale(0)';
          letterC.style.opacity = '1';
          letterC.style.transform = 'rotate(0deg) scale(1)';

          setTimeout(() => {
            runAnimationLoopC(); // Повтор анимации
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 500); // Быстрое появление круга
}

// Запуск анимации при наведении
containerC.addEventListener('mouseenter', () => {
  if (!animationActiveC) {
    animationActiveC = true;
    stopRequestedC = false;
    runAnimationLoopC();
  }
});

// Остановка анимации при уходе курсора
containerC.addEventListener('mouseleave', () => {
  stopRequestedC = true;
});

// === Буква O ===
const containerO = document.getElementById('animationContainerO');
const letterO = document.getElementById('letterO');
const squareO = document.getElementById('squareO');

let animationActiveO = false;
let stopRequestedO = false;

function runAnimationLoopO() {
  if (stopRequestedO) {
    animationActiveO = false;
    return;
  }

  // 1. Поворот и уменьшение буквы O
  letterO.style.opacity = '0';
  letterO.style.transform = 'rotate(0deg) scale(1)';
  squareO.style.opacity = '0';

  letterO.classList.add('rotateShrink'); // Поворот и уменьшение

  setTimeout(() => {
    letterO.classList.remove('rotateShrink');
    squareO.style.opacity = '1';
    squareO.classList.add('squareO-small'); // Маленький квадрат, повёрнутый на 45°

    setTimeout(() => {
      squareO.classList.remove('squareO-small');
      squareO.classList.add('squareO-big'); // Квадрат увеличивается и поворачивается на 90°

      setTimeout(() => {
        squareO.classList.remove('squareO-big');
        letterO.style.opacity = '1';
        letterO.style.transform = 'rotate(-360deg) scale(1)';

        setTimeout(() => {
          letterO.style.opacity = '1'; // Появление буквы O
          setTimeout(() => {
            runAnimationLoopO(); // Повтор
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 500);
}

// Запуск анимации при наведении
containerO.addEventListener('mouseenter', () => {
  if (!animationActiveO) {
    animationActiveO = true;
    stopRequestedO = false;
    runAnimationLoopO();
  }
});

// Остановка анимации при уходе курсора
containerO.addEventListener('mouseleave', () => {
  stopRequestedO = true;
});

// === Буква N ===
const containerN = document.getElementById('animationContainerN');
const nWrapper = document.getElementById('nWrapper');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');

let animationActiveN = false;
let stopRequestedN = false;

function runAnimationLoopN() {
  if (stopRequestedN) {
    animationActiveN = false;
    return;
  }

  // Убираем старые стили
  n1.style.transition = 'none';
  n2.style.transition = 'none';
  n3.style.transition = 'none';
  nWrapper.style.transition = 'none';

  // Снимаем анимации для нового старта
  n1.style.animation = 'none';
  n2.style.animation = 'none';
  n3.style.animation = 'none';
  nWrapper.style.animation = 'none';

  // 1. Сдвигаем элементы к центру
  n1.style.animation = 'moveToCenterN1 1s forwards';
  n2.style.animation = 'moveToCenterN2 1s forwards';
  n3.style.animation = 'moveToCenterN3 1s forwards';

  setTimeout(() => {
    // 2. Вращаем контейнер
    nWrapper.style.animation = 'rotateWrapper 1s forwards';

    setTimeout(() => {
      // 3. Возвращаем элементы в исходное положение
      n1.style.animation = 'moveBackN1 1s forwards';
      n2.style.animation = 'moveBackN2 1s forwards';
      n3.style.animation = 'moveBackN3 1s forwards';
      nWrapper.style.animation = 'none';

      n1.style.transition = 'transform 1s ease, opacity 1s ease';
      n2.style.transition = 'transform 1s ease, opacity 1s ease';
      n3.style.transition = 'transform 1s ease, opacity 1s ease';

      n1.style.transform = 'translate(0, 0)';
      n2.style.transform = 'translate(0, 0)';
      n3.style.transform = 'translate(0, 0)';
      n1.style.opacity = '1';
      n2.style.opacity = '1';
      n3.style.opacity = '1';

      setTimeout(() => {
        runAnimationLoopN();
      }, 1000);
    }, 1000);
  }, 1000);
}

// Запуск анимации при наведении
containerN.addEventListener('mouseenter', () => {
  if (!animationActiveN) {
    animationActiveN = true;
    stopRequestedN = false;
    runAnimationLoopN();
  }
});

// Остановка анимации при уходе курсора
containerN.addEventListener('mouseleave', () => {
  stopRequestedN = true;
});

// === Буква I ===
document.addEventListener('DOMContentLoaded', () => {
  const animationContainerI = document.getElementById('animationContainerI');
  let isHoveredI = false;
  let animationIntervalI;

  function startAnimationCycleI() {
    if (animationIntervalI) return; // Цикл уже запущен

    animationContainerI.classList.add('animateI');
    const totalAnimationTime = 5000; // Цикл анимации длится 5 секунд

    animationIntervalI = setInterval(() => {
      animationContainerI.classList.remove('animateI');
      void animationContainerI.offsetWidth; // Форсируем перерисовку
      animationContainerI.classList.add('animateI');
    }, totalAnimationTime);
  }

  function stopAnimationCycleI() {
    clearInterval(animationIntervalI);
    animationIntervalI = null;

    setTimeout(() => {
      animationContainerI.classList.remove('animateI');
    }, 5000); // Ждем завершения цикла
  }

  animationContainerI.addEventListener('mouseenter', () => {
    isHoveredI = true;
    startAnimationCycleI();
  });

  animationContainerI.addEventListener('mouseleave', () => {
    isHoveredI = false;
    stopAnimationCycleI();
  });
});

// === Буква G ===
const animationContainerG = document.getElementById('animationContainerG');
const gWrapper = animationContainerG.querySelector('.g-wrapper');
const g1 = document.getElementById('g1');
const g2 = document.getElementById('g2');

let isAnimatingG = false;

function startGAnimation() {
  if (isAnimatingG) return; // Если анимация уже идет, не запускаем повторно
  isAnimatingG = true;

  function animateG() {
    // Шаг 1: Сдвиг элементов
    g1.animate([{ transform: 'translate(0, 0)' }, { transform: 'translate(10px, 10px)' }], {
      duration: 1000,
      easing: 'ease-in-out',
      fill: 'forwards',
    });

    g2.animate([{ transform: 'translate(0, 0)' }, { transform: 'translate(-14px, -14px)' }], {
      duration: 1000,
      easing: 'ease-in-out',
      fill: 'forwards',
    });

    // Шаг 2: Вращаем контейнер
    setTimeout(() => {
      gWrapper.animate(
        [
          { transform: 'rotate(0deg)' },
          { transform: 'rotate(65deg)' },
          { transform: 'rotate(0deg)' },
          { transform: 'rotate(0deg)' },
        ],
        {
          duration: 2000,
          easing: 'ease-in-out',
          fill: 'forwards',
        }
      );

      // Шаг 3: Возвращаем элементы на свои места
      setTimeout(() => {
        g1.animate([{ transform: 'translate(10px, 10px)' }, { transform: 'translate(0, 0)' }], {
          duration: 1000,
          easing: 'ease-in-out',
          fill: 'forwards',
        });

        g2.animate([{ transform: 'translate(-14px, -14px)' }, { transform: 'translate(0, 0)' }], {
          duration: 1000,
          easing: 'ease-in-out',
          fill: 'forwards',
        });

        // Завершаем анимацию
        isAnimatingG = false;
      }, 2000);
    }, 1000);
  }

  animateG();
}

function stopGAnimation() {
  // Анимация не будет остановлена, если она уже выполняется, т.к. её завершение будет через 2 секунды
}

animationContainerG.addEventListener('mouseenter', startGAnimation);
animationContainerG.addEventListener('mouseleave', stopGAnimation);

