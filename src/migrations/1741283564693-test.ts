import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1741283564693 implements MigrationInterface {
    name = 'Test1741283564693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "description" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "description" SET NOT NULL`);
    }

}
