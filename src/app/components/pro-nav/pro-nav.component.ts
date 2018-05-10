import { Component } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'proplan-nav',
  templateUrl: './pro-nav.component.html',
  styleUrls: ['./pro-nav.component.css']
})
export class ProNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );
  opened = false;
  constructor(private breakpointObserver: BreakpointObserver) {}
}
