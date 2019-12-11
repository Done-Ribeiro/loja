package com.lojavirtual.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class ItensPedido {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	private Pedido pedido;

	@ManyToOne
	private Produto produto;

	private float qtde;

	private float valorUnit;

	private float subTotal;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Pedido getPedido() {
		return pedido;
	}

	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	public float getQtde() {
		return qtde;
	}

	public void setQtde(float qtde) {
		this.qtde = qtde;
	}

	public float getValorUnit() {
		return valorUnit;
	}

	public void setValorUnit(float valorUnit) {
		this.valorUnit = valorUnit;
	}

	public float getSubTotal() {
		return subTotal;
	}

	public void setSubTotal(float subTotal) {
		this.subTotal = subTotal;
	}

}
