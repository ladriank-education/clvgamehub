var settings = {
	server: {
		host: '127.0.0.1',
		port: 8080,
		base_dir: '/home/samba/share/proyecto/development/clvgamehub/',
		templates_dir: '/home/samba/share/proyecto/development/clvgamehub/templates/',
		static_dir: '/home/samba/share/proyecto/development/clvgamehub/static/',
		games_dir: '/home/samba/share/proyecto/development/clvgamehub/static/games/',
	},
	database: {
		dialect: 'postgres',
		host: '127.0.0.1',
		name: 'clvgamehub.test',
		user: 'puser',
		pass: 'Mauser*3340!',
		port: 5432,
	},
}

switch(process.env.NODE_ENV){
	case 'dev':
	{
		settings.server.port = 8080
		settings.server.host = '127.0.0.1'
		// settings.database.name = 'clvgamehub.test'
	}
	break;
	case 'prod':
	{
		settings.server.port = 80
		settings.server.host = '0.0.0.0'
		// settings.database.name = 'clvgamehub'
	}
	break;
}

module.exports = settings