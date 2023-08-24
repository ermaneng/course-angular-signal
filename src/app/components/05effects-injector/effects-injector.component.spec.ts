import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectsInjectorComponent } from './effects-injector.component';

describe('EffectsInjectorComponent', () => {
  let component: EffectsInjectorComponent;
  let fixture: ComponentFixture<EffectsInjectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EffectsInjectorComponent]
    });
    fixture = TestBed.createComponent(EffectsInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
