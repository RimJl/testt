import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllReclamationComponent } from './get-all-reclamation.component';

describe('GetAllReclamationComponent', () => {
  let component: GetAllReclamationComponent;
  let fixture: ComponentFixture<GetAllReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllReclamationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
