(() => {
  const app = document.querySelector('.app');
  const banner = document.createElement('aside');
  banner.className = 'event-banner'; banner.id = 'event-banner';
  banner.setAttribute('aria-label', 'Qiskit Fall Fest · Marco Mayta');
  const portrait = IMAGES['foto_marco_nueva.jpg'];
  banner.innerHTML = `<div class="event-organizer">IBM <strong>Quantum</strong></div>
  <div class="festival-wordmark"><small>IBM QUANTUM</small><b>QISKIT</b><small>FALL</small><strong>FEST!</strong></div>
  <div class="event-edition">UNIVERSITY TOUR · 2026</div>
  <div class="banner-speaker"><img class="banner-photo" src="${portrait}" alt="Marco Mayta"><div><h2>MARCO<br>MAYTA</h2><p>Director de investigación · QPerú<br>PhD Student · ICMC–USP<br><strong>QIntern 2026 · QWorld</strong><br>Research Intern</p></div></div>
  <div class="banner-countries"><span><svg viewBox="0 0 90 60" role="img" aria-label="Bandera del Perú"><path fill="#d91023" d="M0 0h90v60H0z"/><path fill="white" d="M30 0h30v60H30z"/></svg> Perú</span><span><svg viewBox="0 0 90 60" role="img" aria-label="Bandera de Brasil"><path fill="#009739" d="M0 0h90v60H0z"/><path fill="#fedf00" d="M45 7 79 30 45 53 11 30Z"/><circle fill="#002776" cx="45" cy="30" r="14"/><path d="M32 25q15-1 26 11" stroke="white" stroke-width="3" fill="none"/></svg> Brasil</span></div>
  <div class="banner-logos"><img src="${IMAGES['qworld-logo.jpg']}" alt="QWorld"><img src="${IMAGES['qperu-logo.svg']}" alt="QPerú"></div>
  <div class="banner-talk"><small>LET’S TALK QUANTUM</small><h3>De los bits<br>a los qubits.</h3><p>Explorando la computación cuántica con Qiskit</p></div>
  <svg class="banner-mascot" viewBox="0 0 280 180" role="img" aria-label="Mascota cuántica con chullo andino y computadora"><defs><pattern id="hat-pattern" width="38" height="28" patternUnits="userSpaceOnUse"><path d="M19 2 35 14 19 26 3 14Z" fill="none" stroke="#ff7dbd" stroke-width="5"/></pattern></defs><ellipse cx="140" cy="169" rx="121" ry="10" fill="#b5a5e8"/><path d="M59 138Q27 158 30 127Q34 108 64 102M207 106Q248 110 248 139Q242 155 213 137" fill="#351354"/><path d="M65 143V82Q64 32 133 31Q207 30 211 88V151Q137 178 65 143" fill="#351354"/><path d="M64 88Q53 14 135 13Q213 18 213 89Q143 61 64 88" fill="#351354" stroke="#ff7dbd" stroke-width="4"/><path d="M64 88Q53 14 135 13Q213 18 213 89Q143 61 64 88" fill="url(#hat-pattern)"/><path d="M134 14V2M126 15 119 4M141 15 149 4" stroke="#f378b5" stroke-width="6" stroke-linecap="round"/><ellipse cx="109" cy="106" rx="20" ry="26" fill="white"/><ellipse cx="169" cy="106" rx="20" ry="26" fill="white"/><ellipse cx="115" cy="113" rx="9" ry="15" fill="#351354"/><ellipse cx="163" cy="113" rx="9" ry="15" fill="#351354"/><circle cx="139" cy="130" r="4" fill="white"/><path d="m66 85-8 60m154-60 8 60" stroke="#f378b5" stroke-width="9" stroke-dasharray="7 3"/><path d="m103 166 15-42h91l-16 42Z" fill="#b6a0e5" stroke="#351354" stroke-width="3"/><path d="M88 166h113" stroke="#351354" stroke-width="4"/><text x="161" y="153" text-anchor="middle" fill="white" font-size="28" font-family="Arial">Q</text></svg>
  <div class="banner-institutions"><strong>QPerú × UNA Puno</strong><span>Universidad Nacional del Altiplano</span><small>Ingeniería Estadística e Informática</small></div>`;
  app.append(banner);
  const button = document.createElement('button'); button.textContent = 'Banner';
  button.setAttribute('aria-controls', banner.id);
  button.title = 'Mostrar u ocultar el banner';
  let visible = innerWidth >= 1100;
  const update = () => {app.classList.toggle('with-event-banner', visible);banner.hidden = !visible;button.setAttribute('aria-expanded', String(visible));window.dispatchEvent(new Event('resize'));};
  button.addEventListener('click', () => {visible = !visible;update();});
  document.querySelector('.toolbar').prepend(button);update();
})();
