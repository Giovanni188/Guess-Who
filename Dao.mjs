import sqlite from 'sqlite3';
import { Footballer, Player, Match } from './Models.mjs'

const db = new sqlite.Database('guessWhoDB.sqlite', (err) => { 
    if (err) throw err; 
}); 

//List all match
export const listMatch = () => {
    return new Promise((resolve, reject)=>{
        const sql = "SELECT * FROM MATCH";
        db.all(sql,(err, rows)=>{
            if (err) reject(err);
            else{
                const match = rows.map((match) => new Match(match.IDMatch, match.IDPlayer, match.IDDificculty, match.Score, match.Date, match.Secret_item, match.N_guess));
                resolve(match);
            }
        })
    });
}

//Get a single match given its IDPlayer and date
export const getMatchPlayer = (IDPlayer, Date) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM MATCH WHERE IDPlayer = ? AND Date = ?";
        db.all(sql, [IDPlayer, Date], (err, rows) => {
            if (err){
                reject (err);
            }else{
                const match = rows.map((match) => new Match(match.IDMatch, match.IDPlayer, match.IDDifficulty, match.Score, match.Date, match.Secret_item, match.N_guess));
                resolve(match);
            }
        });
    });
}

//Get a single match given its id
export const getMatch = (IDMatch) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM MATCH WHERE IDMatch = ?";
        db.all(sql, [IDMatch], (err, rows) => {
            if (err){
                reject (err);
            }else{
                const match = rows.map((match) => new Match(match.IDMatch, match.IDPlayer, match.IDDifficulty, match.Score, match.Date, match.Secret_item, match.N_guess));
                resolve(match);
            }
        });
    });
}

//Create a new match
export const addMatch = (match) => { 
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO MATCH(IDPlayer, IDDifficulty, Score, Date, Secret_item, N_guess) VALUES (?,?,?,?,?,?)";
        db.run(sql, [match.IDPlayer, match.IDDificculty, match.Score, match.Date, match.Secret_item, match.N_guess], function(err) {
          if (err) reject(err);
          else 
            resolve(this.lastID);
        });
    });
}

//Update the score of a match
export const updateScore = (Score, IDMatch) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE MATCH SET score = ? WHERE IDMatch = ?";
        db.run(sql, [Score, IDMatch], function(err){
            if (err){
                reject (err);
            } else {
                resolve(this.changes);
            }
        });
    });
}

//Delete a match
export const deleteMatch = (match) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM MATCH WHERE IDMatch = ?";
        db.run(sql, [match.IDMatch], function(err){
            if (err) {
                reject (err);
            } else {
                 resolve(this.lastID);
            }
        });
    });
}




