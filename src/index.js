import './style.css';
import displayScores from './modules/api.js';

const refreshButton = document.querySelector('#refresh');
const form = document.querySelector('.inputPlayer');
const message = document.querySelector('#message');
const key = 'Fre06jK3qCMjBipi1fVQ';
// const key = process.env.API_KEY;
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;

refreshButton.addEventListener('click', () => {
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    displayScores(data.result);
  };
  fetchData();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#playerName').value;
  const score = document.querySelector('#playerScore').value;
  const data = {
    user: name,
    score,
  };

  const postData = async () => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const returndata = await response.json();
    if (returndata.result === 'Leaderboard score created correctly.') {
      message.innerHTML = 'Score submitted successfully';
      message.classList.add('success');
      setTimeout(() => {
        message.innerHTML = '';
        message.classList.remove('success');
      },
      3000);
    }
  };

  document.querySelector('#playerName').value = '';
  document.querySelector('#playerScore').value = '';

  postData();
});
