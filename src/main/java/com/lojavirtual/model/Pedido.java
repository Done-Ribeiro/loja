package com.lojavirtual.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Pedido {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	private Pessoa cliente;

	@ManyToOne
	private FormaPgto formaPgto;

	private Date dataEmissao;

	private String status;

	private Date dataAutorizacao;

	private float total;

	private float desconto;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Pessoa getCliente() {
		return cliente;
	}

	public void setCliente(Pessoa cliente) {
		this.cliente = cliente;
	}

	public FormaPgto getFormaPgto() {
		return formaPgto;
	}

	public void setFormaPgto(FormaPgto formaPgto) {
		this.formaPgto = formaPgto;
	}

	public Date getDataEmissao() {
		return dataEmissao;
	}

	public void setDataEmissao(Date dataEmissao) {
		this.dataEmissao = dataEmissao;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getDataAutorizacao() {
		return dataAutorizacao;
	}

	public void setDataAutorizacao(Date dataAutorizacao) {
		this.dataAutorizacao = dataAutorizacao;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	public float getDesconto() {
		return desconto;
	}

	public void setDesconto(float desconto) {
		this.desconto = desconto;
	}

}
