import { CharacterService } from '../../services/character.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { map, filter, debounceTime } from 'rxjs/operators';
import { SortPipe } from "../../../shared/pipes/sort.pipe";
// import { Show } from '../../models/show';
// import {Config} from '../../models/config'

import {FormBuilder, FormControl, FormGroup}
      from '@angular/forms';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})

export class CharacterListComponent implements OnInit {
  public characters = [];
  selectedOrder:string;
  // shows: Show[];

  characters$: Observable<Character[]>;
  id: number;
  searchText: string;
  Desc:string;
  gender: string;
  genders:string[];
  gendersChecked:string[]=[];


  group:FormGroup; // form
  searchControl:FormControl; // input box
  sortControl:FormControl;

  character$:Observable<Character[]>
  character:Character[];


  constructor(private characterService: CharacterService,
    private builder: FormBuilder) { 
this.searchControl = new FormControl(null);
this.sortControl = new FormControl()



this.group = this.builder.group({
// html binding name : control object
'search': this.searchControl ,
'sort':this.sortControl
});

}

// search(){
//   this.characters$=this.characterService.searchProducts(this.searchControl.value);
  
// }


  ngOnInit() {
  
    this.characters$=this.characterService.getCharacters();

    this.characters$.subscribe(value =>

      {
        this.genders = value.map(x=>x.gender).filter(
          function(v,i,self) { 
            return self.indexOf(v) == i; 
          });
        this.gendersChecked= [...this.genders];
        console.log("hey")

    });

    this.searchControl
        .valueChanges
        .pipe (filter (value => !!value)) 
        .subscribe( value => {
          this.searchText = value;

          this.characters$ = this.characterService.searchProducts(this.searchText);
        })

        
  }

  sortCharacters(e): void {
        this.sortControl
          .valueChanges
          .subscribe(() => {
            this.Desc = e.target.value;
    console.log(e.target.value)
          })
      }

    ongenderChange(gender:string, isChecked: boolean,index:number){
      console.log(gender+ index)
      if(isChecked && this.gendersChecked.indexOf(gender) ===-1) {
        // this.gendersChecked = [...this.gendersChecked,gender];
        this.gendersChecked = ['Female'];
      } else if(this.gendersChecked.indexOf(gender) >-1){
        // let i =this.gendersChecked.findIndex(x=>x=== gender);
        // this.gendersChecked.splice(i,1);
        this.gendersChecked = ['Female'];
      }
    }



}
