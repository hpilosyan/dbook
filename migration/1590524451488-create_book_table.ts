import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBookTable1590524451488 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "question",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "is_active",
                    type: "boolean",
                },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
