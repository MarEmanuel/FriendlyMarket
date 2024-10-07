import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillToPayModalComponent } from './bill-to-pay-modal.component';

describe('BillToPayModalComponent', () => {
  let component: BillToPayModalComponent;
  let fixture: ComponentFixture<BillToPayModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillToPayModalComponent]
    });
    fixture = TestBed.createComponent(BillToPayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
