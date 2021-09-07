# Docker WordPress Template
WordPressをDocker Composeで立ち上げる場合の雛形  

### 担当
- Docker - WordPressとMariaDBの管理、サーバー
- Gulp - Pug、SCSS、TypeScriptなどのコンパイル

## 目次
- [ローカルサーバー構築](#build_for_development)
  - [Docker](#build_for_development_docker)
  - [npm](#build_for_development_npm)
- [ビルド(本番用)](#build_for_production)
- [Lint](#lint)
  - [Pug](#lint_pug)
  - [SCSS](#lint_scss)
  - [TypeScript](#lint_typescript)
- [構成](#composition)


<a name="build_for_development"/>

## ローカルサーバー構築

<a name="build_for_development_docker"/>

### Docker Containerの起動
Dockerがインストールされていて、アプリケーションが起動されていることが前提  

#### 初めての場合
[Packageのインストール](#installation)の前に行うこと  
.envファイルのWordPressとDBの設定を適切な値にする

```
cp .env.sample .env
```

```
docker-compose up -d
```

distフォルダにwpフォルダが作成されるまで待つこと

```
open http://localhost:8888
```

#### 2回目以降
```
docker-compose up -d
```

```
open http://localhost:8888
```

#### その他のDockerコマンド

##### Docker Containerの停止
```
docker-compose stop
```

##### Docker Containerの削除
```
docker-compose rm
```

<a name="installation"/>

<a name="build_for_development_npm"/>

### Packageのインストール(初回のみ)
```
npm install
```

### Pug, SCSS, TypeScriptなどのコンパイル
```
npm run serve 
```

<a name="build_for_production"/>

## ビルド(本番用)
```
npm run build
```

<a name="lint"/>

## Lint
コミットする際に自動でLintチェックとフォーマット処理が走ります  
(huskyとlint-stagedを使用)

<a name="lint_pug"/>

### Pug
[Lint](https://github.com/pugjs/pug-lint)  
[Format](https://github.com/prettier/plugin-pug)

#### Lintチェック
```
npm run lint:templates
```

#### Lintフォーマット
```
npm run lint:fix:templates
```

<a name="lint_scss"/>

### SCSS
[Lint](https://stylelint.io/)  
[Format](https://github.com/prettier/stylelint-prettier)

#### Lintチェック
```
npm run lint:styles
```

#### Lintフォーマット
```
npm run lint:fix:styles
```

<a name="lint_typescript"/>

### TypeScript
[Lint(TypeScript)](https://typescript-jp.gitbook.io/deep-dive/project/compilation-context/tsconfig)  
[Lint(ESLint)](https://github.com/typescript-eslint/typescript-eslint)  
[Format](https://prettier.io/)

#### Lintチェック
```
npm run lint:scripts
```

#### Lintフォーマット
```
npm run lint:fix:scripts
```

<a name="composition"/>

## 構成
- docker-compose
  - wordpress
  - mariadb
- gulp
  - scss - cssプリプロセッサ
  - svgo - svgの最適化
  - typescript - 型定義可能なJavaScript
  - pug - htmlテンプレートエンジン
    - pug-php-filter - PugでPHPを記述できるようにするもの
  - copy - ソースをdistディレクトリにコピー（scss、svg、typescriptファイルを除く）
- husky - git commit前に特定のコマンドを実行できるもの
- lint-staged - gitにステージングしたファイルを対象に特定のコマンドを実行できるもの
