import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSignalService } from 'src/app/services/global-signal.service';

@Component({
  selector: 'app-effects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.css']
})
export class EffectsComponent {
 
  show:WritableSignal<boolean> = signal(false);
  text:WritableSignal<string> = signal("My Text");
  result:Signal<string> = computed(()=>{
    if (this.show() === true){
      return this.text()
    }
    else return "None"
  })

  constructor() {

    effect(() => {
        console.log('Show:', this.show());
        console.log('Text:', this.text());
        console.log('Result:', this.result());
      }
    )
  }

  changeShow(){
    this.show.set(!this.show());
  }

  changeText(){
    this.text.set("My Text Changed");
  }


}
