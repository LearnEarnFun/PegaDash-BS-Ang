import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRCIContainerComponent } from './modal-container.component';

describe('ModalRCIContainerComponent', () => {
  let component: ModalRCIContainerComponent;
  let fixture: ComponentFixture<ModalRCIContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRCIContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRCIContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
