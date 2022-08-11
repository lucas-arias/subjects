import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SubjectComponent } from './subject.component';

describe('SubjectComponent', () => {
  let component: SubjectComponent;
  let fixture: ComponentFixture<SubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have not values when component initializes', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#subject-observer-a')?.textContent).toContain('Observer A:');
    expect(compiled.querySelector('#subject-observer-b')?.textContent).toContain('Observer B:');
  })

  it('should have value 0 after clicking next values btn', () => {
    const nextValueBtn = fixture.debugElement.query(By.css('#subject-next-value-btn'));
    nextValueBtn.triggerEventHandler('click', null);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#subject-observer-a')?.textContent).toContain('Observer A: 0');
    expect(compiled.querySelector('#subject-observer-b')?.textContent).toContain('Observer B: 0');
  })

  it('should have value 1 after clicking next values btn two times', () => {
    const nextValueBtn = fixture.debugElement.query(By.css('#subject-next-value-btn'));
    nextValueBtn.triggerEventHandler('click', null);
    nextValueBtn.triggerEventHandler('click', null);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#subject-observer-a')?.textContent).toContain('Observer A: 1');
    expect(compiled.querySelector('#subject-observer-b')?.textContent).toContain('Observer B: 1');
  })
});
