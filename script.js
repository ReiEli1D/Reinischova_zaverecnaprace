document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. NEKONEČNÝ PLYNULÝ CAROUSEL ---
    const track = document.getElementById('carouselTrack');
    
    if (track) {
        // Zduplikujeme obsah carouselu, aby mohl běžet nekonečně bez mezer
        const cards = Array.from(track.children);
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });

        let scrollPos = 0;
        const speed = 0.5; // Rychlost pohybu (nižší číslo = pomalejší/elegantnější)

        function animateCarousel() {
            scrollPos -= speed;
            
            // Pokud jsme se posunuli o polovinu celkové šířky (tedy o délku původních karet), 
            // resetujeme pozici na nulu pro plynulý navazující efekt.
            if (Math.abs(scrollPos) >= track.scrollWidth / 2) {
                scrollPos = 0;
            }
            
            track.style.transform = `translateX(${scrollPos}px)`;
            requestAnimationFrame(animateCarousel);
        }

        animateCarousel();

        track.addEventListener('mouseenter', () => {
           
        });
    }

    // --- 2. SMOOTH SCROLL (Hladké posouvání na sekce) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // -70px kvůli fixnímu navbaru
                    behavior: 'smooth'
                });
            }
        });
    });

});

// --- 3. PŘEPÍNÁNÍ TABŮ (Sekce O NÁS / KONTAKT) ---
function openTab(id, el) {
    // 1. Najdeme všechny obsahy a taby
    const contents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab-lux');

    // 2. Vše skryjeme a odebereme aktivní třídy
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
    });

    // 3. Aktivujeme kliknutý tab v menu
    el.classList.add('active');
    
    // 4. Zobrazíme obsah s animací
    const activeContent = document.getElementById(id);
    if (activeContent) {
        activeContent.style.display = 'block';
        // Timeout pro spuštění CSS transition (opacity a transform)
        setTimeout(() => {
            activeContent.classList.add('active');
        }, 10);
    }
}

//COUNTDOWN
// Nastavení data (zkontroluj, zda je v budoucnu!)
var countDownDate = new Date("May 19, 2026 08:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // KONTROLA: Zapisuj pouze pokud elementy existují
  const dEl = document.getElementById("days");
  const hEl = document.getElementById("hours");
  const mEl = document.getElementById("minutes");
  const sEl = document.getElementById("seconds");

  if (dEl) dEl.innerText = days.toString().padStart(2, '0');
  if (hEl) hEl.innerText = hours.toString().padStart(2, '0');
  if (mEl) mEl.innerText = minutes.toString().padStart(2, '0');
  if (sEl) sEl.innerText = seconds.toString().padStart(2, '0');

  // Pokud odpočet vyprší
  if (distance < 0) {
    clearInterval(x);
    if (dEl) dEl.closest('.countdown-container').innerHTML = "VÝSTAVA ZAČALA!";
  }
}, 1000);