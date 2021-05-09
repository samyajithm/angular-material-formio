import { Component } from '@angular/core';
import { MaterialNestedComponent } from '../MaterialNestedComponent';
import ColumnsComponent from 'formiojs/components/columns/Columns.js';

@Component({
  selector: 'mat-formio-columns',
  template: `
    <div fxLayout="row"
         fxLayout.xs="column"
         fxLayoutWrap
         fxLayoutGap="{{ flexGap }}%"
         fxLayoutAlign="flex-start"
    >
      <!--todo 29-04-2021 MSamyajith: If checked HideLabel is undefined from builder-->
      <span *ngIf="instance.component.hideLabel == false" matFormioLabel [instance]="instance"></span>
      <div
        *ngFor="let column of instance.component.columns; let i = index"
        [fxFlex]="flexWidth(column, i)"
        fxLayout="column"
        fxLayoutGap="1em">
        <ng-template #components></ng-template>
      </div>
    </div>
  `,
  styles: []
})
export class MaterialColumnsComponent extends MaterialNestedComponent {
  public flexGap = 0.5;
  public totalSpace = 0;
  setInstance(instance: any) {
    this.totalSpace = 100 - ((instance.component.columns.length - 1) * this.flexGap);
    super.setInstance(instance);
    instance.viewContainer = (component) => {
      return this.viewContainers ? this.viewContainers[component.column] : null;
    };
  }

  flexWidth(column, index) {
    if (index >= (this.instance.component.columns.length - 1)) {
      return Math.ceil(((parseFloat(column.width) / 12) * this.totalSpace)) + '%';
    } else {
      return Math.floor(((parseFloat(column.width) / 12) * this.totalSpace)) + '%';
    }
  }
}
ColumnsComponent.MaterialComponent = MaterialColumnsComponent;
export { ColumnsComponent };
