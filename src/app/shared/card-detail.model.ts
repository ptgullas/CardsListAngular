import { ListItem } from "./list-item.model";

export class CardDetail {
    id: number = 0;
    name: string = '';
    notes: string = '';
    isStarred: boolean = false;
    listItems: ListItem[] = [];
}
