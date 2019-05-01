import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MedsServices } from '~/meds-service';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Observable } from 'tns-core-modules/ui/page/page';
import { NotificationService } from '~/notification-service';



@Component({
  selector: 'ns-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css'],
  moduleId: module.id,
})
export class ShowItemComponent implements OnInit {
    items:any;
    @Input()meds:any;
    @Output()refresh: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor(    private medsService: MedsServices,
                    private notificationService: NotificationService,
        ) { }

  ngOnInit() {
    console.log(this.meds,"i meds")
  }

  onItemTap(args) {
    let num = this.meds[args.index].ids
    console.log(num,"IL NUM")

    dialogs.action({
        message: "Do you want to delete the medication   " + this.meds[args.index].title + "  ?",
        cancelButtonText: "Exit",
        actions: ["Yes", "No"]
    }).then(result => {
        console.log("Dialog result: " + result);
        if(result == "Yes"){
            let param = this.meds[args.index].created
            this.meds[args.index].ids.forEach((id)=>{
                this.notificationService.cancel(id)
            })
            this.medsService.deleteMeds(param)
            this.meds.splice(args.index,1)
        }else if(result == "No"){
            //Do action2
        }
    });


    // console.log("Item Tapped at cell index: " + args.index);
    // console.log(this.meds[args.index].created,"il param")
    // let param = this.meds[args.index].created
    // this.medsService.deleteMeds(param)

  }

}
