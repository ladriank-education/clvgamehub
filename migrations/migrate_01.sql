DROP TABLE "user" CASCADE;
DROP TABLE "game" CASCADE;
DROP TABLE "achievement" CASCADE;
DROP TABLE "scoreboard" CASCADE;
DROP TABLE "user_achievements" CASCADE;

CREATE TABLE "user"(
    "id" serial,
    "nickname" varchar(20) unique not null,
    "password" varchar(32) not null,
    primary key ("id")
);

CREATE TABLE "game"(
    "id" serial,
    "name" varchar(50) not null,
    "directory" varchar(50) not null,
    primary key ("id")
);

CREATE TABLE "achievement"(
    "id" serial,
    "name" varchar(20) not null,
    "description" varchar(90) not null,
    "game_id" int not null,
    primary key ("id"),
    constraint "game_fk1" foreign key ("game_id")
        references "game"("id") on update cascade on delete cascade
);

CREATE TABLE "scoreboard"(
    "id" serial,
    "user_id" int not null, 
    "game_id" int not null,
    "score" int not null,
    primary key ("id"),
    constraint "user_fk1" foreign key ("user_id")
        references "user"("id") on update cascade on delete cascade,
    constraint "game_fk2" foreign key ("game_id")
        references "game"("id") on update cascade on delete cascade
);

CREATE TABLE "user_achievements"(
    "id" serial,
    "user_id" int not null,
    "achievement_id" int not null,
    primary key ("id"),
    constraint "user_fk2" foreign key ("user_id")
        references "user"("id") on update cascade on delete cascade,
    constraint "achievement_fk1" foreign key ("achievement_id")
        references "achievement"("id") on update cascade on delete cascade
);