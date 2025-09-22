import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1758568437199 implements MigrationInterface {
    name = 'CreateUserTable1758568437199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`activity_entity\` (\`id\` varchar(36) NOT NULL, \`activityType\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, \`userId\` int NOT NULL, \`distance\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`activity_entity\``);
    }

}
