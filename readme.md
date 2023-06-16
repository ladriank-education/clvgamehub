# CLV GAME HUB

Web and games server with API embeded.

## Pre-requirements

1. Physical machine or virtual machine
2. Operative system: Ubuntu server 22.04
3. Internet connection

## Requirements

1. NodeJS (LTS)
2. PostgreSQL (v.12)

## How to use

1. In case of using UFW establish the correct rules for the ports.

2. Create a `settings.js` file with the following content:

```js
var settings = {
	server: {
		host: '<host>',
		port: <port>,
		base_dir: '/path/to/project/clvgamehub',
		templates_dir: '/path/to/project/clvgamehub/templates/',
		static_dir: '/path/to/project/clvgamehub/static/',
	},
	database: {
		dialect: 'postgres',
		host: '<db_host>',
		name: '<db_name>',
		user: '<db_user>',
		pass: '<pass>',
		port: <db_port>,
	},
};

/* optional */
switch(process.env.NODE_ENV){
	case 'dev':
	{
		settings.server.port = 8081;
		settings.server.host = '127.0.0.1';
	}
	break;
	case 'prod':
	{
		settings.server.port = 8080;
		settings.server.host = '0.0.0.0';
	}
	break;
}

module.exports = settings;
```

3. Execute te following command to start the server

`node main.js` or `npm run <script>`

**Beware!** If you use port 80 for web socket, you need to start the server as superuser

### API usage

- `GET /api/user?id={id}`
- `GET /api/user?nickname={nickname}`
- `GET /api/user?nickname={nickname}&pwd={pwd}`
- `POST /api/user?nickname={nickname}&pwd={pwd}`
- `GET /api/game`
- `GET /api/game?id={id}`
- `GET /api/game?name={name}`
- `GET /api/scoreboard`
- `GET /api/scoreboard?user={user_nickname}&game={game_name}`
- `GET /api/scoreboard?user={user_nickname}`
- `GET /api/scoreboard?game={game_name}`
- `GET /api/scoreboard?game={game_name}&top={top_num}`
- `GET /api/scoreboard?game={game_name}&top=highsc`
- `POST /api/scoreboard?user={user_nickname}&game={game_name}&score={score}&action=create`
- `POST /api/scoreboard?user={user_nickname}&game={game_name}&score={score}&action=update`
- `GET /api/achievement`
- `GET /api/achievement?id={id}`
- `GET /api/achievement?game={game_name}`
- `GET /api/user/achievements?nickname={user_nickname}`
- `GET /api/user/achievements?nickname={user_nickname}&achievement={achievement_name}`
- `GET /api/user/achievements?nickname={user_nickname}&game={game_name}`
- `POST /api/user/achievements?nickname={user_nickname}&achievement={achievement_name}`

**Note**: querying for names is case insensitive
