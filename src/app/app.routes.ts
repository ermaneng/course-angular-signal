import { Routes } from '@angular/router';
import { SimpleComponent } from './components/01simple/simple.component';
import { MutateComponent } from './components/02mutate/mutate.component';
import { ComputedComponent } from './components/03computed/computed.component';
import { EffectsComponent } from './components/04effects/effects.component';
import { EffectsInjectorComponent } from './components/05effects-injector/effects-injector.component';
import { GlobalServiceComponent } from './components/06global-service/global-service.component';

export const routes: Routes = [
    {path:"simple", component: SimpleComponent},
    {path:"mutate", component: MutateComponent},
    {path:"computed", component: ComputedComponent},
    {path:"effects", component: EffectsComponent},
    {path:"effects-injector", component: EffectsInjectorComponent},
    {path:"global-service", component: GlobalServiceComponent},
];
