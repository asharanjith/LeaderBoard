const list = document.querySelector('#recent-scores');

const displayScores = (data) => {
  list.innerHTML = '';
  const scores = data.sort((a, b) => b.score - a.score);
  const scoresList = scores.map((score) => {
    const li = document.createElement('li');
    li.innerHTML = `${score.user}: ${score.score}`;
    return li;
  });
  scoresList.forEach((score) => {
    list.appendChild(score);
  });
};

export default displayScores;