package br.com.lojadevewo.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.lojadevewo.model.ProdutoModel;

public interface ProdutoRepository extends CrudRepository<ProdutoModel, Integer>{
    
}
