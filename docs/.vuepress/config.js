module.exports = {
  title: "嘟嘟桌面(车机桌面)使用文档",
  description: "嘟嘟桌面使用文档,免费的车机桌面",
  themeConfig: {
    search: true,
    nav: [
      {
        text: "使用指南",
        link: "/"
      },
      {
        text: "最新版本下载",
        link:
          "http://car-launcher.dudu-lucky.com:7000/upload/apk/dcdebe12bcd943ce992ff3c89a27c116/temp.apk"
      },
      {
        text: "个人登录地址",
        link: "http://app.dudu-lucky.com:7000/#/user/login"
      }
    ],
    sidebar: {
      "/": [
        "/",
        "home",
        "theme",
        "item",
        "ble",
        "driving",
        "diceng",
        "other",
        "update",
        "juansong",
        "changjianwenti"
      ]
    },
    sidebarDepth: 2
  },
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: "./components"
      }
    ]
  ]
};
