function createGames(player1, hour, player2) {
  return `
      <li>
          <img src="./assets/teams/${player1}.svg" alt="Bandeira do time ${player1}" />
          <strong>${hour}</strong>
          <img src="./assets/teams/${player2}.svg" alt="Bandeira do time ${player2}" />
      </li>`;
}

function createCard(date, day, games) {
  return `
      <div class="card">
          <h2>${date}<span>${day}</span></h2>
          <ul>
              ${games}
          </ul>
      </div>`;
}

document.querySelector("#app").innerHTML = `
      <header>
          <img src="./assets/logo.svg" alt="Logo da NLW Copa" />
      </header>
      <main id="cards">
          ${createCard(
            "21/11",
            "SEGUNDA",
            createGames("brazil", "08:00", "cameroon") +
              createGames("hungary", "13:00", "argentina") +
              createGames("colombia", "20:00", "japan")
          )}
          ${createCard(
            "24/11",
            "QUINTA",
            createGames("britishcolumbia", "08:00", "cameroon") +
              createGames("india", "13:00", "armenia") +
              createGames("comoros", "20:00", "jordan")
          )}
      </main>
  `;