import {  Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
})
export class SubjectComponent{
  subject = new Subject<number>();
  private count: number = 0;

  nextValue() {
    this.subject.next(this.count);
    this.count++;
  }
}
