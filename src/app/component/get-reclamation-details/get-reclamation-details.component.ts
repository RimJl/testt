import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReclamationService } from '../../service/reclamation.service';
import { Reclamation } from '../../models/reclamation';

@Component({
  selector: 'app-get-reclamation-details',
  templateUrl: './get-reclamation-details.component.html',
  styleUrls: ['./get-reclamation-details.component.css']
})
export class GetReclamationDetailsComponent implements OnInit {

  reclamation: Reclamation | undefined;

  constructor(
    private route: ActivatedRoute,
    private reclamationService: ReclamationService
  ) { }

  ngOnInit(): void {
    this.getReclamationDetails();
  }

  getReclamationDetails(): void {
    const numero = Number(this.route.snapshot.paramMap.get('numero'));
    this.reclamationService.getReclamationByNumero(numero).subscribe((data: any) => {
      this.reclamation = data.data;
    });
  }

}
