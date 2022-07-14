# Minimal Typescript Node Template

## Minimal but powerful node Typescript and testing

### Steps

```shell
mkdir src
touch src/index.ts

curl -fsSL https://get.pnpm.io/install.sh | sh -
pnpm init
pnpm add -D esbuild esbuild-runner typescript @types/node prettier

npm pkg set author="Alex Jeffcott"
npm pkg set license="MIT"
npm pkg set scripts.test="node -r esbuild-runner/register --test src/$npm_config_target/$npm_config_target.test.ts"
npm pkg set scripts.start="node -r esbuild-runner/register src/$npm_config_target/index.ts"
npm pkg set scripts.fmt="prettier --write ."
npm pkg set engines.pnpm=">=7.5.X" && npm pkg set engines.node=">=18.4.X" && npm pkg set engines.npm="USE_PNPM_PLEASE" && npm pkg set engines.yarn="USE_PNPM_PLEASE" && printf "engine-strict=true" > .npmrc
```

### Running the project

```shell
pnpm start --config.target=leet001 # run the index.ts file in the folder named 'leet001'.

# INFO: You have to specify the test file path as node will not find ts files.
# INFO: As pnpm disallows unknown args you cannot use the npm trick of passing an arbitrary arg, ARG and then accessing it in your script as $npm_config_ARG. This means you should use environment variables.
# npm start --target=leet001 # run leet001.test.ts
TARGET=leet001 pnpm start # run leet001.test.ts
```
