import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    mytext:string;
    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.mytext = "mytext";
        const id = +this.route.snapshot.params.id;

    }
}
