import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'proplan-add-proposal',
  templateUrl: './add-proposal.component.html',
  styleUrls: ['./add-proposal.component.scss']
})
export class AddProposalComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
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
  constructor(
    public dialogRef: MatDialogRef<AddProposalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  addAboutMe(index, me) {
    this._listAboutMe.push(me);
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
}
