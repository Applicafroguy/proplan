import { Component, OnInit } from '@angular/core';
import { AddProposalComponent } from '../../components/add-proposal/add-proposal.component';
import { MatDialog, DialogPosition } from '@angular/material';

@Component({
  selector: 'proplan-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pos: DialogPosition;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProposalComponent, {
      width: '90%',
      height: '100%',
      position: { right: '0' },
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
