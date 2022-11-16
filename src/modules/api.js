const list = document.querySelector('#recent-scores');

const displayScores = (data) => {
  data.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `${element.user}: ${element.score}`;
    list.appendChild(li);
  });
};

export default displayScores;