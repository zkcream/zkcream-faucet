# zkcream-faucet

## Project setup

1. Create `.env` file from `.env.sample` file

```
$ cat .env.sample > .env
```

2. Add api endpoint url

example:

```
$ cat .env
VUE_APP_ZKCREAM_API_ENDPOINT="http://localhost:3000" 
```

3. Install packages

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
