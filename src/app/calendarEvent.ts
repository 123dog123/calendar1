import { Time } from '@angular/common';

export class calendarEvent {
    constructor(
        public title:string,
        public description:string,
        public start_date:string,
        public end_date:string,
        public username:string
    ) {}
}