document.addEventListener("DOMContentLoaded", () => {
  const boutonReservation = document.querySelector(".boutton");

  if (!boutonReservation) return;

  boutonReservation.addEventListener("click", (e) => {
    e.preventDefault();

    // Fenêtre de choix
    const choix = prompt(
      "Choisis le type de réservation :\n1️⃣ Maillot\n2️⃣ T-shirt\n3️⃣ Lot d'équipe"
    );

    if (!choix) {
      alert("Réservation annulée.");
      return;
    }

    const c = choix.trim().toLowerCase();

    if (c === "1" || c.includes("maillot")) {
      window.location.href = "reservation-maillot.html";
    } else if (c === "2" || c.includes("t-shirt") || c.includes("tshirt")) {
      window.location.href = "reservation-tshirt.html";
    } else if (c === "3" || c.includes("lot") || c.includes("équipe")) {
      window.location.href = "reservation-lot.html";
    } else {
      alert("❌ Choix invalide. Veuillez entrer 1, 2 ou 3.");
    }
  });
});
