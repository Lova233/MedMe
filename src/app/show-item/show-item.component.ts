import { Component, OnInit, Input } from '@angular/core';
import { MedsServices } from '~/meds-service';


@Component({
  selector: 'ns-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css'],
  moduleId: module.id,
})
export class ShowItemComponent implements OnInit {
    items:any;
    @Input()meds:any;

    constructor(
  ) { }

  ngOnInit() {
      setTimeout(() => {
        console.log(this.meds,"i meds")
      }, 3000);

  }
}
