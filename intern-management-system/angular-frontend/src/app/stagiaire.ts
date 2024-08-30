export class Stagiaire {
  id!: number;
  nom!: string;
  prenom!: string;
  email!: string;
  dateNaissance!: Date;
  niveau!: string;
  ecoleFaculte!: string;
  prochainDiplome!: string;
  annee!: number;
  photo!: String;
  photoUrl?: string;

  constructor() {
      this.email = "@gmail.com";
      this.dateNaissance = new Date();
      this.niveau = "";
      this.ecoleFaculte = "";
      this.prochainDiplome = "";
      this.annee = new Date().getFullYear();
      this.photo = "";
  }
}
