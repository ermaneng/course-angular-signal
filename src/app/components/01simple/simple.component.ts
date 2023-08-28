import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleComponent {
  text:WritableSignal<string> = signal("my text");
  value:WritableSignal<number> = signal(2);

  set(){
    this.text.set("my text changed");
  }
  update(){
    this.value.update((val)=>val*2);
  }

}
