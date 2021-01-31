import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
    //this.openToast();
  }

  openToast() {
    const x = document.getElementById("toast")
    x.className = "show";
    //setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
  }

}
