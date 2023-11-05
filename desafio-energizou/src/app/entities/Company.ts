import { Entity, PrimaryGeneratedColumn, Column, Check } from 'typeorm';

@Entity('empresas')
@Check(`cnpj REGEXP '^[0-9]{2}\\.[0-9]{3}\\.[0-9]{3}/[0-9]{4}-[0-9]{2}$'`)
@Check(`cep REGEXP '^[0-9]{5}-[0-9]{3}$'`)
@Check(`email LIKE '%@%.com'`)
class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome_empresa: string;

  @Column({ type: 'varchar', length: 255 })
  senha: string;

  @Column({ type: 'varchar', length: 255 })
  razao_social: string;

  @Column({ type: 'char', length: 18 })
  cnpj: string;

  @Column({ type: 'char', length: 9 })
  cep: string;

  @Column({ type: 'varchar', length: 255 })
  endereco: string;

  @Column({ type: 'char', length: 3 })
  numero: string;

  @Column({ type: 'char', length: 15 })
  telefone: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;
}

export default Company;