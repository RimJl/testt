import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSuggestionComponent } from './get-all-suggestion.component';

describe('GetAllSuggestionComponent', () => {
  let component: GetAllSuggestionComponent;
  let fixture: ComponentFixture<GetAllSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllSuggestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
