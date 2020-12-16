import {User} from "./user";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import GeoPoint = firebase.firestore.GeoPoint;

export class Game {
  gameId: string;
  createdBy: string;
  gameCategory: 'tennisOne' | 'tennisTwo' | 'soccerFive' | 'soccerEight' | 'soccerEleven';
  playersUuid: string[];
  minRank: number | 'open';
  gameTime: string;
  date: Timestamp;
  organizerInfo: User;
  geoPoint: GeoPoint;
}
