package com.lojavirtual.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String nome;

	private float preco;

	private String descricao;

	private float qtdeEstoque;

	private String und;

	@ManyToOne
	private GrupoProduto grupo;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public float getPreco() {
		return preco;
	}

	public void setPreco(float preco) {
		this.preco = preco;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public float getQtdeEstoque() {
		return qtdeEstoque;
	}

	public void setQtdeEstoque(float qtdeEstoque) {
		this.qtdeEstoque = qtdeEstoque;
	}

	public String getUnd() {
		return und;
	}

	public void setUnd(String und) {
		this.und = und;
	}

	public GrupoProduto getGrupo() {
		return grupo;
	}

	public void setGrupo(GrupoProduto grupo) {
		this.grupo = grupo;
	}

}
