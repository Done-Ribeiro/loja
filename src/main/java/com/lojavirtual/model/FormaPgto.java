package com.lojavirtual.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FormaPgto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String descricao;

	private int numMaxParc;

	private int numPadraoParc;

	private int intervaloDias;

	private float percentualAcres;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public int getNumMaxParc() {
		return numMaxParc;
	}

	public void setNumMaxParc(int numMaxParc) {
		this.numMaxParc = numMaxParc;
	}

	public int getNumPadraoParc() {
		return numPadraoParc;
	}

	public void setNumPadraoParc(int numPadraoParc) {
		this.numPadraoParc = numPadraoParc;
	}

	public int getIntervaloDias() {
		return intervaloDias;
	}

	public void setIntervaloDias(int intervaloDias) {
		this.intervaloDias = intervaloDias;
	}

	public float getPercentualAcres() {
		return percentualAcres;
	}

	public void setPercentualAcres(float percentualAcres) {
		this.percentualAcres = percentualAcres;
	}

}
