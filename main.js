function creatGame(player1, hour, player2) {
  return `
    <li>
    <img src="./assets/icon=${player1}.svg" alt="${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon=${player2}.svg" alt="${player2}" />
  </li>
    `;
}

function creatCard(date, day, games) {
  return `
    <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
  </div>
    `;
}

document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="logo da NLW" />
    </header>
    <main id="cards">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${creatCard("24/11", "quinta", 
            creatGame("switzerland", "07:00", "cameroon") + 
            creatGame("uruguay", '10:00', 'south korea') + 
            creatGame('portugal', '13:00','ghana') + 
            creatGame('brazil', '16:00', 'serbia'))
        }
        ${creatCard('28/11', 'segunda',
            creatGame("cameroon", "07:00", "serbia") + 
            creatGame("south korea", '10:00', 'ghana') + 
            creatGame('brazil', '13:00','switzerland') + 
            creatGame('portugal', '16:00', 'uruguay'))           
        }
        ${creatCard('02/12', 'sexta',
            creatGame("south korea", "07:00", "portugal") + 
            creatGame("ghana", '10:00', 'uruguay') + 
            creatGame('brazil', '13:00','cameroon') + 
            creatGame('serbia', '16:00', 'switzerland'))           
        }
    </main>
`;
