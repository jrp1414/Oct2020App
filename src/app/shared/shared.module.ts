import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPipe } from '../pipes/filter.pipe';
import { ShortenPipe } from "../pipes/shorten.pipe";
import { BasicHighlightDirective } from "../directives/basic-highlight.directive";
import { BetterHighlightDirective } from '../directives/better-highlight.directive';
import { UnlessDirective } from '../directives/unless.directive';
import { MaxMinDirective } from '../directives/max-min.directive';


@NgModule({
  declarations: [
    FilterPipe,
    ShortenPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    MaxMinDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FilterPipe,
    ShortenPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    MaxMinDirective
  ]
})
export class SharedModule { }
