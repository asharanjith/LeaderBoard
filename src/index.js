import './style.css';
import displayScores from './modules/api.js';

// const submitButton = document.querySelector('.submitButton');

const refreshButton = document.querySelector('#refresh');
const form = document.querySelector('.inputPlayer');
const message = document.querySelector('#message');
const key = 'Fre06jK3qCMjBipi1fVQ';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;

refreshButton.addEventListener('click', () => {
  fetch(url,
    {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {
      displayScores(data.result);
    });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#playerName').value;
  const score = document.querySelector('#playerScore').value;
  const data = {
    user: name,
    score,
  };
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json());
  message.innerHTML = 'Score submitted successfully';
  message.classList.add('success');
  setTimeout(() => {
    message.innerHTML = '';
    message.classList.remove('success');
  }, 3000);
  document.querySelector('#playerName').value = '';
  document.querySelector('#playerScore').value = '';
});