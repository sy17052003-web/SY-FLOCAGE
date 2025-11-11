document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContact");
  const confirmation = document.getElementById("confirmation-contact");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nom = form.nom.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!nom || !email || !message) {
      alert("⚠️ Merci de remplir tous les champs avant d'envoyer !");
      return;
    }

    // Préparer le mailto :
    const sujet = encodeURIComponent(`Message de ${nom}`);
    const corps = encodeURIComponent(`Nom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`);

    // Ouvre le client mail
    window.location.href = `mailto:sy17052003@gmail.com?subject=${sujet}&body=${corps}`;

    // Affiche un message de confirmation visuelle
    confirmation.style.display = "block";
    form.reset();

    setTimeout(() => {
      confirmation.style.display = "none";
    }, 4000);
  });
});
