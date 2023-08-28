import { ChangeDetectionStrategy, Component, WritableSignal, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equality',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equality.component.html',
  styleUrls: ['./equality.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EqualityComponent {
  count:WritableSignal<number> = signal(1);
  
  countChangeOn3:WritableSignal<number> = signal(3,{equal:(a,b)=>{console.info("a:",a); console.info("b:",b); return false }});

  constructor() {   
    effect(() => {
        console.log('Count:', this.count());
        console.log('Count Change On 3:', this.countChangeOn3());
      }
    )
  }

  setTo(val:number):void{
    this.count.set(val);
  }

  setEqTo(val:number):void{
    this.countChangeOn3.set(val);
  }


}
