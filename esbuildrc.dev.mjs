import { build } from 'esbuild';
import glob from 'tiny-glob';

(async () => {
//  const testFiles = await glob("./src/**/*test.ts");
  const allFiles = await glob("./src/*.ts");

  await build({
	bundle: false,
	write: true,
	outdir: 'dev',
	sourcemap: 'external',
	format: 'esm',
	platform: 'node',
	target: 'node18'
  });
})();
