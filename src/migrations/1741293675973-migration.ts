import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1741293675973 implements MigrationInterface {
  name = 'Migration1741293675973';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE "todo"`);
    await queryRunner.query(
      `ALTER TABLE "todo" ADD "createdAt" TIMESTAMP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "todo" ALTER COLUMN "done" SET DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "todo" ALTER COLUMN "done" SET DEFAULT false`,
    );
    await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "createdAt"`);
  }
}
