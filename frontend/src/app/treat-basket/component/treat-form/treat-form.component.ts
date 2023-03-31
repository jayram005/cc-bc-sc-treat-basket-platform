import { Component, OnInit, Input, Output, OnDestroy, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { BusinessQueryForm, BusinessEnqueryRequest, BusinessEnqueryResponse } from '../../../common/models/businessEnquiry';
// import { AnalyticsService } from 'src/app/common/analytics/service/amplitude.service';
// import { SalonService } from 'src/app/common/mediation/salon.services';

/////////////////////

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import * as moment from 'moment'
import { MatStepper } from '@angular/material/stepper';
import { ManageInfoService } from '../../services/modules/manage-info/manage-info.service';

////json constants
import { relationWithChildData } from '../../../common/constants/jsonrelationWithChildData'
import { currentMedications } from '../../../common/constants/jsonCurrentMedications'
import { allSymptoms } from '../../../common/constants/jsonAllSymptoms'
import { allAllergies } from '../../../common/constants/jsonAllAllergies'
import { allMedications } from '../../../common/constants/jsonAllMedications'

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'code-challenge-treat-form',
  templateUrl: './treat-form.component.html',
  styleUrls: ['./treat-form.component.scss'],

})
export class EnqueryFormComponent implements OnInit, OnDestroy {

  isLinear = false;
  childDetailsForm: FormGroup;
  healthConditionForm: FormGroup;
  ContactDeliveryForm: FormGroup;
  illnessSelected: any;
  @Output() isFormSubmit = new EventEmitter<boolean>();
  relationWithChildData = relationWithChildData;
  currentMedications = currentMedications;
  symptomCtrl = new FormControl();
  filteredSymptoms: Observable<string[]>;
  filteredAllergies: Observable<string[]>;
  filteredMedications: Observable<string[]>;

  allSymptoms = allSymptoms;
  allAllergies = allAllergies;
  allMedications = allMedications


  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  symmptoms = [];
  allergies = [];
  medications = [];
  genders = ['Female', 'Male', 'Other'];
  @ViewChild('chipInput') chipInput: ElementRef<HTMLInputElement>;
  @ViewChild('stepper') stepper: MatStepper;
  today = new Date();

  isPhone: boolean;
  relationWithChildSelected: any;

  bpObserverSvcSub: Subscription;
  cols: number;
  getTypesOfIllnessSubscription: Subscription;
  typesOfIllnessList = [];
  selectedGender: any;
  constructor(private fb: FormBuilder,
    private bpObserverSvc: BreakpointObserver,
    private manageInfoService: ManageInfoService
  ) {
    this.bpObserverSvcSub = bpObserverSvc
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (!state.matches) {
          this.isPhone = true;
          this.cols = 1
        } else {
          this.isPhone = false;
          this.cols = 2
        }
      });

    ////////////////////////////
    this.filteredSymptoms = this.symptomCtrl.valueChanges.pipe(
      startWith(null),
      map((item: string | null) => (item ? this._filter(item) : this.allSymptoms.slice())),
    );

    this.filteredAllergies = this.symptomCtrl.valueChanges.pipe(
      startWith(null),
      map((item: string | null) => (item ? this._filterAllergies(item) : this.allAllergies.slice())),
    );

    this.filteredMedications = this.symptomCtrl.valueChanges.pipe(
      startWith(null),
      map((item: string | null) => (item ? this._filterMedications(item) : this.allMedications.slice())),
    );
  }

  ngOnInit(): void {
    this.childDetailsForm = this.fb.group({
      childName: ['', Validators.required],
      weight: ['', Validators.required],
      DOB: ['', Validators.required],
      gender: ['', Validators.required],
      parentName: ['', Validators.required],
      relationWithChild: ['', Validators.required],
    });
    this.healthConditionForm = this.fb.group({
      typeOfIllness: ['', Validators.required],
      symptoms: ['', Validators.required],
      illnessSince: ['', Validators.required],
      allergies: ['', Validators.required],
      currentMedication: ['', Validators.required],
    });
    this.ContactDeliveryForm = this.fb.group({
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      deliveryAddress: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      DeliveryTime: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postcode: ['', Validators.required],
    });
    /////////////////////////////////////

    this.getTypesOfIllness()
  }

  getTypesOfIllness() {
    this.getTypesOfIllnessSubscription = this.manageInfoService
      .getTypeOfIllness()
      .subscribe({
        next: (response) => {
          console.log("get types of illness response: ", response)
          this.typesOfIllnessList = response;
        },
        error: (error) => {
          console.log('Error=> : ', error);

        },
      });
  }

  public hasError = (
    formGroupName: FormGroup,
    controlName: string,
    errorName: string,
  ) => {
    return formGroupName.controls[controlName].hasError(errorName);
  };

  submitChildDetails() {
    console.log(this.childDetailsForm.value)
    this.stepper.next();
  }

  healthConditionSubmit() {
    console.log(this.healthConditionForm.value)
    this.stepper.selected.completed = true;
    this.stepper.next();
  }

  submitInformation() {
    //////
    //converting MatDate to Readable date
    const childDOBmomentDate = new Date(this.childDetailsForm.value.DOB);
    const ChildDOBformattedDate = moment(childDOBmomentDate).format("YYYY/MM/DD");
    console.log(ChildDOBformattedDate);
    /////
    const illnessSincemomentDate = new Date(this.healthConditionForm.value.illnessSince);
    const illnessSincemomentDateformattedDate = moment(illnessSincemomentDate).format("YYYY/MM/DD");
    console.log(illnessSincemomentDateformattedDate);
    /////
    const deliveryDatemomentDate = new Date(this.ContactDeliveryForm.value.deliveryDate);
    const deliveryDateformattedDate = moment(deliveryDatemomentDate).format("YYYY/MM/DD");
    console.log(deliveryDateformattedDate);


    //////
    const infoReqBody = {
      name: this.childDetailsForm.value.childName,
      gender: this.selectedGender,
      weight: this.childDetailsForm.value.weight,
      dateOfBirth: ChildDOBformattedDate,
      guardianName: this.childDetailsForm.value.parentName,
      relation: this.relationWithChildSelected,
      typeOfIllness: this.illnessSelected,
      illnessSince: illnessSincemomentDateformattedDate,
      symptoms: this.symmptoms,
      allergies: this.allergies,
      medication: this.medications,
      phoneNo: this.ContactDeliveryForm.value.phoneNumber,
      email: this.ContactDeliveryForm.value.email,
      delivery_address: this.ContactDeliveryForm.value.deliveryAddress,
      deivery_date: deliveryDateformattedDate,
      latitude: "0",
      logitude: "0",
      city: this.ContactDeliveryForm.value.city,
      state: this.ContactDeliveryForm.value.state,
      postCode: this.ContactDeliveryForm.value.postcode
    }

    console.log("Req body: ", infoReqBody);
    //TO DO api integration
    this.isFormSubmit.emit(true);
  }


  onRelationWithChildChange(event) {
    console.log("onRelationWithChildChange: ", event)
    this.relationWithChildSelected = event.value;
  }

  onTypeOfIllnessChange(event) {
    console.log("onTypeOfIllnessChange: ", event)
    this.illnessSelected = event.value;
  }

  onCurrentMedicationChange(event) {
    console.log("onCurrentMedicationChange: ", event)
  }

  onGenderChange(event) {
    
    this.selectedGender = event.value;
  }

  resetChildDetails() {
    this.childDetailsForm.reset()
  }

  resetHealthDetailsDetails() {
    this.healthConditionForm.reset()
  }

  resetContantDetails() {
    this.ContactDeliveryForm.reset()
  }

  addSymptom(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.symmptoms.push(value);
    }
    event.chipInput!.clear();
  }

  addAllergy(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.allergies.push(value);
    }
    event.chipInput!.clear();
  }

  addMedication(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.medications.push(value);
    }
    event.chipInput!.clear();
  }



  removeSymptom(symmptom): void {
    const index = this.symmptoms.indexOf(symmptom);
    if (index >= 0) {
      this.symmptoms.splice(index, 1);
    }
  }

  removeAllergy(allergy): void {
    const index = this.allergies.indexOf(allergy);
    if (index >= 0) {
      this.allergies.splice(index, 1);
    }
  }

  removeMedication(medication): void {
    const index = this.medications.indexOf(medication);
    if (index >= 0) {
      this.medications.splice(index, 1);
    }
  }
  

  selected(event: MatAutocompleteSelectedEvent): void {
    this.symmptoms.push(event.option.viewValue);
    this.chipInput.nativeElement.value = '';
    this.symptomCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allSymptoms.filter(item => item.toLowerCase().includes(filterValue));
  }

  selectedAllergy(event: MatAutocompleteSelectedEvent): void {
    this.allergies.push(event.option.viewValue);
    this.chipInput.nativeElement.value = '';
    this.symptomCtrl.setValue(null);
  }

  private _filterAllergies(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allAllergies.filter(item => item.toLowerCase().includes(filterValue));
  }

  selectedMedication(event: MatAutocompleteSelectedEvent): void {
    this.medications.push(event.option.viewValue);
    this.chipInput.nativeElement.value = '';
    this.symptomCtrl.setValue(null);
  }

  private _filterMedications(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allMedications.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  ngOnDestroy() {
    if (this.getTypesOfIllnessSubscription) {
      this.getTypesOfIllnessSubscription.unsubscribe();
    }
  }
}