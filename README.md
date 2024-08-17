# プロジェクト README

## 概要
このプロジェクトは、岡田明也のポートフォリオサイトです。Next.jsを使用して構築されており、さまざまな技術スタックやプロジェクトの詳細を紹介しています。

## ディレクトリ構造
以下は、主要なディレクトリとその内容の概要です。

### `app`
- `page.tsx`: ホームページのコンポーネント。マウスホバーやスワイプ機能を含む。
- `works/page.tsx`: "works" ページのコンポーネント。シンプルなページ構成。
- `blog/page.tsx`: ブログ一覧ページのコンポーネント。MicroCMSからデータを取得して表示。
- `blog/[postId]/Sidebar.client.tsx`: ブログ詳細ページのサイドバーコンポーネント。IntersectionObserverを使用してナビゲーションを提供。
- `layout.tsx`: 全体のレイアウトを定義するコンポーネント。メタデータや共通のスタイルを含む。

### `libs`
- `mouseMove.ts`: マウスの動きに応じてツールチップを表示するスクリプト。
- `microcms.ts`: MicroCMSからデータを取得するためのクライアントと関数を定義。
- `toolTipTextdata.ts`: ツールチップに表示するテキストデータを定義。

### `styles`
- `globals.css`: 全体のスタイルを定義するCSSファイル。
- `content_2Right.css`: 特定のコンテンツのスタイルを定義するCSSファイル。

## セットアップ
プロジェクトをローカル環境でセットアップする手順は以下の通りです。

1. リポジトリをクローンします。
    ```bash
    git clone https://github.com/your-repo/portfolio.git
    cd portfolio
    ```

2. 必要なパッケージをインストールします。
    ```bash
    npm install
    ```

3. 環境変数を設定します。`.env` ファイルを作成し、以下の内容を追加します。
    ```
    MICROCMS_SERVICE_DOMAIN=your_service_domain
    MICROCMS_API_KEY=your_api_key
    ```

4. 開発サーバーを起動します。
    ```bash
    npm run dev
    ```

5. ブラウザで `http://localhost:3000` にアクセスしてサイトを確認します。

## 使用技術
- **Next.js**: Reactフレームワーク。サーバーサイドレンダリングや静的サイト生成をサポート。
- **TypeScript**: 型安全なJavaScriptのスーパーセット。
- **MicroCMS**: ヘッドレスCMS。ブログデータの管理に使用。
- **CSS**: スタイルシート。レスポンシブデザインやアニメーションを含む。

## 主な機能
- **マウスホバーエフェクト**: マウスの動きに応じてツールチップを表示。
- **ブログ機能**: MicroCMSからデータを取得し、ブログ一覧と詳細を表示。
- **スワイプナビゲーション**: モバイルデバイスでのスワイプ操作をサポート。

