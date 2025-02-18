'use strict'


let currentMessageNumber = 1

const init = () => {
  // zahl schreiben?! nein
  showFirstMessage()

  $("body").addEventListener('keyup', handleKeys)

  $('[title=next]').addEventListener('click', nextMessage)
  $('[title=prev]').addEventListener('click', prevMessage)
  $('[title=first]').addEventListener('click', firstMessage)
  $('[title=last]').addEventListener('click', lastMessage)

}
// const handleKeys = e => {
//   if (e.key == "ArrowRight" && e.altKey === false) nextMessage(e)
//   if (e.key == "ArrowLeft" && e.altKey === false) prevMessage(e)

//   if (e.key == "ArrowRight" && e.altKey === true) lastMessage(e)
//   if (e.key == "ArrowLeft" && e.altKey === true) firstMessage(e)
//   console.log(e)
// }

const handleKeys = e => {
  e.key === "ArrowRight" && !e.altKey
    ? nextMessage(e)
    : e.key === "ArrowLeft" && !e.altKey
      ? prevMessage(e)
      : e.key === "ArrowRight" && e.altKey
        ? lastMessage(e)
        : e.key === "ArrowLeft" && e.altKey
          ? firstMessage(e)
          : null;

  console.log(e);
}

const showFirstMessage = () => {
  // zahl schreiben!? nein
  showMessageByNumber(1)
}

const nextMessage = e => { // event-Objekt
  // console.log(e)
  showMessageByNumber((currentMessageNumber += 1))
  e.preventDefault() // verhindere den Standard ( das Hyperlinking zu )
}
const prevMessage = e => {
  showMessageByNumber((currentMessageNumber -= 1))
  e.preventDefault()
}

const lastMessage = e => { // event-Objekt
  // console.log(e)
  showMessageByNumber((currentMessageNumber = messages.length))
  e.preventDefault()
}
const firstMessage = e => {
  showMessageByNumber((currentMessageNumber = 1))
  e.preventDefault()
}

const showMessageByNumber = messageNumber => {
  //  <span class="message_number"></span>

  $(".message_number").innerHTML = String(messageNumber);
  $('.newsboard_content').innerHTML = messages[messageNumber - 1]

}
//


const messages = [
  `1`,

  `2`,

  `3`,

  `4`,
]

const $ = q => document.querySelector(q)
const $$ = q => Array.from(document.querySelectorAll(q))

init()

