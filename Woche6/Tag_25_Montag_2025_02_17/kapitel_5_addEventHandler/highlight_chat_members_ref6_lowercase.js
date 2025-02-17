'use strict';

{
 const init = () => {
    // hier beginnt das propgrammm
  // Event auswählen, hier keyup für das input - Element unten rechts
  $("form").reset();
  $("#member_search input").addEventListener("keyup", (e) => {
    console.log("e",e)
    // Handling wurde ausgelöst durch eine Taste (up)
    console.log("keyup")
    // wo ist das eigegebene e? er?
    // Im value des input-Elementes, eine Eigenschaft 
    
    console.log($("#member_search input")) // e! er!
    console.log(e.target)

    // enferne für ALLE Chatteilnehmer die Klasse rot
    chatMembers().forEach(li => li.classList.remove("highlighted")) // rot entfernt

    // rot neu setzen für alle mit 'e' bzw. 'er' und so weiter
    highlightChatMembersBy(e.target.value); // rot und rahmen

  })
 }

  const highlightChatMembersBy = (partOfMemberName) => {
    console.log('partOfMemberName --->', partOfMemberName);
    // ist partOfMemberName undefiniert
    if (partOfMemberName === '') return;

    // rot markieren
    chatMembers()
      .filter((member) => doesMemberMatch(partOfMemberName, member))
      .forEach(highlight);
  };

  const doesMemberMatch = (partOfMemberName, member) =>
    member.innerHTML.toLowerCase().includes(partOfMemberName.toLowerCase());

  const chatMembers = () => $$('#chat_members li');

  const highlight = (el) => el.classList.add('highlighted', 'rahmen');

  const $ = (q) => document.querySelector(q);
  const $$ = (q) => Array.from(document.querySelectorAll(q));


  init();
}
