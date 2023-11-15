import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {DeferredComponent} from './deferred/deferred.component';
import {IdleDeferredComponent} from './idle-deferred/idle-deferred.component';
import {ViewportDeferredComponent} from './viewport-deferred/viewport-deferred.component';
import {InteractionDeferredComponent} from './interaction-deferred/interaction-deferred.component';
import {HoverDeferredComponent} from './hover-deferred/hover-deferred.component';
import {ImmediateDeferredComponent} from './immediate-deferred/immediate-deferred.component';
import {TimerDeferredComponent} from './timer-deferred/timer-deferred.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DeferredComponent, IdleDeferredComponent, ViewportDeferredComponent,
    InteractionDeferredComponent, HoverDeferredComponent, ImmediateDeferredComponent, TimerDeferredComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'defer';
  customCondition = false;
}
