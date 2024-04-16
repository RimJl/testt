import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuggestionService } from '../../service/suggestion.service';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-create-suggestion',
  templateUrl: './create-suggestion.component.html',
  styleUrls: ['./create-suggestion.component.css']
})
export class CreateSuggestionComponent {

  suggestionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private suggestionService: SuggestionService
  ) {
    this.suggestionForm = this.formBuilder.group({
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.suggestionForm.valid) {
      const suggestionData: Suggestion = this.suggestionForm.value;
      this.suggestionService.createSuggestion(suggestionData).subscribe(
        (response: any) => {
          console.log(response); 

          this.suggestionForm.reset();
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }
}
