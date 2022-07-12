# Shuhari

## Simple but powerful node Typescript and testing

### Steps

```shell
npm init --yes
mkdir src
touch src/index.ts
npm i -D esbuild-runner typescript @types/node prettier

npm pkg set author="Alex Jeffcott"
npm pkg set license="MIT"
npm pkg set scripts.test="esr | node --test src/$npm_config_folder"
npm pkg set scripts.start="node -r esbuild-runner/register src/$npm_config_folder/index.ts"
npm pkg set scripts.fmt="prettier --write ."
```

### Running the project

```shell
npm start --folder=leet_001 # this would run the index.ts file in the folder named 'leet_001'
```
