import { MigrationInterface, QueryRunner, Table, TableCheck } from "typeorm"

export class CreateCompaniesTable1699185533692 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
            new Table({
                name: 'empresas',
                columns: [
                  {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                  },
                  {
                    name: 'nome_empresa',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                  },
                  {
                    name: 'senha',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                  },
                  {
                    name: 'razao_social',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                  },
                  {
                    name: 'cnpj',
                    type: 'char',
                    length: '18',
                    isNullable: false,
                  },
                  {
                    name: 'cep',
                    type: 'char',
                    length: '9',
                    isNullable: false,
                  },
                  {
                    name: 'endereco',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                  },
                  {
                    name: 'numero',
                    type: 'char',
                    length: '3',
                    isNullable: false,
                  },
                  {
                    name: 'telefone',
                    type: 'char',
                    length: '15',
                    isNullable: false,
                  },
                  {
                    name: 'email',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                  },
                ],
                checks: [
                    new TableCheck({
                      name: 'chk_cnpj_format',
                      expression: `cnpj REGEXP '^[0-9]{2}\\.[0-9]{3}\\.[0-9]{3}/[0-9]{4}-[0-9]{2}$'`,
                    }),
                    new TableCheck({
                      name: 'chk_cep_format',
                      expression: `cep REGEXP '^[0-9]{5}-[0-9]{3}$'`,
                    }),
                    new TableCheck({
                      name: 'chk_email_format',
                      expression: `email LIKE '%@%.com'`,
                    }),
                  ],
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
