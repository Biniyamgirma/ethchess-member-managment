/*
  Warnings:

  - Made the column `created_at` on table `members` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `members` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `membership_tiers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `membership_tiers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `paid_date` on table `payment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `payment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ethchess_member_point" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "match_history" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "started_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "started_at" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "member_details" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "member_subscriptions" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "members" ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "membership_tiers" ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "updated_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "payment" ALTER COLUMN "paid_date" SET NOT NULL,
ALTER COLUMN "paid_date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "paid_date" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3);
