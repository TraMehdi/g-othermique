import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../form-data-service.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  personalInfoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private formDataService: FormDataService
  ) {}

  ngOnInit(): void {
    this.personalInfoForm = this.formBuilder.group({
      gender: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  onSubmit(): void {
    if (this.personalInfoForm.invalid) {
      return;
    }

    this.formDataService.setPersonalInfo(this.personalInfoForm.value);
    this.router.navigate(['/project-info']);
  }
  
}
