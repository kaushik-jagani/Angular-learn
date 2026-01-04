import { Routes } from '@angular/router';
import {Admin} from './Components/admin/admin';
import {ControlFlow} from './Components/control-flow/control-flow';
import {SignaleLea} from './Components/signale-lea/signale-lea';
import {User} from './Components/user/user';
import {VarableLearning} from './Components/varable-learning/varable-learning';
import {Notfound} from './Components/notfound/notfound';
import {ApiUses} from './Components/api-uses/api-uses';

export const routes: Routes = [
  {
    path:'',
    redirectTo : '/admin',
    pathMatch : 'full',
  },
  {
    path:'gallary',
    component:ApiUses
  },
  {
    path:'admin',
    component:Admin
  },
  {
    path:'control-flow',
    component:ControlFlow
  },
  {
    path:'signal',
    component:SignaleLea
  },
  {
    path:'user',
    component: User
  },
  {
    path:'variable-learning',
    component: VarableLearning
  },{
    path:'**', //Wild card routes which is execute if route not found which is requested
    component :Notfound
  }

];
