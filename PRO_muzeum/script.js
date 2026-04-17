// SCROLL FUNKCE – posune stránku na sekci
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// TABY – přepínání mezi Kontakty / FAQ
function openTab(id,el){
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  el.classList.add('active');
}

//CAROUSEL
let index = 0;

function moveSlide(direction) {
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".carousel-card");
  
  if (!track || cards.length === 0) return; // Bezpečnostní pojistka

  // Zjistíme, kolik karet je vidět (podle CSS responsivity)
  const visible = window.innerWidth <= 600 ? 1 : 
                  window.innerWidth <= 992 ? 2 : 3;

  index += direction;

  // Limity: nepustíme index pod nulu ani za poslední viditelnou kartu
  if (index < 0) {
    index = 0;
  } else if (index > cards.length - visible) {
    index = cards.length - visible;
  }

  // Výpočet posunu: šířka jedné karty (včetně dělící linky)
  const cardWidth = cards[0].getBoundingClientRect().width;
  
  // Samotný pohyb
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

//scrollpsy
window.addEventListener('scroll', () => {
  let current = "";
  const sections = document.querySelectorAll("section"); // Najde všechny sekce
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    // -150 je tam proto, aby se barva změnila o něco dříve, než sekce narazí úplně nahoru
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
