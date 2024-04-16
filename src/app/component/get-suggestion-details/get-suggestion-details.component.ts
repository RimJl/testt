import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuggestionService } from '../../service/suggestion.service'; 
import { Suggestion } from '../../models/suggestion'; 

@Component({
  selector: 'app-get-suggestion-details', 
  templateUrl: './get-suggestion-details.component.html',
  styleUrls: ['./get-suggestion-details.component.css']
})
export class GetSuggestionDetailsComponent implements OnInit {

  suggestion: Suggestion | undefined; 

  constructor(
    private route: ActivatedRoute,
    private suggestionService: SuggestionService 
  ) { }

  ngOnInit(): void {
    this.getSuggestionDetails(); 
  }

  getSuggestionDetails(): void { 
    const numero = Number(this.route.snapshot.paramMap.get('numero'));
    this.suggestionService.getSuggestionByNumero(numero).subscribe((data: any) => {
      this.suggestion = data.data;
    });
  }

}
