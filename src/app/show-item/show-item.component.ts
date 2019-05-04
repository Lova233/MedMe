import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MedsServices } from '~/meds-service';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { NotificationService } from '~/notification-service';

@Component({
  selector: 'ns-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css'],
  moduleId: module.id,
})
export class ShowItemComponent implements OnInit {
    items:any;
    firstSwitchState:string="ON";
    @Input()meds:any;
    @Output()refresh: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor(    private medsService: MedsServices,
                    private notificationService: NotificationService,
        ) { }

  ngOnInit() {}
  onItemTap(args) {
    dialogs.action({
        message: "You are about to delete " + this.meds[args.index].title + " notifications",
        cancelButtonText: "Exit",
        actions: ["Yes", "No"]
    }).then(result => {
        if(result == "Yes"){
            let param = this.meds[args.index].created
            this.meds[args.index].ids.forEach((id)=>{
                this.notificationService.cancel(id)
            })
            this.medsService.deleteMeds(param)
            this.meds.splice(args.index,1)
        }else if(result == "No"){
        }
    });
  }

}
