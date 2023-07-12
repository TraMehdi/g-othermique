import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FormDataService } from './form-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class FormGuard {
  constructor(private router: Router, private formDataService: FormDataService) {}

  canActivate(): boolean {
    if (this.formDataService.getPersonalInfo()) {
      return true;
    } else {
      this.router.navigate(['/personal-info']);
      return false;
    }
  }

}
