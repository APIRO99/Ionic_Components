import { NgModule } from '@angular/core';
import { CharFilterPipe } from './char-filter.pipe';



@NgModule({
  declarations: [CharFilterPipe],
  exports: [CharFilterPipe]
})
export class PipesModule { }
