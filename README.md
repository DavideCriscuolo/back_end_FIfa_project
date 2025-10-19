# Back-end: Proxy API giocatori

Breve descrizione

- Questo back-end funge da proxy per richieste relative a giocatori, inoltrando le richieste verso API esterne definite nelle variabili d'ambiente. Implementazione principale in [index.js](index.js).

Endpoint principali

- GET `/api/players/:page` — implementato in [`app.get("/api/players/:page")`](index.js). Riceve il parametro `page` e inoltra la richiesta a `URL_PLAYER_PAGES`.
- POST `/api/players/` — implementato in [`app.post("/api/players/")`](index.js). Riceve nel body `namePlayer` e inoltra la richiesta a `URL_PLAYER_REQUEST + namePlayer`.

Tecnologie e dipendenze

- Node.js (esegue l'app).
- [Express](package.json) — framework HTTP.
- [cors](package.json) — abilitazione CORS.
- [dotenv](package.json) — caricamento variabili d'ambiente.
  Le dipendenze sono elencate in [package.json](package.json).
