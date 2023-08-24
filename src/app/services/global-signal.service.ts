import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalSignalService {

  signalMap:Map<string,WritableSignal<unknown>> = new Map<string, WritableSignal<unknown>>();

  getSignal<T>(key: string): WritableSignal<T> {
    if (!this.signalMap.has(key)) {
      this.signalMap.set(key, signal<T | undefined>(undefined));
    }
    return this.signalMap.get(key) as WritableSignal<T>;
  }

  setSignal<T>(key: string, value: T): void {
    this.getSignal<T>(key).set(value);
  }
}
