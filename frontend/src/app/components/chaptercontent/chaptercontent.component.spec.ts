import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptercontentComponent } from './chaptercontent.component';

describe('ChaptercontentComponent', () => {
  let component: ChaptercontentComponent;
  let fixture: ComponentFixture<ChaptercontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaptercontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaptercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
