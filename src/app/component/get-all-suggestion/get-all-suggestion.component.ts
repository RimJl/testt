import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../../service/suggestion.service';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-get-all-suggestion',
  templateUrl: './get-all-suggestion.component.html',
  styleUrl: './get-all-suggestion.component.css'
})
export class GetAllSuggestionComponent implements OnInit {

  suggestions?: Suggestion[];

  constructor(private suggestionService: SuggestionService) { }

  ngOnInit(): void {
    this.loadSuggestion();
  }

  loadSuggestion(): void {
    this.suggestionService.getAllSuggestions().subscribe((data: any) => {
      this.suggestions = data.data; // Accéder à la propriété data
      console.log(data);
    });
  }
}

