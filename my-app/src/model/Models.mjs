import dayjs from 'dayjs';

function Footballer(IDFootballer, Name, Surname, Nationality, Team, Position, Age, Hair, IsCaptain, Image){        
    this.IDFootballer = IDFootballer ;
    this.Name  = Name ;
    this.Surname = Surname;
    this.Nationality = Nationality;
    this.Team = Team;
    this.Position = Position;
    this.Age = Age;
    this.Hair = Hair;
    this.IsCaptain = IsCaptain;
    this.Image = Image;
}

function Player(IDPlayer, Email, Password, Nickname){
    this.IDPlayer = IDPlayer;
    this.Email = Email;
    this.Password = Password;
    this.Nickname = Nickname;
}

function Match(IDMatch, IDPlayer, IDDifficulty, Score, Date, Secret_item, N_guess){
    this.IDMatch = IDMatch;
    this.IDPlayer = IDPlayer;
    this.IDDifficulty = IDDifficulty;
    this.Score = Score;
    this.Date = Date;
    this.Secret_item = Secret_item;
    this.N_guess = N_guess;
}

export { Footballer, Player, Match };

