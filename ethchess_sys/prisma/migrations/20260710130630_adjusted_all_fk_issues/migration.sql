-- DropIndex
DROP INDEX "ethchess_member_point_user_id_key";

-- DropIndex
DROP INDEX "match_history_black_player_id_key";

-- DropIndex
DROP INDEX "match_history_user_id_key";

-- DropIndex
DROP INDEX "match_history_white_player_id_key";

-- DropIndex
DROP INDEX "member_details_user_id_key";

-- DropIndex
DROP INDEX "member_subscriptions_user_id_key";

-- DropIndex
DROP INDEX "payment_subscription_id_key";

-- DropIndex
DROP INDEX "payment_user_id_key";

-- AlterTable
ALTER TABLE "members" ALTER COLUMN "subcity" DROP NOT NULL,
ALTER COLUMN "subcity" SET DATA TYPE VARCHAR(255);
