const essayDraft = document.querySelector('#essay-draft');
const wordCount = document.querySelector('#word-count');

function updateWordCount() {
  const words = essayDraft.value.trim().match(/\S+/gu) || [];
  wordCount.textContent = `${words.length} ${words.length === 1 ? 'palavra' : 'palavras'}`;
}

essayDraft.addEventListener('input', updateWordCount);
updateWordCount();
