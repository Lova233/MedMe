import { Component, OnInit } from '@angular/core';
import { MedsServices } from '~/meds-service';


@Component({
  selector: 'ns-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css'],
  moduleId: module.id,
})
export class ShowItemComponent implements OnInit {
    items:any;
    show:any;

    constructor(
    private medsService: MedsServices,
  ) { }

  ngOnInit() {
    this.show = this.medsService.getNewMeds()
  }
}
