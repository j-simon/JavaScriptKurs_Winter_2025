'use strict';

let currentMessageNumber = 1;

const init = () => {
  showMessageByNumber(currentMessageNumber);

  document.body.addEventListener('keyup', handleKeys);

  document.querySelector('[title=next]').addEventListener('click', nextMessage);
  document.querySelector('[title=prev]').addEventListener('click', prevMessage);
  document.querySelector('[title=first]').addEventListener('click', firstMessage);
  document.querySelector('[title=last]').addEventListener('click', lastMessage);
};

const handleKeys = (e) => {
  switch (e.key) {
    case 'ArrowRight':
      e.altKey ? lastMessage(e) : nextMessage(e);
      break;
    case 'ArrowLeft':
      e.altKey ? firstMessage(e) : prevMessage(e);
      break;
    default:
      return;
  }
  console.log(e);
};

const showFirstMessage = () => showMessageByNumber(1);

const prevMessage = (e) => {
  e.preventDefault();
  showMessageByNumber(Math.max(1, currentMessageNumber - 1));
};

const nextMessage = (e) => {
  e.preventDefault();
  showMessageByNumber(Math.min(messages.length, currentMessageNumber + 1));
};

const lastMessage = (e) => {
  e.preventDefault();
  showMessageByNumber(messages.length);
};

const firstMessage = (e) => {
  e.preventDefault();
  showMessageByNumber(1);
};

const showMessageByNumber = (messageNumber) => {
  currentMessageNumber = messageNumber;

  document.querySelector('.message_number').textContent = String(messageNumber);
  document.querySelector('.newsboard_content').textContent = messages[messageNumber - 1];

  const progress = document.querySelector('progress#messages_progress');
  if (progress) progress.value = messageNumber;

  const nextButton = document.querySelector('[title=next]');
  const prevButton = document.querySelector('[title=prev]');
  const lastButton = document.querySelector('[title=last]');
  const firstButton = document.querySelector('[title=first]');

  nextButton.disabled = messageNumber === messages.length;
  prevButton.disabled = messageNumber === 1;
  lastButton.disabled = messageNumber === messages.length;
  firstButton.disabled = messageNumber === 1;
};

const messages = [
  `1`,
  `2`,
  `3`,
  `4`,
];

init();