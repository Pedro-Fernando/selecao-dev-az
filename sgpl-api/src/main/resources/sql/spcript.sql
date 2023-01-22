--esse script deve ser utilizado apenas para testar o projeto de exemplo
-- CREATE SEQUENCE seq_unidade INCREMENT 1 MINVALUE 1 MAXVALUE 9999999 START 1 CACHE 1;

CREATE DATABASE sgpl;


CREATE SEQUENCE seq_unidade INCREMENT 1 MINVALUE 1 MAXVALUE 9999999 START 1 CACHE 1;

CREATE TABLE TB_USUARIO
(
    US_ID SERIAL PRIMARY KEY,
    US_NOME VARCHAR(255)
);


INSERT INTO tb_usuario (us_id, us_nome)
VALUES (nextval('seq_unidade'),'João Silva');

INSERT INTO tb_usuario (us_id, us_nome)
VALUES (nextval('seq_unidade'),'Maria');