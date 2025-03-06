import { MigrationInterface, QueryRunner } from "typeorm";

export class Donecolumn1741283697534 implements MigrationInterface {
    name = 'Donecolumn1741283697534'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "done" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "done" DROP DEFAULT`);
    }

}
