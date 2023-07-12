import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from '../form-data-service.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  personalInfo: any;
  projectInfo: any;
  projectCost: number = 0;
  effyAidAmount: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formDataService: FormDataService
  ) {}

  ngOnInit(): void {
    this.personalInfo = this.formDataService.getPersonalInfo();
    this.projectInfo = this.formDataService.getProjectInfo();
    console.log(this.personalInfo);
    console.log(this.projectInfo);
    if (this.personalInfo && this.projectInfo.ownership === 'true') {
      this.projectCost = this.projectInfo.surface * 80;
      this.effyAidAmount = Math.ceil(
        (this.projectCost * 0.75) - (this.projectInfo.income / this.projectInfo.householdSize) * 0.15
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/personal-info']);
  }
}
