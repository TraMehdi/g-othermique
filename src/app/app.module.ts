import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { SummaryComponent } from './summary/summary.component';
import { FormDataService } from './form-data-service.service';

import { FormGuard } from './form-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    ProjectInfoComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FormDataService, FormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
