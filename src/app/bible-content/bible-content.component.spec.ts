import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleContentComponent } from './bible-content.component';

describe('BibleContentComponent', () => {
  let component: BibleContentComponent;
  let fixture: ComponentFixture<BibleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibleContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
