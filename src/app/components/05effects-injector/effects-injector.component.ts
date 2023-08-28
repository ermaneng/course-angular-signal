import { ChangeDetectionStrategy, Component, EffectRef, Injector, WritableSignal, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-effects-injector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './effects-injector.component.html',
  styleUrls: ['./effects-injector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EffectsInjectorComponent {
  constructor (private injector:Injector){}

  loggingEffect!: EffectRef
  text:WritableSignal<string> = signal("My Text");
  count:number = 0;

  changeText(){
    this.text.set(`My Text Changed ${(++this.count)}`)
  }

  startLogging(){
    this.loggingEffect = effect(()=>{
      console.log("text value", this.text())
    }, {injector: this.injector})
  }

  stopLogging(){
    this.loggingEffect.destroy();
  }

}
