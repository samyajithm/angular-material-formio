import { Component, Input, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import FormioComponent from 'formiojs/components/_classes/component/Component.js';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mat-formio-comp',
  template: '<mat-card>Unknown Component: {{ instance.component.type }}</mat-card>'
})
export class MaterialComponent implements AfterViewInit {
  @Input() instance: any;
  @ViewChild('input', {static: true}) input: ElementRef;
  public control: FormControl = new FormControl();
  constructor(public element: ElementRef, public ref: ChangeDetectorRef) {}

  setInstance(instance: any) {
    instance.materialComponent = this;
    this.instance = instance;
    this.instance.disabled = this.instance.shouldDisabled;
    this.setVisible(this.instance.visible);
    this.renderComponents();
  }

  renderComponents() {}

  onChange() {
    this.instance.updateValue(this.getValue(), {modified: true});
  }

  getValue() {
    return this.control.value;
  }

  setValue(value) {
    this.control.setValue(value);
  }

  beforeSubmit() {
    this.control.markAsTouched();
  }

  setDisabled(disabled) {
    if (disabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  setVisible(visible) {
    if (this.element && this.element.nativeElement) {
      if (visible) {
        this.element.nativeElement.removeAttribute('hidden');
        this.element.nativeElement.style.visibility = 'visible';
        this.element.nativeElement.style.position = 'relative';
      } else {
        this.element.nativeElement.setAttribute('hidden', true);
        this.element.nativeElement.style.visibility = 'hidden';
        this.element.nativeElement.style.position = 'absolute';
      }
    }
  }

  ngAfterViewInit() {
    if (this.input) {
      // Set the input masks.
      this.instance.setInputMask(this.input.nativeElement);
    }
  }
}

FormioComponent.MaterialComponent = MaterialComponent;
export { FormioComponent };
