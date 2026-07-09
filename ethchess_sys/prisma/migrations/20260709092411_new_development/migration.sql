/*
  Warnings:

  - The `created_at` column on the `ethchess_member_point` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[id]` on the table `members` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `subcity` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ethchess_member_point" DROP CONSTRAINT "ethchess_member_point_user_id_fkey";

-- DropForeignKey
ALTER TABLE "match_history" DROP CONSTRAINT "match_history_black_player_id_fkey";

-- DropForeignKey
ALTER TABLE "match_history" DROP CONSTRAINT "match_history_user_id_fkey";

-- DropForeignKey
ALTER TABLE "match_history" DROP CONSTRAINT "match_history_white_player_id_fkey";

-- DropForeignKey
ALTER TABLE "member_details" DROP CONSTRAINT "member_details_user_id_fkey";

-- DropForeignKey
ALTER TABLE "member_subscriptions" DROP CONSTRAINT "member_subscriptions_tier_id_fkey";

-- DropForeignKey
ALTER TABLE "member_subscriptions" DROP CONSTRAINT "member_subscriptions_user_id_fkey";

-- DropForeignKey
ALTER TABLE "payment" DROP CONSTRAINT "payment_subscription_id_fkey";

-- DropForeignKey
ALTER TABLE "payment" DROP CONSTRAINT "payment_user_id_fkey";

-- AlterTable
ALTER TABLE "ethchess_member_point" DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "member_details" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "members" ADD COLUMN     "email" TEXT,
ADD COLUMN     "subcity" INTEGER NOT NULL,
ADD COLUMN     "user_from" VARCHAR(55),
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "members_id_key" ON "members"("id");
