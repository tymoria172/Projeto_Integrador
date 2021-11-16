use db_ypora;

insert into tb_usuario (nome, senha, usuario) values ("Allison", "senha1", "allison@gen.com");
insert into tb_usuario (nome, senha, usuario) values ("André", "senha2", "andre@gen.com");
insert into tb_usuario (nome, senha, usuario) values ("Eduardo", "senha3", "edu@gen.com");
insert into tb_usuario (nome, senha, usuario) values ("Vinícius", "senha4", "vini@gen.com");

insert into tb_tema (nome, descricao, tag) values ("Aviso", "Avisos sobre problemas de enchentes", "#Avisos #Enchentes");
insert into tb_tema (nome, descricao, tag) values ("Dicas", "Dicas sobre economia de água", "#Dicas #Economia");
insert into tb_tema (nome, descricao, tag) values ("Denuncias", "Denuncias sobre problemas saneamento", "#Avisos #Saneamento");

insert into tb_postagem (titulo, texto, data, tema_id, usuario_id) values ("3 maneiras de gastar menos água", 
"Tomar banhos rápidos, escovar os dentes com a torneira fechada, junto bastente roupara para lavar de uma vez", current_timestamp(), 3, 2);

insert into tb_postagem (titulo, texto, local, data, tema_id, usuario_id) values ("Vazamento de água", 
"Há três dias que um cano se rempeu na Av. Elias Mas - Capão Responde e ainda não foi resolvido. A região do Capão Redondo está com falta de água.",
"Av. Ellias Mas, 37 - Capão Redondo - São Paulo/SP", current_timestamp(), 1, 3);

insert into tb_postagem (titulo, texto, local, data, tema_id, usuario_id) values ("Algamento zona leste", 
"As principais vias do bairro Carrão estão alagas, evitem passar por lá",
"Vila Carrão - São Paulo/SP", current_timestamp(), 2, 3);

select * from tb_usuario;

select * from tb_tema;

select * from tb_postagem;