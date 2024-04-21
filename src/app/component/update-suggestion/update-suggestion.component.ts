import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionService } from '../../service/suggestion.service'; // Replace with your suggestion service name
import { Suggestion } from '../../models/suggestion'; // Replace with your suggestion model name

@Component({
  selector: 'app-update-suggestion',
  templateUrl: './update-suggestion.component.html',
  styleUrls: ['./update-suggestion.component.css']
})
export class UpdateSuggestionComponent implements OnInit {

  suggestion: Suggestion = {} as Suggestion;
  numero: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private suggestionService: SuggestionService, // Replace with your suggestion service injection
  ) { }

  ngOnInit(): void {
    this.numero = Number(this.route.snapshot.paramMap.get('numero'));
    this.getSuggestionDetails();
  }

  getSuggestionDetails(): void {
    if (this.numero) {
      this.suggestionService.getSuggestionByNumero(this.numero).subscribe((data: any) => {
        this.suggestion = data.data;
      });
    }
  }

  updateSuggestion() {
    if (this.numero && this.suggestion) {
      this.suggestionService.updateSuggestion(this.numero, this.suggestion)
        .subscribe(response => {
          // Handle successful update (e.g., navigate back to list, display success message)
          this.router.navigate(['/suggestions']); // Replace with appropriate route
          console.log('Suggestion updated successfully!');
        }, error => {
          // Handle error (e.g., display error message)
          console.error('Error updating suggestion:', error);
        });
    }
  }
}
