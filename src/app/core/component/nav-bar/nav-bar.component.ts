import { Component, OnInit, Renderer2 } from '@angular/core';
import { MenuList } from '../../shared/menu-list';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  modulesList: Array<any>;
  enteredButton = false;
  isMatMenuOpen = false;
  isMatMenu2Open = false;
  prevButtonTrigger;

  constructor(private ren: Renderer2) {
    this.modulesList = MenuList;
  }

  ngOnInit() {}

  menuenter() {
    this.isMatMenuOpen = true;
    if (this.isMatMenu2Open) {
      this.isMatMenu2Open = false;
    }
  }

  menuLeave(trigger, button) {
    setTimeout(() => {
      if (!this.isMatMenu2Open && !this.enteredButton) {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-focused');
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenuOpen = false;
      }
    }, 80);
  }

  menu2enter() {
    this.isMatMenu2Open = true;
  }

  menu2Leave(trigger1, trigger2, button) {
    setTimeout(() => {
      if (this.isMatMenu2Open) {
        trigger1.closeMenu();
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        this.enteredButton = false;
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-focused');
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenu2Open = false;
        trigger2.closeMenu();
      }
    }, 100);
  }

  buttonEnter(trigger) {
    setTimeout(() => {
      if (this.prevButtonTrigger && this.prevButtonTrigger !== trigger) {
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = trigger;
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        trigger.openMenu();
        this.ren.removeClass(trigger.menu.items.first._elementRef.nativeElement, 'cdk-focused');
        this.ren.removeClass(trigger.menu.items.first._elementRef.nativeElement, 'cdk-program-focused');
      } else if (!this.isMatMenuOpen) {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger;
        trigger.openMenu();
        this.ren.removeClass(trigger.menu.items.first._elementRef.nativeElement, 'cdk-focused');
        this.ren.removeClass(trigger.menu.items.first._elementRef.nativeElement, 'cdk-program-focused');
      } else {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger;
      }
    });
  }

  buttonLeave(trigger, button) {
    setTimeout(() => {
      if (this.enteredButton && !this.isMatMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-focused');
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-program-focused');
      }
      if (!this.isMatMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-focused');
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-program-focused');
      } else {
        this.enteredButton = false;
      }
    }, 100);
  }
}
