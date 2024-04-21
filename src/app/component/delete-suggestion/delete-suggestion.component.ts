import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionService } from '../../service/suggestion.service'; // Replace with your suggestion service name

@Component({
  selector: 'app-delete-suggestion',
  templateUrl: './delete-suggestion.component.html',
  styleUrls: ['./delete-suggestion.component.css']
})
export class DeleteSuggestionComponent implements OnInit {

  numero: number | undefined;

  constructor(
    private activated : ActivatedRoute,
    private router: Router,
    private suggestionService: SuggestionService // Replace with your suggestion service injection
  ) { }

  ngOnInit(): void {
    this.numero = Number(this.activated.snapshot.paramMap.get('numero'));
  }

  deleteSuggestion() {
    if (this.numero) {
      this.suggestionService.deleteSuggestion(this.numero)
        .subscribe(response => {
          // Handle successful deletion (e.g., navigate back to list, display success message)
          this.router.navigate(['/suggestions']); // Replace with appropriate route
          console.log('Suggestion deleted successfully!');
        }, error => {
          // Handle error (e.g., display error message)
          console.error('Error deleting suggestion:', error);
        });
    }
  }
}

