import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReclamationDetailsComponent } from './get-reclamation-details.component';

describe('GetReclamationDetailsComponent', () => {
  let component: GetReclamationDetailsComponent;
  let fixture: ComponentFixture<GetReclamationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetReclamationDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetReclamationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
