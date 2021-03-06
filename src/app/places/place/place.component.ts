import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/shared/place.model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  @Input() place;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openInfo() {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    // dialogConfig.width = "60%";
    dialogConfig.panelClass = 'modal';
    dialogConfig.scrollStrategy;

    dialogConfig.data = {
      id: 1,
      title: this.place.title,
      picture: this.place.img,
      description: this.place.description

    };
    const dialogRef = this.dialog.open(InfoComponent, dialogConfig);

  }
}
