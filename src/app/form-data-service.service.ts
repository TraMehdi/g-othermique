import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  personalInfo: any;
  projectInfo: any;

  constructor() {}

  setPersonalInfo(data: any): void {
    this.personalInfo = data;
  }

  getPersonalInfo(): any {
    return this.personalInfo;
  }

  setProjectInfo(data: any): void {
    this.projectInfo = data;
  }

  getProjectInfo(): any {
    return this.projectInfo;
  }
}
