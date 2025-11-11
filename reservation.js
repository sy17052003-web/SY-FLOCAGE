document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formeReservation");
  const confirmation = document.getElementById("confirmation");

  if (!form || !confirmation) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Récupération des valeurs du formulaire
    const nom = form.nom.value.trim();
    const numero = form.numero.value.trim();
    const type = form.type.value.trim();
    const taille = form.taille.value.trim();
    const message = form.message.value.trim();

    if (!nom || !numero || !type || !taille) {
      alert("⚠️ Merci de remplir tous les champs obligatoires !");
      return;
    }

    // Construction du mailto
    const sujet = encodeURIComponent(`Réservation de ${nom}`);
    const corps = encodeURIComponent(
      `Nom : ${nom}\nNuméro : ${numero}\nType : ${type}\nTaille : ${taille}\n\nMessage :\n${message}`
    );

    // Ouvre le client mail
    window.location.href = `mailto:sy17052003@gmail.com?subject=${sujet}&body=${corps}`;

    // Affichage de la confirmation visuelle
    confirmation.style.display = "block";
    form.reset();

    setTimeout(() => {
      confirmation.style.display = "none";
    }, 4000);
  });
});
