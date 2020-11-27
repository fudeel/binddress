import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() message: AlertMessage

  constructor() {
  }

  ngOnInit(): void {
  }

}

export class AlertMessage {
  style: "error" | "warning" | "success" | "info";
  title: string;
  message: string;
}
