import { TestBed } from '@angular/core/testing';
import { FormDataService } from './form-data-service.service';

describe('FormDataService', () => {
  let service: FormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setPersonalInfo', () => {
    it('should store the personal info', () => {
      const personalInfo = {
        firstName: 'Mehdi',
        lastName: 'Trabelsi',
        email: 'tm@example.com',
        phoneNumber: '1234567890'
      };

      service.setPersonalInfo(personalInfo);

      expect(service.getPersonalInfo()).toEqual(personalInfo);
    });
  });

  describe('getPersonalInfo', () => {
    it('should return null if personal info is not set', () => {
      expect(service.getPersonalInfo()).toBeNull();
    });

    it('should return the stored personal info', () => {
      const personalInfo = {
        firstName: 'Mehdi',
        lastName: 'Trabelsi',
        email: 'tm@mail.com',
        phoneNumber: '1234567890'
      };

      service.setPersonalInfo(personalInfo);

      expect(service.getPersonalInfo()).toEqual(personalInfo);
    });
  });

  describe('setProjectInfo', () => {
    it('should store the project info', () => {
      const projectInfo = {
        ownership: true,
        numberOfPeople: 4,
        income: 50000,
        propertySize: 100
      };

      service.setProjectInfo(projectInfo);

      expect(service.getProjectInfo()).toEqual(projectInfo);
    });
  });

  describe('getProjectInfo', () => {
    it('should return null if project info is not set', () => {
      expect(service.getProjectInfo()).toBeNull();
    });

    it('should return the stored project info', () => {
      const projectInfo = {
        ownership: true,
        numberOfPeople: 4,
        income: 50000,
        propertySize: 150
      };

      service.setProjectInfo(projectInfo);

      expect(service.getProjectInfo()).toEqual(projectInfo);
    });
  });
});
