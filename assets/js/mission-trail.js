/* Kronkelend "missiepad": een gestippeld spoor dat van boven naar onder
   door de pagina loopt, met een raketje dat mee naar beneden schuift
   terwijl je scrollt. Vervangt een eerdere, te drukke sterrenveld-
   achtergrond: rustiger, en toch duidelijk herkenbaar als "missie"-site.

   Het pad wordt getekend in dezelfde coördinaten als .wrap zelf (het
   pad-element staat er met top:0/left:0/100% breedte en hoogte in). De
   raketpositie wordt berekend op basis van hoeveel er al gescrold is
   TEN OPZICHTE VAN de bovenkant van .wrap (niet van het hele document,
   want de hero en de footer erboven/eronder zouden anders de verhouding
   scheeftrekken). */

(function () {
  let pathEl = null;
  let pathLength = 0;
  let builtHeight = 0;
  let wrapTopOffset = 0;

  function buildTrail() {
    const wrap = document.querySelector(".wrap");
    const svg = document.getElementById("missionTrailSvg");
    if (!wrap || !svg) return;

    const width = wrap.clientWidth;
    const height = wrap.scrollHeight;
    if (!width || !height) return;

    builtHeight = height;
    wrapTopOffset = wrap.getBoundingClientRect().top + window.scrollY;

    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    const amplitude = Math.min(130, width * 0.3);
    const centerX = width / 2;
    const period = 640;
    const step = 26;

    let d = `M ${centerX} 0`;
    for (let y = step; y <= height; y += step) {
      const x = centerX + Math.sin((y / period) * Math.PI * 2) * amplitude;
      d += ` L ${x.toFixed(1)} ${y}`;
    }
    svg.innerHTML = `<path d="${d}"></path>`;

    pathEl = svg.querySelector("path");
    pathLength = pathEl.getTotalLength();
    positionRocket();
  }

  function positionRocket() {
    if (!pathEl || builtHeight <= 0) return;
    const rocket = document.getElementById("missionTrailRocket");
    if (!rocket) return;

    const scrollWithinWrap = Math.min(builtHeight, Math.max(0, window.scrollY - wrapTopOffset));
    const scrollFrac = scrollWithinWrap / builtHeight;

    const point = pathEl.getPointAtLength(pathLength * scrollFrac);
    rocket.style.left = point.x + "px";
    rocket.style.top = point.y + "px";
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      positionRocket();
      ticking = false;
    });
  }, { passive: true });

  window.addEventListener("resize", () => {
    window.clearTimeout(window._missionTrailResizeT);
    window._missionTrailResizeT = window.setTimeout(buildTrail, 150);
  });

  document.addEventListener("DOMContentLoaded", buildTrail);
  // Afbeeldingen en lettertypes kunnen de paginahoogte nog laten
  // verschuiven nadat 'load' al gevuurd is, dus we herberekenen nog
  // een paar keer met wat vertraging om dat op te vangen.
  window.addEventListener("load", () => {
    buildTrail();
    window.setTimeout(buildTrail, 400);
    window.setTimeout(buildTrail, 1200);
  });
})();
