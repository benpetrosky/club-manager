import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService} from '../player.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, position: string, description: string, age: number){
   var newPlayer: Player = new Player(name, position, description, age);
   this.playerService.addPlayer(newPlayer);
  }

}
