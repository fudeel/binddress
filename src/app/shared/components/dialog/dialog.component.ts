import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import * as elements from '../../elements/elements'


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: [ {id: number, name: string}], public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
  }


  onLanguageSelection(event): void {
    localStorage.setItem('locale', event);
    this.closeDialog();

    if (elements.getLocaleFromLocalStorage() !== 0) { location.reload(); }
  }


  closeDialog(): void {
    this.dialogRef.close();
  }



}
