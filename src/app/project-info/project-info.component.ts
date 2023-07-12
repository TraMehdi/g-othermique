import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../form-data-service.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  projectInfoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private formDataService: FormDataService
  ) {}

  ngOnInit(): void {
    this.projectInfoForm = this.formBuilder.group({
      ownership: ['', Validators.required],
      householdSize: ['', [Validators.required, Validators.min(1)]],
      income: ['', [Validators.required, Validators.min(10000), Validators.max(100000)]],
      surface: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.projectInfoForm.invalid) {
      return;
    }

    this.formDataService.setProjectInfo(this.projectInfoForm.value);
    this.router.navigate(['/summary']);
  }
  
}
