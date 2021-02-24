import { MigrationInterface, QueryRunner } from 'typeorm';

export class undefined1613496771235 implements MigrationInterface {
  name = 'undefined1613496771235';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tasks" DROP CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772"`,
    );
    await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "tasks" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "tasks" ADD CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "tasks"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "tasks"."updatedAt" IS NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`COMMENT ON COLUMN "tasks"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "tasks"."createdAt" IS NULL`);
    await queryRunner.query(
      `ALTER TABLE "tasks" DROP CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772"`,
    );
    await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "tasks" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "tasks" ADD CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id")`,
    );
  }
}
