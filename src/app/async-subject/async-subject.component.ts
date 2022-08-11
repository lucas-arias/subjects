import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
})
export class AsyncSubjectComponent  {
  asyncSubject = new AsyncSubject<number>();

  constructor() {
    this.asyncSubject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
     
    this.asyncSubject.next(1);
    this.asyncSubject.next(2);

    this.asyncSubject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    this.asyncSubject.next(3);
    this.asyncSubject.next(4);
   }

   completeSubject() {
    this.asyncSubject.complete();
   }
}
