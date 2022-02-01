const express = require('express');
const morgan = require('morgan');
const path = require('path');
const playersProfile = require('./players_profile');

const app = express();
app.use(express.static('public'));

app.use(morgan('dev'));

const squad = playersProfile.list();

app.get('/', (req, res) => {

    const html = `<!DOCTYPE html>
    <html>
      <head>
        <title>2014 FIFA World Cup Champion - Germany</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="news-list">
          <header><img src="/23px-Flag_of_Germany.svg.png"/>Germany Squad - 2014 FIFA World Cup Champion<img style="padding-left: 10px" src="/2014_FIFA_World_Cup.svg.png" id="wc2014logo" /></header>
          ${squad.map(player => `
            <div class='news-item'>
              <p>
                <span class="news-position"><font size="+2"><b>No. ${player.id}</b></font> ▲</span>${player.name}
                <small>(${player.position})</small>
              </p>
              <small class="news-info">
              Date of Birth: ${player.dateOfBirth} | Age: ${player.age} | Club: ${player.club}
              </small>
            </div>`
          ).join('')}
        </div>
      </body>
    </html>`

  res.send(html);

});

app.get('/players/:id', (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const player = playersProfile.find(id);
    const html = `<!DOCTYPE html>
      <html>
        <head>
          <title>Wizard News</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div class="news-list">
          <header><img src="/23px-Flag_of_Germany.svg.png"/>Germany Squad - 2014 FIFA World Cup Champion<img style="padding-left: 10px" src="/2014_FIFA_World_Cup.svg.png" id="wc2014logo" /></header>
              <div class='news-item'>
                <p>
                  <font size="+2"><b>No. ${player.id}</b></font>&ensp;
                  <span class="news-position">${player.name}</span>
                  <small>(${player.position})</small>
                </p>
                <p>${player.club}</p>
              </div>
          </div>
        </body>
      </html>`;
  
    res.send(html);
  }
    
  );

const PORT = 1335;

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
});