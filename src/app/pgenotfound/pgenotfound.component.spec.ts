import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgenotfoundComponent } from './pgenotfound.component';

describe('PgenotfoundComponent', () => {
  let component: PgenotfoundComponent;
  let fixture: ComponentFixture<PgenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgenotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
