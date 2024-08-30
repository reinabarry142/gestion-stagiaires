import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StagiaireService } from '../stagiaire.service';
import { NgForm } from '@angular/forms';
import { Stagiaire } from '../stagiaire';

@Component({
  selector: 'app-add-stagiaire',
  templateUrl: './add-stagiaire.component.html',
  styleUrls: ['./add-stagiaire.component.css']
})
export class AddStagiaireComponent {
  photoError: string | null = null;
  fileSelected !:boolean;
  stagiaire: Stagiaire = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    dateNaissance: new Date(),
    niveau: '',
    ecoleFaculte: '',
    prochainDiplome: '',
    annee: 0,
    photo: ''
  };

  constructor(
    private stagiaireService: StagiaireService,
    private router: Router
  ) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Check file size (limit: 5 MB)
      if (file.size > 5 * 1024 * 1024) {
        this.photoError = 'File size exceeds 5MB';
        this.fileSelected = false; // Disable submit if file size is too large
        return;
      }

      // Check file type (must be an image)
      if (!file.type.startsWith('image/')) {
        this.photoError = 'Invalid file type';
        this.fileSelected = false; // Disable submit if file type is not an image
        return;
      }

      // Clear previous error
      this.photoError = null;
      this.fileSelected = true; // File is valid, enable submit

      const reader = new FileReader();
      reader.onload = () => {
        this.stagiaire.photo = (reader.result as string).split(',')[1]; // Extract Base64 data
      };
      reader.readAsDataURL(file);
    } else {
      this.photoError = 'Photo is required';
      this.fileSelected = false; // Disable submit if no file selected
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Create a plain object with Base64 string instead of FormData
      const stagiaireData: Stagiaire = {
        id: this.stagiaire.id,
        nom: this.stagiaire.nom,
        prenom: this.stagiaire.prenom,
        email: this.stagiaire.email,
        dateNaissance: this.stagiaire.dateNaissance,
        niveau: this.stagiaire.niveau,
        ecoleFaculte: this.stagiaire.ecoleFaculte,
        prochainDiplome: this.stagiaire.prochainDiplome,
        annee: this.stagiaire.annee,
        photo: this.stagiaire.photo // Base64 string
      };

      this.stagiaireService.addStagiaire(stagiaireData).subscribe({
        next: (data) => {
          console.log('Stagiaire added successfully:', data);
          this.goToStagiaireList();
        },
        error: (error) => {
          console.error('Error adding stagiaire:', error);
          // Optionally set an error message to display to the user
        }
      });
    }
  }

  goToStagiaireList() {
    this.router.navigate(['/show-all-stagiaires']);
  }
}
