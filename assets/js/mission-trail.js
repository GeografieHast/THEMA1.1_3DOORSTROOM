/* Kronkelend "missiepad": een gestippeld spoor dat van boven naar onder
   door de pagina loopt, met een raketje dat mee naar beneden schuift
   terwijl je scrollt. Vervangt een eerdere, te drukke sterrenveld-
   achtergrond: rustiger, en toch duidelijk herkenbaar als "missie"-site.

   Het pad wordt getekend in dezelfde coördinaten als .wrap zelf (het
   pad-element staat er met top:0/left:0/100% breedte en hoogte in). De
   raketpositie wordt berekend op basis van hoeveel er al gescrold is
   TEN OPZICHTE VAN de bovenkant van .wrap (niet van het hele document,
   want de hero en de footer erboven/eronder zouden anders de verhouding
   scheeftrekken).

   Belangrijk: bij elke opdracht/quizvraag verschijnt er, ZODRA de
   bezoekersteller (counters.js) een antwoord terugkrijgt, een extra
   regeltje "X leerlingen maakten dit al". Dat gebeurt asynchroon, dus de
   paginahoogte kan nog een hele tijd na het laden veranderen. Een vaste
   reeks hertekeningen (na 400ms, 1200ms...) ving dat niet altijd op. Een
   ResizeObserver op .wrap merkt élke hoogteverandering op, hoe laat ook,
   en hertekent dan meteen. */

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

  let resizeT = null;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeT);
    resizeT = window.setTimeout(buildTrail, 150);
  });

  document.addEventListener("DOMContentLoaded", buildTrail);
  window.addEventListener("load", buildTrail);

  // Vangt alle latere hoogteveranderingen op (o.a. de bezoekerstellers
  // die pas na hun fetch een regeltje toevoegen), hoe laat ook.
  if (typeof ResizeObserver !== "undefined") {
    let roT = null;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(roT);
      roT = window.setTimeout(buildTrail, 60);
    });
    document.addEventListener("DOMContentLoaded", () => {
      const wrap = document.querySelector(".wrap");
      if (wrap) ro.observe(wrap);
    });
  } else {
    // Val terug op een vaste reeks hertekeningen voor (zeldzame) browsers
    // zonder ResizeObserver.
    window.addEventListener("load", () => {
      window.setTimeout(buildTrail, 400);
      window.setTimeout(buildTrail, 1200);
      window.setTimeout(buildTrail, 3000);
    });
  }
})();
