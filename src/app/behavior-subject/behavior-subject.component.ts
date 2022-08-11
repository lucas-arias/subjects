import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
})
export class BehaviorSubjectComponent {
  behaviorSubject = new BehaviorSubject<number>(0);
  private count: number = 0;

  nextValue() {
    this.count++;
    this.behaviorSubject.next(this.count);
  }
}
