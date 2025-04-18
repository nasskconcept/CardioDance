const equipe = [
    {
      nom: "Léa Fernandez",
      role: "Professeure de Zumba",
      img: "profZumba.jpg",
      desc: "Énergique et toujours souriante, Léa donne vie à la salle avec ses chorégraphies latino endiablées."
    },
    {
      nom: "Malik Diao",
      role: "Professeur de Strong Nation",
      img: "profStrongNation.jpg",
      desc: "Ancien coach sportif, Malik pousse ses élèves à se surpasser dans la bonne humeur."
    },
    {
      nom: "Chloé Morel",
      role: "Professeure Hip-Hop",
      img: "profHiphop.jpg",
      desc: "Chloé mêle street style et rythme cardio pour une ambiance urbaine punchy."
    },
    {
      nom: "Nadia Krief",
      role: "Stretching & Mobilité",
      img: "profStraching.jpg",
      desc: "Calme et attentive, Nadia vous aide à reconnecter corps et esprit en douceur."
    },
    {
      nom: "Jules Navarro",
      role: "Danse Libre",
      img: "profDanseurLibre.jpg",
      desc: "Jules met la créativité au centre de ses ateliers, pour une expression libre et authentique."
    },
    {
      nom: "Emma Roche",
      role: "Secrétaire / RH",
      img: "secretaire.jpg",
      desc: "Emma est la mémoire de l’asso, toujours à l’écoute pour organiser, répondre, accompagner."
    },
    {
      nom: "Yann Blanchard",
      role: "Direction Générale",
      img: "director.jpg",
      desc: "Visionnaire, Yann veille à faire rayonner CardioDance avec cœur et stratégie."
    },
    {
      nom: "Isabelle Soum",
      role: "Directrice Artistique",
      img: "directrice.jpg",
      desc: "Isabelle construit toute l’identité visuelle et la ligne artistique de l’association."
    },
    {
      nom: "Mehdi Karim",
      role: "Coordinateur Technique",
      img: "coordinateur.jpg",
      desc: "Toujours en mouvement, Mehdi gère la technique et les événements live avec passion."
    }
  ];
  
  function ouvrirModal(index) {
    const personne = equipe[index];
    document.getElementById("modal-img").src = personne.img;
    document.getElementById("modal-nom").textContent = personne.nom;
    document.getElementById("modal-role").textContent = personne.role;
    document.getElementById("modal-desc").textContent = personne.desc;
    document.getElementById("modal").style.display = "flex";
  }
  
  function fermerModal() {
    document.getElementById("modal").style.display = "none";
  }
