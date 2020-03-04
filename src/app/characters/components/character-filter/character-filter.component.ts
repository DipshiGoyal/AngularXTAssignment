import { CharacterService } from './../../services/character.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss']
})
export class CharacterFilterComponent implements OnInit {

  constructor(private productService: CharacterService) { }

  ngOnInit() {
  }

  addFilter() {
    
  }

}
