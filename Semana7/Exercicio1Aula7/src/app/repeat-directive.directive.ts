import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeatDirective]'
})
export class RepeatDirectiveDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appRepeatDirective(value: number) {
    this.viewContainer.clear();
    for (let i = 0; i < value; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
