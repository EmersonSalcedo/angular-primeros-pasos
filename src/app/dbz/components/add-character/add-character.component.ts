import {Component} from '@angular/core';
import {DbzService} from "../../services/dbz.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  constructor(private dbzService:DbzService) {
  }

  addNewCharacter(character:NgForm):void{
    if (character.value.name.length ===0) return;
    this.dbzService.addCharacter(character.value.name,character.value.power);
  }

}
