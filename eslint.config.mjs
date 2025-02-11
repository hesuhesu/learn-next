import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	{
		files: ['**/*.js', '**/*.jsx'],
		rules: {
			// cr 에러를 막는 코드
			'prettier/prettier': ['error', { endOfLine: 'auto' }],
		},
	},
	...compat.config({
		extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
		plugins: ['prettier'],
	}),
];

export default eslintConfig;
