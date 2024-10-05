import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesterdayTaskComponent } from './yesterday-task.component';

describe('YesterdayTaskComponent', () => {
  let component: YesterdayTaskComponent;
  let fixture: ComponentFixture<YesterdayTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YesterdayTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YesterdayTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
