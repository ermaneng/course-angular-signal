import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-computed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './computed.component.html',
  styleUrls: ['./computed.component.css']
})
export class ComputedComponent {
  height:WritableSignal<number> = signal(5);
  width:WritableSignal<number> = signal(5);
  
  area:Signal<number> = computed(() => this.height() * this.width());

  changeHeight(){
    this.height.set(10);
  }

}
