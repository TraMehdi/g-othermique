import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { SummaryComponent } from './summary/summary.component';
import { FormGuard } from './form-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/personal-info', pathMatch: 'full' },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'project-info', component: ProjectInfoComponent, canActivate:[FormGuard] },
  { path: 'summary', component: SummaryComponent, canActivate: [FormGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
