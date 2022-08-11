import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-void-subject',
  templateUrl: './void-subject.component.html',
})
export class VoidSubjectComponent{
  voidSubject = new Subject<void>();

  constructor() { 
    this.voidSubject.subscribe({
      next: () => console.log('One second has passed'),
    });
    
    setTimeout(() => this.voidSubject.next(), 1000);
  }
}
