import {
  Component,
  ViewEncapsulation,
  Input,
  HostBinding,
  forwardRef,
  Output,
  EventEmitter,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const classnames = require('classnames');

@Component({
  selector: 'SubMenu, nzm-sub-menu',
  templateUrl: './sub-menu.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SubMenuComponent),
      multi: true
    }
  ]
})
export class SubMenuComponent {
  prefixCls = 'am-sub-menu';

  private _subMenuPrefixCls: string;
  private _radioPrefixCls: string;
  private _subMenuData;
  private _showSelect: boolean;
  private _selItem;
  private _multiSelect?: boolean;

  @Output()
  onSel: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  get subMenuPrefixCls(): string {
    return this._subMenuPrefixCls;
  }
  set subMenuPrefixCls(v: string) {
    this._subMenuPrefixCls = v;
  }
  @Input()
  get radioPrefixCls(): string {
    return this._radioPrefixCls;
  }
  set radioPrefixCls(v: string) {
    this._radioPrefixCls = v;
  }
  @Input()
  get subMenuData(): any {
    return this._subMenuData;
  }
  set subMenuData(v: any) {
    this._subMenuData = v;
  }
  @Input()
  get showSelect(): boolean {
    return this._showSelect;
  }
  set showSelect(v: boolean) {
    this._showSelect = v;
  }
  @Input()
  get selItem(): any {
    return this._selItem;
  }
  set selItem(v: any) {
    this._selItem = v;
  }
  @Input()
  get multiSelect(): boolean {
    return this._multiSelect;
  }
  set multiSelect(v: boolean) {
    this._multiSelect = v;
  }

  constructor() {}

  onClick(dataItem) {
    this.onSel.emit(dataItem);
  }

  selected(dataItem) {
    return this._showSelect && (this._selItem.length > 0 && this._selItem.indexOf(dataItem.value) !== -1);
  }

  getClass(dataItem) {
    let name = this._radioPrefixCls + '-item ';
    name += this.selected(dataItem) ? this._subMenuPrefixCls + '-item-selected' : '';
    name += dataItem.disabled ? this._subMenuPrefixCls + '-item-disabled' : '';
    return name;
  }
}
