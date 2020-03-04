import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [SortPipe,FilterPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SortPipe,
    FilterPipe
  ],

})
export class SharedModule { }
