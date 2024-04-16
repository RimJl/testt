import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamationService } from '../../service/reclamation.service';
import { Reclamation } from '../../models/reclamation';

@Component({
  selector: 'app-create-reclamation',
  templateUrl: './create-reclamation.component.html',
  styleUrls: ['./create-reclamation.component.css']
})
export class CreateReclamationComponent {

  reclamationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private reclamationService: ReclamationService
  ) {
    this.reclamationForm = this.formBuilder.group({
      type: ['', Validators.required],
      description: ['', Validators.required],
      adresse: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.reclamationForm.valid) {
      const reclamationData: Reclamation = this.reclamationForm.value;
      this.reclamationService.createReclamation(reclamationData).subscribe(
        (response: any) => {
          console.log(response); // Gérer la réponse comme vous le souhaitez
          // Réinitialiser le formulaire après la création réussie
          this.reclamationForm.reset();
        },
        (error: any) => {
          console.error(error); // Gérer les erreurs de manière appropriée
        }
      );
    }
  }
}
