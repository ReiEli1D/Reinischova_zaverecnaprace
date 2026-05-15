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
var countDownDate = new Date("Jun 5, 2026 15:37:25").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("odpocet").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("odpocet").innerHTML = "EXPIRED";
  }
}, 1000);