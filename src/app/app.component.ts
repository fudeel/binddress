import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogComponent} from './shared/components/dialog/dialog.component';
import * as elements from './shared/elements/elements';
import {LoadingService} from './shared/services/loading.service';
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bindress';
  isLoading = false;

  constructor(private dialog: MatDialog, private readonly loadingService: LoadingService, private readonly afs: AngularFirestore) {
    loadingService.isLoading$.subscribe((loading: boolean) => {
      this.isLoading = loading;
    });


  }


  ngOnInit(): void {
    const localStorageValue = localStorage.getItem('locale');
    const locale = elements.getLocaleFromLocalStorage();
    if (localStorageValue) {
    } else {
      this.openDialog();
    }
  }


  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = [
      {
        id: 0,
        name: 'English'
      },
      {
        id: 1,
        name: 'Italiano'
      }
    ];

    this.dialog.open(DialogComponent, dialogConfig);
  }
}
