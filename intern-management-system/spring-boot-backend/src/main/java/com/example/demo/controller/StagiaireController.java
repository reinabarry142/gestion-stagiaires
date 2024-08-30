package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Stagiaire;
import com.example.demo.repository.StagiaireRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class StagiaireController {

	@Autowired
	private StagiaireRepository stagiaireRepository;

	// Get all stagiaires
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/stagiaires")
	public List<Stagiaire> getAllStagiaires() {
		return stagiaireRepository.findAll();
	}

	// Create a new stagiaire
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/stagiaires")
	public Stagiaire createStagiaire(@RequestBody Stagiaire stagiaire) {
		return stagiaireRepository.save(stagiaire);
	}

	// Get stagiaire by ID
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/stagiaires/{id}")
	public ResponseEntity<Stagiaire> getByID(@PathVariable Long id) {
		Stagiaire stagiaire = stagiaireRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Stagiaire with id " + id + " does not exist"));
		return ResponseEntity.ok(stagiaire);
	}

	// Update stagiaire by ID
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/stagiaires/{id}")
	public ResponseEntity<Stagiaire> updateStagiaireByID(@PathVariable Long id, @RequestBody Stagiaire stagiaireDetails) {
		Stagiaire stagiaire = stagiaireRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Stagiaire with id " + id + " does not exist"));

		stagiaire.setNom(stagiaireDetails.getNom());
		stagiaire.setPrenom(stagiaireDetails.getPrenom());
		stagiaire.setEmail(stagiaireDetails.getEmail());
		stagiaire.setDateNaissance(stagiaireDetails.getDateNaissance());
		stagiaire.setNiveau(stagiaireDetails.getNiveau());
		stagiaire.setEcoleFaculte(stagiaireDetails.getEcoleFaculte());
		stagiaire.setProchainDiplome(stagiaireDetails.getProchainDiplome());
		stagiaire.setAnnee(stagiaireDetails.getAnnee());
		stagiaire.setPhoto(stagiaireDetails.getPhoto());

		Stagiaire updatedStagiaire = stagiaireRepository.save(stagiaire);

		return ResponseEntity.ok(updatedStagiaire);
	}

	// Delete stagiaire by ID
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/stagiaires/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteStagiaire(@PathVariable Long id) {
		Stagiaire stagiaire = stagiaireRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Stagiaire with id " + id + " does not exist"));

		stagiaireRepository.delete(stagiaire);

		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
