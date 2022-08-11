import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BehaviorSubjectComponent } from './behavior-subject.component';

describe('BehaviorSubjectComponent', () => {
  let component: BehaviorSubjectComponent;
  let fixture: ComponentFixture<BehaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have value 0 when component initializes', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#behavior-subject-observer-a')?.textContent).toContain('Observer A: 0');
    expect(compiled.querySelector('#behavior-subject-observer-b')?.textContent).toContain('Observer B: 0');
  })

  it('should have value 1 after clicking next values btn', () => {
    const nextValueBtn = fixture.debugElement.query(By.css('#behavior-subject-next-value-btn'));
    nextValueBtn.triggerEventHandler('click', null);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#behavior-subject-observer-a')?.textContent).toContain('Observer A: 1');
    expect(compiled.querySelector('#behavior-subject-observer-b')?.textContent).toContain('Observer B: 1');
  })

  it('should have value 2 after clicking next values btn two times', () => {
    const nextValueBtn = fixture.debugElement.query(By.css('#behavior-subject-next-value-btn'));
    nextValueBtn.triggerEventHandler('click', null);
    nextValueBtn.triggerEventHandler('click', null);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#behavior-subject-observer-a')?.textContent).toContain('Observer A: 2');
    expect(compiled.querySelector('#behavior-subject-observer-b')?.textContent).toContain('Observer B: 2');
  })
});
