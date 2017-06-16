import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'position',
  pure: false
})
export class PositionPipe implements PipeTransform {

  transform(input: Player[], selectedPosition) {
    var output: Player[] = [];
    if (selectedPosition === "attackingPlayers"){
      for (var i = 0; i < input.length; i++){
        if (input[i].position === "Attacker") {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (selectedPosition === "midPlayers"){
      for (var i = 0; i < input.length; i++){
        if (input[i].position === "Mid-fielder") {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (selectedPosition === "defensivePlayers"){
      for (var i = 0; i < input.length; i++){
        if (input[i].position === "Defender") {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (selectedPosition === "keepers"){
      for (var i = 0; i < input.length; i++){
        if (input[i].position === "Goal keeper") {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }
}
