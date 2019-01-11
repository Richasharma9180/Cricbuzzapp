export class Admin {
    Team1: string;
    Team2: string;
    Toss: string;
    Date:Date;
    Overs:number;
    constructor(Team1: string, Team2: string, Toss: string,Date:Date,Overs:number) {
      this.Team1 = Team1;
      this.Team2 = Team2;
      this.Toss=Toss;
      this.Date=Date;
      this.Overs=Overs;
    }
  }