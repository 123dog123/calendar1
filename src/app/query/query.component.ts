import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { delay, share } from 'rxjs/operators';


import { CalendarEvent } from 'angular-calendar';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  addHours,
  format
} from 'date-fns';
import { Observable } from 'rxjs';
import { colors } from '../utils/colors';


interface Film {
  id: number;
  title: string;
  release_date: string;
}

interface TT {
  title: string;
  description: string;
  start_date : string;
  end_date: string;
  username: string;
}


function getTimezoneOffsetString(date: Date): string {
  const timezoneOffset = date.getTimezoneOffset();
  const hoursOffset = String(
    Math.floor(Math.abs(timezoneOffset / 60))
  ).padStart(2, '0');
  const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
  const direction = timezoneOffset > 0 ? '-' : '+';

  return `T00:00:00${direction}${hoursOffset}:${minutesOffset}`;
}

@Component({
  selector: 'app-query',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'query.component.html'
})

export class QueryComponent implements OnInit {
  view: string = 'month';

  viewDate: Date = new Date();

  events$: Observable<Array<CalendarEvent<{ film: TT }>>>;
  events1: TT[] = [];
  activeDayIsOpen: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];

    const params = new HttpParams()
      .set(
        'primary_release_date.gte',
        format(getStart(this.viewDate), 'YYYY-MM-DD')
      )
      .set(
        'primary_release_date.lte',
        format(getEnd(this.viewDate), 'YYYY-MM-DD')
      )
      .set('api_key', '0ec33936a68018857d727958dca1424f');

    this.events$ = this.http
      .get('http://127.0.0.1:5000/events', { responseType: 'json'})
      .pipe(
        map(data =>{ this.events1 = data as TT[];
                     console.log(this.events1);
                     return this.events1.map((film: TT)=> {
                         
                            return {
                                title: film.title,
                                start: new Date(
                                       film.start_date.split(' ')[0]+'T'+film.start_date.split(' ')[1] + '-07:00'
                                
                                ),
                                end: new Date(film.end_date.split(' ')[0]+'T'+film.end_date.split(' ')[1] + '-07:00'),
                                
                                color: colors.green,
                                allDay: false,
                                meta: {
                                       film
                                }

                            }               
                      })
        })
      );
  }

  dayClicked({
    date,
    events
  }: {
    date: Date;
    events: Array<CalendarEvent<{ film: Film }>>;
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventClicked(event: CalendarEvent<{ film: Film }>): void {
    window.open(
      `https://www.themoviedb.org/movie/${event.meta.film.id}`,
      '_blank'
    );
  }
}
