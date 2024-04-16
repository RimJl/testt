import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../service/reclamation.service';
import { Reclamation } from '../../models/reclamation';

@Component({
  selector: 'app-get-all-reclamation',
  templateUrl: './get-all-reclamation.component.html',
  styleUrl: './get-all-reclamation.component.css'
})
export class GetAllReclamationComponent implements OnInit {

  reclamations?: Reclamation[];

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations(): void {
    this.reclamationService.getAllReclamations().subscribe((data: any) => {
      this.reclamations = data.data; // Accéder à la propriété data
      console.log(data);
    });
  }
}
