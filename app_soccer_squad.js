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
          <header style="font-size:30px"><img src="/23px-Flag_of_Germany.svg.png" id="deflag"/><img src="/germanynationalteamlogo.png" id="dfblogo"/>Germany Squad - 2014 FIFA World Cup Champion<img style="padding-left: 10px" src="/2014_FIFA_World_Cup.svg.png" id="wc2014logo" /></header>
          ${squad.map(player => `
            <div class='news-item'>
              <a href='/players/${player.id}'>
              <p>
                <span class="news-position"><font size="+2.8"><b>No. ${player.id}</b></font> ▲</span><font size="+0.8">${player.name}</font>
                <small><b>(${player.position})</b></small>
              </p>
              <small class="news-info">
              Date of Birth: ${player.dateOfBirth} | Age: ${player.age} | Club: ${player.club}<img src=${player.clubLogo} style="width:30px; vertical-align:middle" class="center">
              </small>
              </a>
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
                <img src=${player.portait} alt=${player.name} style="height:180px"/>
                <p>
                  <font size="+2"><b>No. ${player.id}</b></font>&ensp;
                  <span class="news-position">${player.name}</span>
                  <small>(${player.position} | Caps: ${player.caps})</small>
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