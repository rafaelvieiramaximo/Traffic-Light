import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarolComponent } from './farol.component';

describe('FarolComponent', () => {
  let component: FarolComponent;
  let fixture: ComponentFixture<FarolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
