import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RobotListComponent} from './components/robot-list/robot-list.component';
import {RobotDetailComponent} from './components/robot-detail/robot-detail.component';
import {PartListComponent} from './components/part-list/part-list.component';
import {PartComponent} from './components/part/part.component';

const routes: Routes = [
  {path: 'robots', component: RobotListComponent},
  {path: '', redirectTo: '/robots', pathMatch: 'full'},
  {path: 'detail/:id', component: RobotDetailComponent},
  {path: 'partDetail/:id', component: PartComponent},

  {path: 'parts', component: PartListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

