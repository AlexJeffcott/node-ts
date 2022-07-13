# Minimal Typescript Node Template

## Minimal but powerful node Typescript and testing

### Steps

```shell
npm init --yes
mkdir src
touch src/index.ts
npm i -D esbuild-runner typescript @types/node prettier

npm pkg set author="Alex Jeffcott"
npm pkg set license="MIT"
npm pkg set scripts.test="esr | node --test src/$npm_config_file"
npm pkg set scripts.start="node -r esbuild-runner/register src/$npm_config_dir/index.ts"
npm pkg set scripts.fmt="prettier --write ."
```

### Running the project

```shell
npm start --dir=leet_001 # run the index.ts file in the folder named 'leet_001'.

# INFO: You have to specify the test file path as node will not find ts files.
npm start --file=src/leet_001/leet001.test.ts # run leet001.test.ts
```
