import { Injectable } from '@angular/core';
import { Player } from './player.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {

  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
   }

  getPlayers(){
    return this.players
  }
  getPlayerById(playerId: string){
    return this.database.object('players/' + playerId)
  }

  addPlayer(newPlayer: Player){
    this.players.push(newPlayer);
  }
  updatePlayer(player){
    var playerEntryInFirebase = this.getPlayerById(player.$key);
    playerEntryInFirebase.update({name: player.name, position: player.position, description: player.description, age: player.age})
  }

  deletePlayer(player){
    var playerEntryInFirebase = this.getPlayerById(player.$key);
    playerEntryInFirebase.remove();

  }
}
