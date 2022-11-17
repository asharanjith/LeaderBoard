const list = document.querySelector('#recent-scores');

const displayScores = (data) => {
  list.innerHTML = '';
  const scores = data.sort((a, b) => b.score - a.score);
  const scoresList = scores.map((score) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${score.user}</span> <span>${score.score}</span>`;
    return li;
  });
  scoresList.forEach((score) => {
    list.appendChild(score);
  });
};

export default displayScores;