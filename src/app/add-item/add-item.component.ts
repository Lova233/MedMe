import { Component, OnInit } from '@angular/core';
import { MedsServices } from '~/meds-service';
import { NotificationService } from '~/notification-service';


@Component({
  selector: 'ns-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  moduleId: module.id,
})
export class AddItemComponent implements OnInit {
    date:any;
    time:any;
    isCreating:boolean = true;
    title:string = '';
    description:string = '';

  constructor(
    private medsService: MedsServices,
    private notificationService: NotificationService
    )
    {}

 ngOnInit() {}

 onSubmit(title: string, description: string, date:any, time:any) {
     let hour = time.getHours()
     let minutes = time.getMinutes()
     date = new Date(date.setHours(hour,minutes)).toString()
         let x = {
         title,
         description,
         today: new Date(),
         date: date,
         time: time,
        }
        this.medsService.addNewMeds(x)
        this.notificationService.schedule(x)
    }
}

