package br.org.generation.ypora.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.ypora.model.Postagem;

@Repository
public interface PostagemRepository extends JpaRepository<Postagem, Long>{

	public List<Postagem> findAllByTituloContainingIgnoreCase(String titulo);
	public List<Postagem> findAllByTextoContainingIgnoreCase(String texto);
	public List<Postagem> findAllByLocalContainingIgnoreCase(String local);
	public List<Postagem> findByDataBetween(Date dataInicial, Date dataFinal);
	
}
