Zenn の記事のサンプルコードです

# 環境構築

## ローカルサーバー起動までの手順

```
git clone <URL>
yarn install
yarn run dev
```

## 概要

ローカルサーバーを立ち上げると、user 権限、admin 権限のときの Header コンポーネントが表示されます

[Header コンポーネントのコード](src/app/components/Header.tsx)
[Header コンポーネントの親コンポーネント](src/app/page.tsx)
[props の型を判定する型ガードのユーティリティ](src/app/utils/isPropsOfType.ts)
