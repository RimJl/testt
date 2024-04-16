import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from '../../service/reclamation.service';
import { Reclamation } from '../../models/reclamation';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent implements OnInit {

  reclamation: Reclamation = {} as Reclamation;
  numero: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reclamationService: ReclamationService
  ) { }

  ngOnInit(): void {
    this.numero = Number(this.route.snapshot.paramMap.get('numero'));
    this.getReclamationDetails();
  }

  getReclamationDetails(): void {
    if (this.numero) {
      this.reclamationService.getReclamationByNumero(this.numero).subscribe((data: any) => {
        this.reclamation = data.data;
      });
    }
  }

  updateReclamation() {
    if (this.numero && this.reclamation) {
      this.reclamationService.updateReclamation(this.numero, this.reclamation)
        .subscribe(response => {
          // Handle successful update (e.g., navigate back to list, display success message)
          this.router.navigate(['/reclamations']); // Replace with appropriate route
          console.log('Reclamation updated successfully!');
        }, error => {
          // Handle error (e.g., display error message)
          console.error('Error updating reclamation:', error);
        });
    }
  }
}
