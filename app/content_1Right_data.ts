const items = [
    {
        name: 'css',
        title: 'CSS3',
        image: '/logoPacks/css-3.svg',
        imagePath: '/logoPacks/css-3.svg',
        text: ['CSSは2012年から始めました。',
                'レイアウト、レスポンシブ等の要素の大きさを操作する技術、アニメーション技術などは出来ます。',
                'transfrome3dの知識が甘く要勉強が必要な所だと感じてます。'
            ]
    },
    {
        name: 'html',
        title: 'HTML5',
        image: '/logoPacks/html-1.svg',
        imagePath: '/logoPacks/html-1.svg',
        text: ['HTMLは2012年から始めました。',
                '基本的には問題なく使う事は出来ます。',
                '適切なタグを完璧に扱うことは難しいと感じています。',
                ]
    },
    {
        name: 'js',
        title: 'JavaScript',
        image: '/logoPacks/javascript-1.svg',
        imagePath: '/logoPacks/javascript-1.svg',
        text: ['JavaScriptは、2013年から始めました。',
        'JavaScriptは基本的なことは全般出来ます。',
        'ライブラリで提供されてるようなアニメーションを伴った',
        'DOM操作は出来ます。',
        'フォーム操作やバリデーションなど',
        'APIの操作可能です。',
        'Canvasは勉強中で、p5.jsを使った２Dゲームの作成はした事ありますが',
        '背景で使われるような、幾何学模様をイメージ通りに実現する事は、',
        'まだ難しいです。',
        'WEBGL出来ません。今、JSでマスターしたい技術です。',
        'React,NEXT.jsは動かすことは出来ます。深い知識はありません。',
        'VueやNuxt.jsは出来ません。',]
    },
    { 
        name: 'ts', 
        title: 'TypeScript', 
        image: '/logoPacks/typescript.svg', 
        imagePath: '/logoPacks/typescript.svg', 
        text:['TypeScriptは2023年から始めました。',
            '転職を意識しだした時に、TypeScriptの重要性を感じたため',
            '勉強を開始しました。',
            'まだ慣れてませんが',
            'chatGPTなど使い勉強しながら作成している状態です。',] 
    },
    { 
        name: 'next', 
        title: 'NEXT.js', 
        image: '/logoPacks/nextjs-13.svg', 
        imagePath: '/logoPacks/nextjs-13.svg', 
        text:['NEXT.jsは2022年から勉強を始めました。',
            '基本的な事はできる状態ですが、NEXT14のServerActionは',
            'まだ触ってません。',
            '今、表示してるポートフォリオはAppRouterで作成しました。',
        '',] 
    },
    { 
        name: 'react', 
        title: 'React', 
        image: '/logoPacks/react-1.svg', 
        imagePath: '/logoPacks/react-1.svg', 
        text:['Reactは2022年から始めました。',
                '動かすことは出来ますが、Hooksやキャッシュやレンダリング',
            'ライブラリなど、勉強しなければいけない所が多々ある状態です。',
        '何が適切なのか、わからないでいるので、情報収集しながら試行錯誤している途中です。',] 
    },
    { 
        name: 'node', 
        title: 'node.js', 
        image: '/logoPacks/nodejs-2.svg', 
        imagePath: '/logoPacks/nodejs-2.svg', 
        text:['node.jsは2021年から始めました。',
    '深い知識はありませんが、スクレイピングやExpressを使ったWEBサーバーやAPIサーバーの構築はできます。Prismaを使ったORマッパー、DB連携は出来ます。',] 
    },
    { 
        name: 'jquery', 
        title: 'jQuery', 
        image: '/logoPacks/jquery.svg', 
        imagePath: '/logoPacks/jquery.svg', 
        text:['jQueryは2014から勉強を始めました。',
            '知識レベルは、一つだけ、jQueryでchrome拡張機能を作った程度です。',] 
    },
    { 
        name: 'linux', 
        title: 'Linux', 
        image: '/logoPacks/linux-tux-1.svg', 
        imagePath: '/logoPacks/linux-tux-1.svg', 
        text:['基本的なLinuxコマンドで操作はできます。',
            '深くまでは踏み込んでません。',] 
    },
    { 
        name: 'playCanvas', 
        title: 'PlayCanvas', 
        image: '/logoPacks/playcanvas-icon.png', 
        imagePath: '/logoPacks/playcanvas-icon.png', 
        text:['PlayCanvasは2023年から始めました。',
            '一応３Dゲームの基本システムは作れるようになりました。',
            '３DWEBサイトも簡易的なものなら出来ます。',] 
    },
    { 
        name: 'wordpress', 
        title: 'WordPress', 
        image: '/logoPacks/wordpress-icon.svg', 
        imagePath: '/logoPacks/wordpress-icon.svg', 
        text:['WordPressは2014年から始めました。',
            '基本的な使い方、環境構築、多少のカスタマイズは出来ます。',
            'WordPressテンプレートは、昔作成した事がありますが、10年ぐらい前なので、忘れてることも多いと思うので、今やるとなると時間かかるかもしれません。',
            'WordPressプラグインは作成したことがありません。',
            'ブロックテンプレートのテーマ作成に関しては知識がありません。']
    },
    { 
        name: 'gas', 
        title: 'GAS', 
        image: '/logoPacks/GAS_img.png', 
        imagePath: '/logoPacks/GAS_img.png', 
        text:['GASは2020年から勉強を始めました。',
            '基本的なスプレッドシート関数、スクレイピング、独自関数など作れます。',
            '他のGoogleのサービスなどと連携や機能追加など出来ます。',] 
    },
    { 
        name: 'docker', 
        title: 'Docker', 
        image: '/logoPacks/docker-4.svg', 
        imagePath: '/logoPacks/docker-4.svg', 
        text:['Dockerファイルの作成とDockerCoposeは一応出来ます。',
            'GitHunActionsやAWSのECRなどを使って、CICDパイプラインなどは実装した事ありません。',
            'Kubernetesは座学も受けてません。',] 
    },
    { 
        name: 'postgresql', 
        title: 'PostgreSQL', 
        image: '/logoPacks/postgresql.svg', 
        imagePath: '/logoPacks/postgresql.svg', 
        text:['SQLは基本的なCRUD操作なら出来る状態です。',
            '論理設計は第３正規化まで勉強しましたが、テスト的に何か作ったわけではないので、知識は、定着出来てないと思います。',
            'ER図などは理解は出来てます。',
            '物理設計は出来ません。',] 
    },
    { 
        name: 'github', 
        title: 'GitHub', 
        image: '/logoPacks/github-icon-1.svg', 
        imagePath: '/logoPacks/github-icon-1.svg', 
        text:['GitHubは2021年から始めました。',
            '基本的な意味やコマンドの操作は出来ます。',
            'GitHubFlowはシンプルで使いやすい為、よく使います。',
            'git-flowは流れは理解していますが、大きな開発をしていない為、git-flowに沿って開発をした事は、まだありません。'] 
    },
];

export {items}
