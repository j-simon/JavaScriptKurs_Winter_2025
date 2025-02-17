'use strict';

// 1. Schreibe eine Funktion, die allen p-Elementen die CSS-Klasse gray zuordnet.
// a selector // b class add
 $$("p").forEach(p => p.classList.add("gray"));
 $$("p.buy_info_text")[0].classList.remove("gray");

// 2.  Eine Ausnahme soll nur der Fließtext darstellen, der den Kaufvorgang enthält.
// Die p-Elemente mit der Klasse buy_info_text sollen dementsprechend von dem 
// Vorgang ausgeschlossen werden.
$$("p:not(.buy_info_text)").forEach(p => p.classList.add("gray"));


// 3. Weise nun allen Listenpunkten, die noch keine andere Klasse haben, die Klasse gray zu
$$("li:not([class])").forEach(li => li.classList.add("gray"));



