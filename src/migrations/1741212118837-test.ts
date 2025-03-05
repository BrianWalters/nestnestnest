import { MigrationInterface, QueryRunner } from 'typeorm';

export class Test1741212118837 implements MigrationInterface {
  name = 'Test1741212118837';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "todo"
                             (
                                 "id"          SERIAL            NOT NULL,
                                 "title"       character varying NOT NULL,
                                 "description" character varying NOT NULL,
                                 "done"        boolean           NOT NULL,
                                 CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id")
                             )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "todo"`);
  }
}
