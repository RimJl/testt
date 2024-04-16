import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSuggestionComponent } from './delete-suggestion.component';

describe('DeleteSuggestionComponent', () => {
  let component: DeleteSuggestionComponent;
  let fixture: ComponentFixture<DeleteSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteSuggestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
