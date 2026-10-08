document.querySelectorAll('.activity-details').forEach((activity) => {
  const buttons = activity.querySelectorAll('.answer-btn');
  const result = activity.querySelector('.challenge-result');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const correctAnswer = [...buttons].find((option) => option.dataset.correct === 'true');
      const isCorrect = button.dataset.correct === 'true';

      buttons.forEach((option) => {
        option.disabled = true;

        if (option === correctAnswer) {
          option.classList.add('correct');
        }

        if (option === button && !isCorrect) {
          option.classList.add('wrong');
        }
      });

      result.textContent = isCorrect
        ? activity.dataset.correctMessage || 'Isso aí! Você acertou.'
        : `Quase! A resposta certa é ${correctAnswer.textContent.trim()}.`;
    });
  });
});
