import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSuggestionDetailsComponent } from './get-suggestion-details.component';

describe('GetSuggestionDetailsComponent', () => {
  let component: GetSuggestionDetailsComponent;
  let fixture: ComponentFixture<GetSuggestionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetSuggestionDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetSuggestionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
