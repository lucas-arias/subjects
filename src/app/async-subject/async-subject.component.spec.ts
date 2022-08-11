import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AsyncSubjectComponent } from './async-subject.component';

describe('AsyncSubjectComponent', () => {
  let component: AsyncSubjectComponent;
  let fixture: ComponentFixture<AsyncSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have not values when component initializes', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#async-subject-observer-a')?.textContent).toContain('Observer A:');
    expect(compiled.querySelector('#async-subject-observer-b')?.textContent).toContain('Observer B:');
  });

  it('should have value 4 after clicking copmplete btn', () => {
    const completeBtn = fixture.debugElement.query(By.css('#async-subject-complete-btn'));
    completeBtn.triggerEventHandler('click', null);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#async-subject-observer-a')?.textContent).toContain('Observer A: 4');
    expect(compiled.querySelector('#async-subject-observer-b')?.textContent).toContain('Observer B: 4');
  })
});
