

## 开始

在根目录下新增`.env.local`文件，token可以在https://github.com/settings/tokens 中进行申请，申请旧版本的tokens(classic)，然后勾选上`repo`中的`public_repo`即可。

PS:如果还勾选了其他选项则需要注意保存好token，不要泄露，否则别人可以通过该token操作你的`github`。

```
GITHUB_TOKEN=你的github token
GITHUB_OWNER=sulgweb
GITHUB_REPO=baize-toolbox
```

然后安装包，并启动

```bash
#安装
pnpm i
#启动
pnpm run dev
```

访问地址[http://localhost:3000](http://localhost:3000) 
