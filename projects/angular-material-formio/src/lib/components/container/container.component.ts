import { Component } from '@angular/core';
import { MaterialNestedComponent } from '../MaterialNestedComponent';
import ContainerComponent from 'formiojs/components/container/Container.js';
@Component({
  selector: 'mat-formio-container',
  template: `
    <!--todo 29-04-2021 MSamyajith: If checked HideLabel is undefined from builder-->
    <span *ngIf="instance.component.hideLabel == false" matFormioLabel [instance]="instance"></span>
    <mat-icon *ngIf="instance.component.tooltip" matSuffix
              matTooltip="{{ instance.component.tooltip }}" style="font-size: 1rem;">info
    </mat-icon>
<!--    <div fxLayout="column" fxLayoutGap="1em">-->
      <ng-template #components></ng-template>
<!--    </div>-->`
})
export class MaterialContainerComponent extends MaterialNestedComponent { }
ContainerComponent.MaterialComponent = MaterialContainerComponent;
export { ContainerComponent };
