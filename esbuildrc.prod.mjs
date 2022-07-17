import { buildSync } from 'esbuild';

const opts = {
	bundle: true,
	write: true,
	minify: true,
	outdir: 'dist',
	entryPoints: ['./src/index.ts'],
	format: 'esm',
	platform: 'node',
	target: 'node18'
};

buildSync({ ...opts });

export default opts;