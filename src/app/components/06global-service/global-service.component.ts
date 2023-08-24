import { Component, Signal, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSignalService } from 'src/app/services/global-signal.service';

@Component({
  selector: 'app-global-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-service.component.html',
  styleUrls: ['./global-service.component.css']
})
export class GlobalServiceComponent {

  constructor(private store:GlobalSignalService){}

  
  count = this.store.getSignal<number>("count");

  updateCount(){
    
    this.count.update((val)=>val+1);
  }
}
