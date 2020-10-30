const fs = require('fs')

module.exports = {
	publicPath: '/',
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Tyra Web'
				return args
			})
	},
	css: {
		loaderOptions: {
			sass: {
				data: fs.readFileSync('src/variables.scss', 'utf-8')
			}
		}
	}
}
