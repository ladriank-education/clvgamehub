DELETE FROM "user";
DELETE FROM "game";
DELETE FROM "achievement";
DELETE FROM "scoreboard";
DELETE FROM "user_achievements";

insert into "user"("nickname", "password") values
    ('usuario1', md5('usuario1')),
    ('usuario2', md5('usuario2'));

insert into "game"("name", "directory") values
    ('Plaffy Bird', 'plaffy-bird'),
    ('Petris', 'petris'),
    ('SpaceCraft', 'spacecraft');

insert into "achievement"("name", "description", "game_id") values
	('Vuelo Largo', 'Consigue volar entre 200 pares de tuberías', 1),
	('Puntos', 'Consigue X puntos', 2),
	('Experto', 'Consigue llegar hasta el nivel X', 2),
	('Cazamonedas', 'Reúne X monedas', 2),
	('Coleccionista', 'Hazte con todas las bolas', 3),
	('Espacio', 'Consigue llegar hasta el Espacio', 3);

insert into "user_achievements"("user_id", "achievement_id") values
	(1, 1),
	(1, 2),
	(2,3),
	(2,4);