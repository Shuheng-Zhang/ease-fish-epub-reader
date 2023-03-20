import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent, LoadingAnimationComponent } from './components';
import {DivIdRefDirective, WebviewDirective} from './directives';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, DivIdRefDirective, LoadingAnimationComponent],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, WebviewDirective, DivIdRefDirective, FormsModule, LoadingAnimationComponent]
})
export class SharedModule {}
