module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 6,
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react'],
	rules: {
		'no-console': [
			'error',
			{
				allow: ['log', 'error', 'time', 'timeEnd'],
			},
		],
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
	},
}
