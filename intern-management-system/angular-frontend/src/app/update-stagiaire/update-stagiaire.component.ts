import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../stagiaire';
import { Router, ActivatedRoute } from '@angular/router';
import { StagiaireService } from '../stagiaire.service';

@Component({
  selector: 'app-update-stagiaire',
  templateUrl: './update-stagiaire.component.html',
  styleUrls: ['./update-stagiaire.component.css']
})
export class UpdateStagiaireComponent implements OnInit {

  id: number;
  fileSelected:boolean=false;
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
    photo: '' // Assuming photo is a Base64 string
  };
  selectedFile: File | null = null;

  constructor(
    private stagiaireService: StagiaireService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.stagiaireService.getStagiaireById(this.id).subscribe({
      next: (data) => {
        this.stagiaire = data;
      },
      error: (error) => console.log(error)
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.stagiaire.photo = (reader.result as string).split(',')[1]; // Convert file to Base64
      };
      reader.readAsDataURL(file);
      this.fileSelected=true;
    }
  }

  onSubmit() {
    const stagiaireData = {
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

    this.stagiaireService.updateStagiaire(this.id, stagiaireData).subscribe({
      next: (data) => {
        console.log(data);
        this.goToStagiaireList();
      },
      error: (error) => console.log(error)
    });
  }

  goToStagiaireList() {
    this.router.navigate(['/show-all-stagiaires']);
  }
}
