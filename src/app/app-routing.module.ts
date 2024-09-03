import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoralComponent } from './components/coral/coral.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { FourComponent } from './components/four/four.component';
import { FiveComponent } from './components/five/five.component';

const routes: Routes = [
  { path: 'coral', component: CoralComponent },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: 'four', component: FourComponent },
  {path: 'five', component: FiveComponent, children:
      [{ path: 'two', component: TwoComponent },
      { path: 'three', component: ThreeComponent },
      { path: 'four', component: FourComponent, children:
          [
            { path: 'two', component: TwoComponent }
          ]
      },
      ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
