import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
})
export class ReplaySubjectComponent {
  replaySubject = new ReplaySubject<number>(3);

  constructor() {
    this.replaySubject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    this.replaySubject.next(1);
    this.replaySubject.next(2);
    this.replaySubject.next(3);
    this.replaySubject.next(4);

    this.replaySubject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    this.replaySubject.next(5);
  }
}
