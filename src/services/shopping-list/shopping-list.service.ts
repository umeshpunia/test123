import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "./../../models/item/item.model";

@Injectable()
export class ShoppingListService {

    private shoppingListRef = this.db.list<Item>('radio-list');

    constructor(private db: AngularFireDatabase){}

    addItem(item: Item){
        return this.shoppingListRef.push(item);
    }
}