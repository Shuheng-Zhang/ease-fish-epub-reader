import {Directive, ElementRef, Input} from '@angular/core';

/**
 * 自定义 <div> 标签 id 属性绑定
 */
@Directive({
  selector: '[divId]'
})
export class DivIdRefDirective {
  @Input('divId') id: string;

  el: HTMLDivElement;

  constructor(ref: ElementRef<HTMLDivElement>) {
    this.el = ref.nativeElement;
  }

}
