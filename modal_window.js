const modal = document.getElementById('tailwindModal');
const modal2 = document.getElementById('tailwindModalRezervace');
const titleEl = document.getElementById('m-title');
const nameEl = document.getElementById('m-name');
const roleEl = document.getElementById('m-role');
const emailEl = document.getElementById('m-email');
const categoryEl = document.getElementById('m-category');



function openTailwindModal(title, name, role, category) {
  // Naplnění dat
  titleEl.textContent = title;
  nameEl.textContent = name;
  roleEl.textContent = role;
  categoryEl.textContent = category;
  
  // Zobrazení (prohlížeč se postará o zbytek)
  modal.showModal();
}

function tailwindModalRezervace(email) {
  // Naplnění dat
  emailEl.value = email;
  
  // Zobrazení (prohlížeč se postará o zbytek)
  modal2.showModal();
}

function closeModal() {
  modal.close();
}

function closeModal2() {
  modal2.close();
}


// Bonus: Zavření kliknutím mimo okno (na backdrop)
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});


function openNewsModal(title, date, image, text) {

  document.getElementById("newsModalTitle").innerText = title;

  document.getElementById("newsModalDate").innerText = date;

  document.getElementById("newsModalText").innerText = text;

  document.getElementById("newsModalImage").style.backgroundImage =
    `url('${image}')`;

  document.getElementById("newsModal").showModal();
}

function closeNewsModal() {

  document.getElementById("newsModal").close();
}