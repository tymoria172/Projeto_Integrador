package br.org.generation.ypora.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name = "tb_usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull(message = "O atributo nome é obrigatório!")
	@Size(min = 8, max = 100, message = "O atributo nome deve conter no minimo 8 caracteres"
			+ " e no máximo 100")
	private String nome;
	
	@ApiModelProperty(example = "email@email.com.br")
	@NotNull(message = "O atributo usuario é obrigatório!")
	@Email
	@Size(min = 11, max = 100, message = "O atributo usuario deve conter no minimo 11 caracteres"
			+ " e no máximo 100")
	private String usuario;
	
	@NotNull(message = "O atributo senha é obrigatório!")
	@Size(min = 8, max = 255, message = "O atributo senha deve conter no minimo 8 caracteres"
			+ " e no máximo 255")
	private String senha;
	
	@OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("usuario")
	private List<Postagem> postagem;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public List<Postagem> getPostagem() {
		return postagem;
	}

	public void setPostagem(List<Postagem> postagem) {
		this.postagem = postagem;
	}
	
}
