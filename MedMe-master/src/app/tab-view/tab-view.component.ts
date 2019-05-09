import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { MedsServices } from '~/meds-service';



@Component({
  selector: 'ns-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.css'],
  moduleId: module.id,
})
export class TabViewComponent implements OnInit {

show:Array<any> = [];

  constructor(
    private page: Page,
    public medsService: MedsServices,
    ) {
    this.page.actionBarHidden = true;
}
  ngOnInit() {
      // subscribe to meds service on initialization
    this.medsService.getNewMeds().subscribe((x)=> {
        for(let key in x){
        this.show.push(x[key])
    }})
}
    // refresh front-end
  refreshData(x){
    this.show.push(x)
    }
}
