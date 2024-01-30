import { Injectable } from '@angular/core';
import {Character} from "../interfaces/character.interface";
import {v4 as uuid} from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters:Character[] = [{
    id: uuid(),
    name:"Krilin",
    power:1000
  },{
    id: uuid(),
    name:"Goku",
    power:9500
  }];


  deleteCharacterById(id:string):void{
    this.characters= this.characters.filter(character=> character.id != id);
  }

  addCharacter(name:string,power:number):void{
    this.characters.push({
      id:uuid(),
      name:name,
      power:power
    });
  }

}
