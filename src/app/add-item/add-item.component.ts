import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MedsServices } from '~/meds-service';
import { NotificationService } from '~/notification-service';
import * as moment from 'moment';


@Component({
  selector: 'ns-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  moduleId: module.id,
})
export class AddItemComponent implements OnInit {
    today:Date = new Date()
    notificationRange:any=[{}];
    date:any;
    time:any;
    isCreating:boolean = true;
    title:string = '';
    description:string = '';
    @Output() refresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private medsService: MedsServices,
    private notificationService: NotificationService
    )
    {}

 ngOnInit() {}

 onSubmit(title: string, description: string, date:any, time:any) {
     let hour = time.getHours();
     let minutes = time.getMinutes();
     let humanHuour = hour + ':' + (minutes < 10 ? '0' : '') + minutes
     let i
     let num = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()) ) /(1000 * 60 * 60 * 24));
     console.log(num,"quante volte")
     for(i=0;i<=num;i++){
        let a = {
            title:title,
            description:description,
            date: moment().add(i,"d")
        }
        this.notificationService.schedule(a)
        console.log(i,a,"il tempo")
         }

         date = this.formatDate(date)
         let x = {
         title,
         description,
         date: date,
         today: this.formatDate(new Date),
         time: humanHuour,
         created: +new Date
        }
        this.medsService.addNewMeds(x)
        // this.refresh.emit();
        alert("New Medication added")
        this.title = ""
        this.description = ""
        this.time = undefined
        this.date = undefined

        }
    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [day,month,year ].join('-');
    }
}



