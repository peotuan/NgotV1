import {
  Directive,
  forwardRef,
  ElementRef,
  OnInit,
  Input,
  Output,
  OnDestroy,
  HostBinding,
  EventEmitter
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import Cleave from 'cleave.js';
export const INPUTMASK_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputMaskDirective),
  multi: true
};

@Directive({
  selector: '[npInputMask]',
  providers: [INPUTMASK_VALUE_ACCESSOR],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(blur)': 'onBlur($event)'
  }
})
export class InputMaskDirective implements OnInit, ControlValueAccessor, OnDestroy {
  @HostBinding('disabled')
  @Input()
  disabled: boolean;
  @Input()
  value: string;
  @Input()
  options: any = {};

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onValueChanged = new EventEmitter<any>();

  private onModelChange: Function = () => {};
  private onModelTouched: Function = () => {};
  // tslint:disable-next-line:member-ordering
  private _instance: Cleave;
  constructor(public elRef: ElementRef) {}

  ngOnInit() {
    this.init();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    this.init();
  }

  private init() {
    if (this._instance) {
      this._instance.destroy();
      this._instance = null;
    }

    this._instance = new Cleave(this.elRef.nativeElement, {
      ...this.options,
      onValueChanged: e => {
        this.value = e.target.rawValue;
        this.onModelChange(this.value);
        this.onValueChanged.next(e);
      }
    });
    this._instance.setRawValue(this.value);
  }

  onBlur() {
    this.onModelTouched(true);
  }

  ngOnDestroy() {
    this._instance.destroy();
    this._instance = null;
  }

  // implement ControlValueAccessor
  writeValue(obj: any): void {
    this.value = obj;
    this._instance.setRawValue(this.value);
  }
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
