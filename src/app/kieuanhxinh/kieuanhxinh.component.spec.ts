import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KieuanhxinhComponent } from './kieuanhxinh.component';

describe('KieuanhxinhComponent', () => {
  let component: KieuanhxinhComponent;
  let fixture: ComponentFixture<KieuanhxinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KieuanhxinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KieuanhxinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
