export class User {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  username: string;
  createdGames: string[];
  rank: number;
  playedGames: [
    { gameId: string, wl: 0 | 1 | 2 }
  ]
}
