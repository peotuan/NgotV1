import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let id = 1;

@Component({
  selector: 'np-ptt-pin',
  templateUrl: './ptt-pin.component.html',

  styleUrls: ['./ptt-pin.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PttPinComponent),
      multi: true
    }
  ]
})
export class PttPinComponent implements AfterViewInit, ControlValueAccessor {
  hidden = true;
  isFocus = false;
  @Input()
  type = 'tel';
  @Input()
  get value() {
    return this.pinValue;
  }
  set value(v: string) {
    this.pinValue = v.toString().substr(0, this.length);
    this.calcPIN();
  }
  @Input()
  length = 6;

  private _showCursor = true;
  @Input()
  get showCursor() {
    return this._showCursor;
  }
  set showCursor(v: any) {
    if (v === false || v === 'false') {
      this._showCursor = false;
    } else {
      this._showCursor = true;
    }
  }
  private _showPinCode = true;
  @Input()
  get showPinCode() {
    return this._showPinCode;
  }
  set showPinCode(v: any) {
    if (v === false || v === 'false') {
      this._showPinCode = false;
    } else {
      this._showPinCode = true;
    }
  }
  private _showFlashRing = true;
  @Input()
  get showFlashRing() {
    return this._showFlashRing;
  }
  set showFlashRing(v: any) {
    if (v === false || v === 'false') {
      this._showFlashRing = false;
    } else {
      this._showFlashRing = true;
    }
  }

  @Input()
  autoFocus = false;

  @Output()
  pinChange = new EventEmitter<string>();
  @Output()
  focusIntoInput = new EventEmitter<string>();
  @Output()
  focusOutInput = new EventEmitter<string>();
  compId = 'ptt-pin-' + id++;
  public pinValue = '';
  public pinList: string[] = [];
  public List: string[] = [];
  @ViewChild('inp')
  input: ElementRef;
  constructor() {
    this.calcPIN();
  }

  private _onChangeFn = (_: any) => {};
  private _onTouchFn = () => {};

  private calcPIN() {
    for (let i = 0; i < this.length; i++) {
      const value = this.pinValue.substr(i, 1);
      this.pinList[i] = value;
      //  console.log(this.pinValue);
    }
  }

  public setFocus() {
    if (this.input) {
      this.input.nativeElement.focus();
    }
  }

  ngAfterViewInit() {
    // tslint:disable-next-line:no-unused-expression
    this.autoFocus && this.setFocus();
  }

  updatePIN(event) {
    event.preventDefault();
    const value = event.target.value;
    if (value.length > this.length) {
      this.pinValue = value.substr(0, this.length);
      event.target.value = this.pinValue;
      return;
    }
    this.value = value;
    this.pinChange.emit(this.value);
    this._onChangeFn(this.value);
  }

  focusInput(event) {
    this.focusIntoInput.emit(this.value);
  }

  focusoutInput(event) {
    this.focusOutInput.emit(this.value);
  }
  onBlur() {
    this.isFocus = false;
    this._onTouchFn();
  }

  onFocus() {
    this.isFocus = true;
  }

  writeValue(obj: any): void {
    obj = obj || '';
    this.value = obj.toString();
  }

  registerOnChange(fn: any): void {
    this._onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouchFn = fn;
  }

  focus(event) {}
}
