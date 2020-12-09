import {User} from "./user";

export class Game {
  gameId: string;
  createdBy: string;
  gameCategory: 'tennisOne' | 'tennisTwo' | 'soccerFive' | 'soccerEight' | 'soccerEleven';
  playersUuid: string[];
  minRank: number | 'open';
  gameTime: string;
  day: string;
  organizerInfo: User;
}
