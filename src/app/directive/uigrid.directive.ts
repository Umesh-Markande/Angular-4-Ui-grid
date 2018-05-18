import {
  Directive, ElementRef, Injector, Input, OnInit, SimpleChanges, OnChanges, DoCheck,
  OnDestroy, Output, EventEmitter, SimpleChange
} from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'ui-grid'
})
export class UiGridDirective extends UpgradeComponent implements OnInit, OnChanges, DoCheck,
OnDestroy {

  @Input() data: {};
  @Input() gridOptions : {};
  @Output() onEdit: EventEmitter<{}>;

  constructor(elementRef: ElementRef, injector: Injector) {
    console.log('thus');
      super('ui-grid', elementRef, injector);
  }

  ngOnInit() { 
    super.ngOnInit(); }

  ngOnChanges(changes: SimpleChanges) { 
    if(this.gridOptions != undefined){
      let gridoption = {} as SimpleChange;
      gridoption.currentValue = this.gridOptions;
      gridoption.firstChange = false;
      gridoption.previousValue = [];
      changes['gridOptions'] = gridoption;
    }
    super.ngOnChanges(changes);
   }
  ngDoCheck() { super.ngDoCheck(); }
  ngOnDestroy() { super.ngOnDestroy(); }
}
