const express = require('express');
const cors=require('cors');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const serviceAccount = require ('C:\\Users\\david\\IdeaProjects\\ExDavidAlcaraz\\alcarazestraguedavid-firebase-adminsdk-gq9eg-b62a940a28.json')

const admin = require('firebase-admin/app');


initializeApp({credential: cert(serviceAccount)});

const app = express();
const db = getFirestore();

app.use(express.json());
app.use(cors());
port = 3010;

app.listen(3010, () => {
    console.log('Escoltant el port 3010');
});

app.post('/DavidAlcaraz/mvp', async (req, res) => {
  const mvp = {MVP : req.body.nom};
  await db.collection('qatar22Alcaraz').doc('final22Alcaraz').update(mvp);
  res.json({message: 'MVP afegit correctament'});
});

app.get('/DavidAlcaraz/jugadors', async (req, res) => {

  const doc = await db.collection('qatar22Alcaraz').doc('final22Alcaraz').get();

  const data = doc.data();
  const golsMap = new Map();

  // Crear un map per anar afegint els jugadors que han marcat i, si ja hi és, afegir-li un gol més per cada coincidència.
  data.info.forEach(team => {
    team.gols.forEach(gol => {
      if (golsMap.has(gol.jugador)) {
        golsMap.set(gol.jugador, golsMap.get(gol.jugador) + 1);
      } else {
        golsMap.set(gol.jugador, 1);
      }
    });
  });

  // Array de jugadors amb un gol
  const jugadorsAmbUnGol = [];
  golsMap.forEach((value, key) => {
    if (value === 1) {
      jugadorsAmbUnGol.push(key);
    }
  });

    res.json(jugadorsAmbUnGol);

});
