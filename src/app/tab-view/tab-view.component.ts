import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
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
    this.medsService.getNewMeds().subscribe((x)=> {
        for(let key in x){
        this.show.push(x[key])
    }
    console.log("fatto") }
    )
}


  refreshData(x){
    console.log(this.show,"prima")
    this.show.push(x)
    console.log(this.show,"dopo")
    }
}
