import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../stagiaire';
import { StagiaireService } from '../stagiaire.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  id: number;
  stagiaire!: Stagiaire;

  constructor(private route: ActivatedRoute, private stagiaireService : StagiaireService) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.stagiaire = new Stagiaire();
    this.stagiaireService.getStagiaireById(this.id).subscribe(data => {
      this.stagiaire = data;
      this.stagiaire.photoUrl = `data:image/jpeg;base64,${this.stagiaire.photo}`;
    });
  }
}
