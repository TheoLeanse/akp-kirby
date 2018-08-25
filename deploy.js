if (!process.env.ENVIRONMENT_IS_CIRCLE) require('dotenv').config();
var FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

[
	// directories in which updates may take place
	'assets/css',
	'site/blueprints',
	'site/config',
	'site/controllers',
	'site/plugins',
	'site/snippets',
	'site/templates'
]
	.map(directory => () =>
		ftpDeploy.deploy({
			user: process.env.FTP_USERNAME,
			password: process.env.FTP_PASSWORD,
			host: process.env.FTP_SERVER,
			port: process.env.PORT,
			localRoot: __dirname + '/' + directory,
			remoteRoot: '/test-deploy/' + directory,
			include: ['*', '**/*'],
			exclude: [],
			deleteRemote: true
		})
	)
	.reduce((prev, next) => prev.then(next), Promise.resolve())
	.then(() => console.log('Deployed successfully'));
