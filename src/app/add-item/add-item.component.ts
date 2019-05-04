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
    today:Date = new Date();
    notificationRange:any=[{}];
    date:any;
    time:any;
    isCreating:boolean = true;
    title:string = '';
    description:string = '';
    minDates:string ="";
    @Output() refresh: EventEmitter<object> = new EventEmitter<object>();

    constructor(
        private medsService: MedsServices,
        private notificationService: NotificationService
        )
        {}

        ngOnInit() {
             this.minDates = this.formatMinDate(this.today)
        }

        onSubmit(title: string, description: string, date:any, time:any) {
            let hour = time.getHours();
            let minutes = time.getMinutes();
            let humanHuour = hour + ':' + (minutes < 10 ? '0' : '') + minutes
            let i
            let notificationIds = []
            let num = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()) ) /(1000 * 60 * 60 * 24));
            // notification obj
            for(i=0;i<=num;i++){
                let a = {
                    title:title,
                    description:description,
                    time:time,
                    date: moment().add(i,"d").toDate(),
                    id: Math.floor(Math.random()*5000),
                }
                notificationIds.push(a.id)
                this.notificationService.schedule(a)
            }
            date = this.formatDate(date)
            // db obj
            let x = {
                title,
                description,
                date: date,
                today: this.formatDate(new Date),
                time: humanHuour,
                created: +new Date,
                ids: notificationIds,
                repetition:num,
            }
            this.medsService.addNewMeds(x)
            this.refresh.emit(x);
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
        formatMinDate(date) {
            var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [year,month,day ].join('/');
        }
        // cancell all notification
        cancel(){
            this.notificationService.cancelAll()
        }
        // get all notification
        get(){
            this.notificationService.getAll()
        }
    }



