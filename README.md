# Verkenningsmissie: de aarde vanuit de ruimte (doorstroom)

Studiesite voor leerlingen bij **Thema 1, Hoofdstuk 1: De aarde vanuit de
ruimte**, doorstroomversie. Bevat theorie, flashcards, een quiz en
kaartoefeningen. Bewust anders vormgegeven dan de 3D/A-site
("Missie: de aarde vanuit de ruimte"): donkerder nachtlancering-thema met
roest-oranje/amber in plaats van paars/mint, en een andere raket (een
shuttle met twee strap-on boosters i.p.v. de slanke vin-raket).

## Verschil met de 3D/A-site (inhoudelijk)

- **Atmosfeer, kleuren herkennen, de 6 fysischgeografische landschapsvormende
  lagen en absolute/relatieve ligging**: hergebruikt van de 3D/A-site, op
  jouw vraag, omdat de doorstroom-PDF die je aanleverde pas op p. 24 start
  en deze onderdelen niet bevat.
- **Continenten/werelddelen**: 5 continenten / 8 werelddelen, zoals op de
  3D/A-site. Dit ondanks dat de doorstroom-PDF zelf 6 continenten en 6 of 7
  werelddelen telt (Amerika soms gesplitst). Op jouw keuze bewust niet
  overgenomen.
- **"De aarde biedt kansen" en "De mens creëert kansen"**: herschreven met
  de vollere, meer verklarende zinnen uit de doorstroom-PDF (bv. de nuance
  dat droge warme/gematigde gebieden weinig landbouw toelaten) in plaats
  van de kortere opsomming per laag op de 3D/A-site.
- **Nieuw kaartje "Grondstoffen en bevolkingsspreiding"**: gebaseerd op
  opdracht 3 uit de doorstroom-PDF (Siberië, Zuid-Nigeria, Australië,
  België, Noorden van Canada). Het besluit dat er géén duidelijke
  rechtstreekse relatie is tussen grondstoffen en bevolkingsdichtheid, wat
  in de 3D/A-versie niet aan bod komt.
- **Extra oefeningen**: een reliëf-vraag over Mumbai/Tibet (opdracht 2), een
  juist/fout-vraag over grondstoffen, en een uitdagingsvraag die
  grondstoffen met klimaat combineert (Zuid-Nigeria vs. Siberië).
- **Terugkoppelingsmechanismen**: toegevoegd nadat bleek dat dit wél op je echte toets voor dit hoofdstuk staat (positief/negatief, gekoppeld aan de ruimtelijke spreiding van de mens via een stads-/urbanisatievoorbeeld). Ik had hiervoor geen brontekst van je methode, dus dit stuk is zelf uitgeschreven volgens de standaardbetekenis van het begrip. Controleer de formulering tegen je handboek/leerplan.
- **Extra oefenkaarten ter voorbereiding op de toets**: terugkoppeling, waarneming via nachtbeelden, terrasbouw en bodemkwaliteit, telkens anders geformuleerd dan de effectieve toetsvragen (niet gekopieerd), maar wel op hetzelfde niveau/type.
- **Opdracht 1, 2 en 3 (p. 26-27)** staan als herkenbare, apart gelabelde oefeningen bij Kaartmissies (niet enkel verwerkt in de theorie):
  - Opdracht 1 hergebruikt de Australië-klimaatkaarten van de 3D/A-site (zelfde vaardigheid: klimaat + bevolking op de kaart).
  - Opdracht 2 (Mumbai/Tibet) gebruikt nu de echte, schone foto's uit het doorstroomboek (`assets/img/mumbai.png` en `assets/img/tibet.png`) in plaats van een omschrijving die het antwoord al verklapte: leerlingen herkennen de plaats eerst visueel, en verklaren pas daarna via reliëf.
  - Opdracht 3 (grondstoffentabel) is nu drie keuzevragen per gebied (dun-/dichtbevolkt, continent, werelddeel) in plaats van open tekstvelden, net als in het handboek. Het besluit ("is er een relatie tussen grondstoffen en bevolkingsspreiding?") staat er apart bij, ongewijzigd.
- **`map-exercise.js`** is aangepast zodat een kaartoefening ook zonder afbeelding kan (voor opdracht 3, waar er geen kaart bij hoort).
- **Extra echte foto's uit het doorstroomboek**: het nachtbeeld vanuit het ISS (bij "De aarde biedt kansen") en de terrasbouw-foto (bij "De mens creëert kansen"), beide schone versies zonder watermerk.
- **Eigen visuele identiteit voorbij de hero**: een subtiel "sterrenveld" over de hele pagina in plaats van enkel in de hero, een gekleurde missiestrook bovenaan elke kaart, asymmetrische paneelhoeken in plaats van de volledig ronde kaarten van 3D/A, en een gestippelde onderlijn bij elke sectietitel. Zo blijft de site herkenbaar anders, ook verder naar beneden op de pagina.
- **"Wist je dat?"**: een leuk weetje over Monaco (dichtstbevolkt, ruim 25.000 inw./km²) en Mongolië (dunst bevolkt, ca. 2 inw./km²) bij de theorie over bevolkingsspreiding.
- **Positief/negatief ≠ goed/slecht**: expliciet toegevoegd bij de terugkoppelingstheorie, met een aparte juist/fout-oefenkaart die dat misverstand rechtstreeks test: een negatieve (dempende) terugkoppeling houdt systeem aarde net stabiel, een positieve (versterkende) kan het net uit evenwicht brengen.
- De tabeloefeningen uit Test Jezelf 1 (opdracht 1, met een genummerde
  kaart) en Test Jezelf 2 (opdracht 6, coördinaten) zijn **niet**
  overgenomen: de ingevulde antwoorden in die PDF's bevatten fouten (o.a.
  coördinaten die niet bij het vermelde land passen), en ik had geen schone
  kaartafbeelding om de oefening zelf opnieuw op te bouwen. Opdracht 7 uit
  Test Jezelf 2 (juist/fout-stellingen, zonder locatiegegevens) is wel
  verwerkt, want die klopt en is niet locatiegebonden.

## Publiceren op GitHub Pages

1. Maak een nieuwe (of gebruik een bestaande) GitHub-repository. **Niet**
   dezelfde repo als de 3D/A-site, anders overschrijven de bestanden elkaar.
2. Upload alle bestanden en mappen uit deze zip naar de root van de
   repository (dus `index.html` en de map `assets/` komen rechtstreeks in
   de repo, niet in een submap).
3. Ga naar **Settings → Pages**.
4. Kies bij **Source** de branch `main` en map `/ (root)`.
5. Na een minuutje staat de site live op
   `https://<jouw-gebruikersnaam>.github.io/<repo-naam>/`.

## Bestandsstructuur

```
index.html                 → de volledige site (één pagina)
assets/css/style.css       → alle styling (eigen kleurenpalet + raket)
assets/js/counters.js      → gedeelde tellers (eigen namespace, los van 3D/A)
assets/js/quiz.js          → de quizmotor (meerkeuze, met score)
assets/js/flashcards.js    → de flashcard-motor
assets/js/map-exercise.js  → de kaartoefening-motor
assets/js/examenstijl.js   → kort antwoord / open vraag / rangschikken
assets/img/*.png           → afbeeldingen, hergebruikt uit de 3D/A-site
                              (zelfde onderwerp/handboekreeks, zonder
                              antwoorden erop)
```

## Zelf aanpassen

- Vragen/flashcards aanpassen: open `index.html`, zoek de `<script>`
  onderaan en pas de teksten in `buildFlashcards(...)` of `buildQuiz(...)`
  aan.
- Kleuren aanpassen: alle kleuren staan bovenaan `assets/css/style.css`
  onder `:root`.
- Bezoekers-/opdrachtteller resetten: verander `MISSIE_NAMESPACE` bovenaan
  `assets/js/counters.js`.
