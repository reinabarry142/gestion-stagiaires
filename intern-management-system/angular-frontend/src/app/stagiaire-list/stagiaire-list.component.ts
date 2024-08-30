import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../stagiaire';
import { StagiaireService } from '../stagiaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stagiaire-list',
  templateUrl: './stagiaire-list.component.html',
  styleUrls: ['./stagiaire-list.component.css']
})
export class StagiaireListComponent implements OnInit {

  stagiaires: Stagiaire[] = [];
  EnteredID!: number;

  constructor(private stagiaireService: StagiaireService, private router: Router) {}

  ngOnInit(): void {
    this.getStagiaires();
  }

  goToStagiaire() {
    console.log(this.EnteredID);
    this.router.navigate(['details-of-stagiaire', this.EnteredID]);
  }

  getStagiaires() {
    this.stagiaireService.getStagiairesList().subscribe(data => {
      this.stagiaires = data.map(stagiaire => {
        if (stagiaire.photo) {
          // Assuming photo is already a Base64 string
          // Construct a URL for displaying the photo
          stagiaire.photoUrl = `data:image/jpeg;base64,${stagiaire.photo}`; // Adjust MIME type if needed
        }
        return stagiaire;
      });
    });
  }


  updateStagiaire(id: number) {
    this.router.navigate(['updating-by-id', id]);
  }

  deleteStagiaire(id: number) {
    if (confirm("Are you sure to delete Stagiaire ID: " + id)) {
      this.stagiaireService.deleteStagiaire(id).subscribe(data => {
        console.log(data);
        this.getStagiaires(); // Refresh the list after deletion
      });
    }
  }

  detailsOfStagiaire(id: number) {
    this.router.navigate(['details-of-stagiaire', id]);
  }
}
