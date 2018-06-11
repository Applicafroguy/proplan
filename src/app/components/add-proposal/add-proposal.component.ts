import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'proplan-add-proposal',
  templateUrl: './add-proposal.component.html',
  styleUrls: ['./add-proposal.component.scss']
})
export class AddProposalComponent implements OnInit {
  isLinear = true;
  clientFormGroup: FormGroup;
  projectFormGroup: FormGroup;
  meFormGroup: FormGroup;
  deliverFormGroup: FormGroup;
  mileFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  listAboutMe = [
    {
      id: 1,
      title: 'Work',
      description:
        'As soon as I have the materials I need, we can get rolling. Once I get started, I don’t stop until it’s done'
    },
    {
      id: 2,
      title: 'Home',
      description:
        'As soon as I have the materials I need, we can get rolling. Once I get started, I don’t stop until it’s done'
    },
    {
      id: 3,
      title: 'Time',
      description:
        'As soon as I have the materials I need, we can get rolling. Once I get started, I don’t stop until it’s done'
    },
    {
      id: 4,
      title: 'Good',
      description:
        'As soon as I have the materials I need, we can get rolling. Once I get started, I don’t stop until it’s done'
    }
  ];
  _listAboutMe = [];

  listDeliver = [
    {
      id: 1,
      title: 'Hosting',
      price: 200
    }
  ];

  _listDeliver = [];
  listMile = [
    {
      id: 1,
      title: 'Kickoff Meeting',
      time: '3 days'
    }
  ];

  _listMile = [];

  constructor(
    public dialogRef: MatDialogRef<AddProposalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.clientFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.projectFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      goals: ['', Validators.required]
    });
    this.meFormGroup = this._formBuilder.group({
      description: ['', Validators.required]
    });
    this.deliverFormGroup = this._formBuilder.group({
      description: ['', Validators.required]
    });
    this.mileFormGroup = this._formBuilder.group({
      description: ['', Validators.required]
    });
  }

  addAboutMe(index, me) {
    this._listAboutMe.push(me);
    this.meFormGroup.setValue({ description: me });
    this.removeAboutMe(index);
  }
  removeAboutMe(i) {
    this.listAboutMe.splice(i, 1);
  }
  removeAboutMeTemp(i) {
    this._listAboutMe.splice(i, 1);
  }

  addToAboutList(i, me) {
    this.listAboutMe.push(me);
    this.removeAboutMeTemp(i);
  }

  // deli
  addDeliver(index, deliver) {
    this._listDeliver.push(deliver);
    this.deliverFormGroup.setValue({ description: deliver });
    this.removeDeliver(index);
  }
  removeDeliver(i) {
    this.listDeliver.splice(i, 1);
  }
  removeDeliverTemp(i) {
    this._listDeliver.splice(i, 1);
  }

  addToDeliverList(i, me) {
    this.listDeliver.push(me);
    this.removeDeliverTemp(i);
  }

  // milestone
  addMile(index, me) {
    this._listMile.push(me);
    this.mileFormGroup.setValue({ description: me });
    this.removeMile(index);
  }
  removeMile(i) {
    this.listMile.splice(i, 1);
  }
  removeMileTemp(i) {
    this._listMile.splice(i, 1);
  }

  addToMileList(i, me) {
    this.listMile.push(me);
    this.removeMileTemp(i);
  }

  //
  create() {
    this.dialogRef.close();
  }
}
