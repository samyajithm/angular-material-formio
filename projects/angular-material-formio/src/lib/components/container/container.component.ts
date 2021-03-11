import { Component } from '@angular/core';
import { MaterialNestedComponent } from '../MaterialNestedComponent';
import ContainerComponent from 'formiojs/components/container/Container.js';
@Component({
  selector: 'mat-formio-container',
  template: `
    <span matFormioLabel [instance]="instance"></span>
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
