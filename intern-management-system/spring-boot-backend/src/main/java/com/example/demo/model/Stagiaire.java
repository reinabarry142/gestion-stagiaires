package com.example.demo.model;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Lob; // For handling Blob

@Entity
@Table(name = "stagiaires_table")
public class Stagiaire {

	public Stagiaire() {
		// Default constructor
	}

	public Stagiaire(String nom, String prenom, String email, LocalDate dateNaissance, String niveau,
					 String ecoleFaculte, String prochainDiplome, int annee, String photo, String photoUrl) {
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.dateNaissance = dateNaissance;
		this.niveau = niveau;
		this.ecoleFaculte = ecoleFaculte;
		this.prochainDiplome = prochainDiplome;
		this.annee = annee;
		this.photo = photo;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "nom")
	private String nom;

	@Column(name = "prenom")
	private String prenom;

	@Column(name = "email")
	private String email;

	@Column(name = "date_naissance")
	private LocalDate dateNaissance;

	@Column(name = "niveau")
	private String niveau;

	@Column(name = "ecole_faculte")
	private String ecoleFaculte;

	@Column(name = "prochain_diplome")
	private String prochainDiplome;

	@Column(name = "annee")
	private int annee;

	@Lob // Large object to store Blob
	@Column(name = "photo")
	private String photo; // Using byte[] to store Blob data

	@Column(name = "photo_url")
	private String photoUrl; // URL for displaying the photo

	// Getters and setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDate getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(LocalDate dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public String getNiveau() {
		return niveau;
	}

	public void setNiveau(String niveau) {
		this.niveau = niveau;
	}

	public String getEcoleFaculte() {
		return ecoleFaculte;
	}

	public void setEcoleFaculte(String ecoleFaculte) {
		this.ecoleFaculte = ecoleFaculte;
	}

	public String getProchainDiplome() {
		return prochainDiplome;
	}

	public void setProchainDiplome(String prochainDiplome) {
		this.prochainDiplome = prochainDiplome;
	}

	public int getAnnee() {
		return annee;
	}

	public void setAnnee(int annee) {
		this.annee = annee;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}
}
