import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcpComponent } from './ucp.component';

describe('UcpComponent', () => {
  let component: UcpComponent;
  let fixture: ComponentFixture<UcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
