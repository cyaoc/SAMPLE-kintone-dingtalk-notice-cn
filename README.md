# SAMPLE-kintone-dingtalk-notice-cn
将kintone流程管理的审批人推送给服务端。

# 效果
![通知](https://raw.githubusercontent.com/cyaoc/cn-idp/master/screenshots/notify.gif)

# 安装
- 安装依赖
```console
npm i
```

# 使用方式
- 服务端
  - 参考[服务端](https://github.com/cyaoc/Dingtalk-IdP-demo)，并完成相应的配置。

- kintone
  - 修改 src/index.js 第一行，在${your_domain}中填入服务端域名。
  - 运行 npm run build
  - 将 dist/js/app.js 上传到 kintone系统管理->自定义->通过JavaScript / CSS自定义
  - 所有app的流程管理均会生效。
