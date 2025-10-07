# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### メモ

インスペクタやヒエラルキーを単体でスクリーンショットを撮る時の幅は400

```cs
[MenuItem("Misc/LongContent")]
static void ShowLongContentWindow()
{
    var window = EditorWindow.CreateWindow<Empty>();
    window.titleContent = new GUIContent("Content");
    window.minSize = new Vector2(400f, 600f);
    window.maxSize = new Vector2(400f, 8000f);
    window.Show();
}
```

画像はRetinaで撮ると巨大すぎるのでRetinaで撮るの禁止

VRChatに「UIを最適化」した状態で撮ること

admonitions ルール
:::note[NOTE]
作業上の推奨事項ではない、全ての人が知る必要はない内容、情報
:::

:::tip[TIPS]
一部の人が従った方が良い内容
:::

:::info[INFO]
一般的に全ての人が従った方が良い内容
:::

:::warning[WARNING]
作業が進められないような問題が起きるやつ
:::

:::danger[DANGER]
データを破壊するような問題が起きるやつ
:::
