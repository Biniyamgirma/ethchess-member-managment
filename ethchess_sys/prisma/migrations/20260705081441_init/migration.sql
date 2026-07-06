-- CreateTable
CREATE TABLE "payment" (
    "id" SERIAL NOT NULL,
    "user_id" VARCHAR(7),
    "subscription_id" INTEGER,
    "amount" DECIMAL,
    "paid_date" TIMESTAMP(6),
    "payment_type" VARCHAR(255),
    "payment_method" VARCHAR(255),
    "payment_status" VARCHAR(255),
    "approved_by" VARCHAR(255),
    "screenshot" VARCHAR(255),
    "created_at" TIMESTAMP(6),

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_history" (
    "id" SERIAL NOT NULL,
    "user_id" VARCHAR(7),
    "started_at" TIMESTAMP(6),
    "game_end_at" TIMESTAMP(6),
    "min" INTEGER,
    "white_player_id" VARCHAR(7),
    "black_player_id" VARCHAR(7),
    "result" VARCHAR(255),

    CONSTRAINT "match_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membership_tiers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(25),
    "price" DECIMAL,
    "duration_days" INTEGER,
    "created_at" TIMESTAMP(6),
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "membership_tiers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "member_subscriptions" (
    "id" SERIAL NOT NULL,
    "user_id" VARCHAR(7),
    "tier_id" INTEGER,
    "start_date" TIMESTAMP(6),
    "end_date" TIMESTAMP(6),
    "subscription_status" VARCHAR(255),

    CONSTRAINT "member_subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "members" (
    "id" VARCHAR(7) NOT NULL,
    "f_name" VARCHAR(255),
    "m_name" VARCHAR(255),
    "l_name" VARCHAR(255),
    "phone" VARCHAR(255),
    "telegram_username" VARCHAR(255),
    "trophy" VARCHAR(255),
    "member_title" VARCHAR(255),
    "eth_chess_rating" INTEGER,
    "password" VARCHAR(255),
    "address" VARCHAR(255),
    "profile_picture" VARCHAR(655),
    "status" INTEGER,
    "is_deleted" INTEGER,
    "is_monthly_payment_paid" INTEGER,
    "role" VARCHAR(55),
    "created_at" TIMESTAMP(6),
    "updated_at" TIMESTAMP(6),
    "fide_standard_rating" INTEGER,
    "fide_rapid_rating" INTEGER,
    "fide_blitz_rating" INTEGER,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "member_details" (
    "id" SERIAL NOT NULL,
    "user_id" VARCHAR(7),
    "chess_dot_com_username" VARCHAR(255),
    "lichess_username" VARCHAR(255),
    "lichess_classical_rating" INTEGER,
    "lichess_rapid_rating" INTEGER,
    "lichess_blitz_rating" INTEGER,
    "lichess_bullet_rating" INTEGER,
    "chess_dot_com_bullet_rating" INTEGER,
    "chess_dot_com_blitz_rating" INTEGER,
    "chess_dot_com_rapid_rating" INTEGER,

    CONSTRAINT "member_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ethchess_member_point" (
    "id" SERIAL NOT NULL,
    "user_id" VARCHAR(7),
    "paid_in" INTEGER,
    "paid_out" INTEGER,
    "change_form" VARCHAR(255),
    "created_at" VARCHAR(255),

    CONSTRAINT "ethchess_member_point_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payment_user_id_key" ON "payment"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "payment_subscription_id_key" ON "payment"("subscription_id");

-- CreateIndex
CREATE UNIQUE INDEX "match_history_user_id_key" ON "match_history"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "match_history_white_player_id_key" ON "match_history"("white_player_id");

-- CreateIndex
CREATE UNIQUE INDEX "match_history_black_player_id_key" ON "match_history"("black_player_id");

-- CreateIndex
CREATE UNIQUE INDEX "membership_tiers_name_key" ON "membership_tiers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "member_subscriptions_user_id_key" ON "member_subscriptions"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "member_details_user_id_key" ON "member_details"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "ethchess_member_point_user_id_key" ON "ethchess_member_point"("user_id");

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "member_subscriptions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_white_player_id_fkey" FOREIGN KEY ("white_player_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_black_player_id_fkey" FOREIGN KEY ("black_player_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "member_subscriptions" ADD CONSTRAINT "member_subscriptions_tier_id_fkey" FOREIGN KEY ("tier_id") REFERENCES "membership_tiers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "member_subscriptions" ADD CONSTRAINT "member_subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "member_details" ADD CONSTRAINT "member_details_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ethchess_member_point" ADD CONSTRAINT "ethchess_member_point_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
