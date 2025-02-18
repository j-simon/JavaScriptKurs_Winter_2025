'use strict';
 
{
    const highlightChatMembersBy = (partOfMemberName) => {
        console.log("event")
        chatMembers()
            .filter((member) => doesMemberMatch(partOfMemberName, member))
            .forEach(highlight);
    };
 
    const doesMemberMatch = (partOfMemberName, member) => {
        return  member.innerHTML.toLowerCase().includes(partOfMemberName.toLowerCase());
    };
 
    const chatMembers = () => $$('#chat_members li');
    const highlight = (el) => el.classList.add('highlighted');
 
    const $ = (qs) => document.querySelector(qs);
    const $$ = (qs) => Array.from(document.querySelectorAll(qs));
   
    $('#member_search input').addEventListener('keyup', () => {
        highlightChatMembersBy($('#member_search input').value);
    });
}