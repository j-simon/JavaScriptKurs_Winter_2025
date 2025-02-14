const markiereChatTeilnehmer = (text) => {

    const liNodes = $$("#chat_members li");
    

    // const gefilteretLINodeListe= liNodes.filter(li => li.innerHTML.includes(text) )
    // console.log(gefilteretLINodeListe);
    // gefilteretLINodeListe.map(li => li.classList.add("highlighted") )

    const gefilteretLINodeListe = liNodes
      .filter(li => li.innerHTML.includes(text))
      .forEach(li => li.classList.add("highlighted"))

  }