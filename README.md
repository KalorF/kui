# KUI

一个vue3 + vite + TS + TSX + scss 构建的按需引入组件库，当然也支持全量引入（使用pnpm进行包管理）

## 快速开始

```sh
pnpm install
pnpm dev
```

### 打包

```sh
pnpm build
```

### tips

- 在tsx开发中支持 scss 类型推断
- 支持按需引入，引入时无需额外引入css，只需引入对应的`组件`文件(也支持全量引入)

```js
// 按需
import { KButton } from '"@kui/ui'

// 全量
import kui from '"@kui/ui'

app.use(kui)
```
