import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from '../../service/reclamation.service'; // Replace with your actual reclamation service name

@Component({
  selector: 'app-delete-reclamation',
  templateUrl: './delete-reclamation.component.html',
  styleUrls: ['./delete-reclamation.component.css']
})
export class DeleteReclamationComponent implements OnInit {

  numero: number | undefined;

  constructor(
    private activatedRoute: ActivatedRoute, // Updated for consistency
    private router: Router,
    private reclamationService: ReclamationService // Replace with your actual reclamation service name
  ) { }

  ngOnInit(): void {
    this.numero = Number(this.activatedRoute.snapshot.paramMap.get('numero')); // Updated for consistency
  }

  deleteReclamation() {
    if (this.numero) {
      this.reclamationService.deleteReclamation(this.numero)
        .subscribe(response => {
          // Handle successful deletion (e.g., navigate back to list, display success message)
          this.router.navigate(['/reclamations']); // Replace with appropriate route
          console.log('Reclamation deleted successfully!');
        }, error => {
          // Handle error (e.g., display error message)
          console.error('Error deleting reclamation:', error);
        });
    }
  }
}
