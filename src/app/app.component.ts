import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { GlobalSignalService } from './services/global-signal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  globalCount;
  constructor(private store:GlobalSignalService){
    this.store.setSignal<number>("count",0);

    this.globalCount = this.store.getSignal<number>("count");
  }
  title = 'angular-signals';
}
