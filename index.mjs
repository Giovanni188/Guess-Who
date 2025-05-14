import express from 'express';
import morgan from 'morgan';
import {check, validationResult} from 'express-validator';
import {listMatch, getMatchPlayer, getMatch, addMatch, updateScore, deleteMatch} from './Dao.mjs';

// init
const app = express();
const port = 3001;

// middleware
app.use(express.json());
app.use(morgan('dev'));

// GET /api/matches
app.get('/api/matches', (req, res) => {
  listMatch()
  .then(matches => res.json(matches))
  .catch(() => res.status(500).end());
});

// GET /api/matches/<id>
app.get('/api/matches/:id', async (request, response) => {
    try {
      const match = await getMatchPlayer(request.params.id);
      if(question.error) {
        response.status(404).json(match);
      } else {
        response.json(match);
      }
    }
    catch {
      response.status(500).end();
    }
  });

// GET /api/matches/<IDMatch>
app.get('/api/matches/:IDMatch', async (request, response) => {
    try {
        const match = await getMatch(request.params.IDMatch);
        if(match.error){
            response.status(404).json(match);
        } else {
            response.json(match);
        }
    }
    catch {
        response.status(500).end();
    }
});

// POST /api/matches
app.post('/api/questions/:id/answers', [
  check('IDPlayer').notEmpty(),
  check('IDDifficulty').notEmpty(),
  check('Score').isNumeric(),
  check('Date').isDate({format: 'YYYY-MM-DD', strictMode: true}),
  check('Secret_item').notEmpty(),
  check('N_guess').isNumeric()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({errors: errors.array()});
  }

  const newMatch = req.body;
  const IdMatch = req.params.id;

  try {
    const id = await addAnswer(newMatch, IdMatch);
    res.status(201).location(id).end();
  } catch(e) {
    console.error(`ERROR: ${e.message}`);
    res.status(503).json({error: 'Impossible to create the match.'});
  }
});

// POST /api/matches/<id>/score
app.post('/api/matches/:id/score', [
    check('Score').isNumeric(),
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    }
  
    const newMatch = req.body;
    const IdMatch = req.params.id;
  
    try {
      const id = await addAnswer(newMatch, IdMatch);
      res.status(201).location(id).end();
    } catch(e) {
      console.error(`ERROR: ${e.message}`);
      res.status(503).json({error: 'Impossible to update the score.'});
    }
  });

  //DELETE /api/matches/<id>
  app.delete("/api/matches/:id", async (req, res) => {
    const idMatch = req.params.id;
    try {
      const result = await deleteMatch({ IDMatch: idMatch });
      res.status(204).json({ message: "Match eliminato con successo", id: result });
    } catch (error) {
      res.status(500).json({ error: "Errore durante l'eliminazione del match", details: error.message });
    }
  });
  
app.listen(port, () => { console.log(`API server started at http://localhost:${port}`); });