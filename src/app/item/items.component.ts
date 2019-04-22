import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { MedsServices } from "~/meds-service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    time:string;
    show:any;

    constructor(private itemService: ItemService,
                private medsService: MedsServices
        ) { }

    ngOnInit() {
        this.items = this.itemService.getItems();

    }
}
