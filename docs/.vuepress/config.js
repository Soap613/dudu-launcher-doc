module.exports = {
  title: "嘟嘟车机桌面",
  description: "武汉加油,中国加油",
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "车机桌面,嘟嘟桌面,嘟嘟车机桌面,车机桌面,车载嘟嘟桌面"
      }
    ],
    [
      "meta",
      {
        name: "baidu-site-verification",
        content: "bP4lIJnJYa"
      }
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  plugins: [
    "@vuepress/pwa",
    {
      serviceWorker: true,
      updatePopup: true
    }
  ],
  themeConfig: {
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "鸣谢", link: "/guide/other/鸣谢" },
      {
        text: "更新",
        items: [
          { text: "嘟嘟车机桌面", link: "/guide/other/updates" },
          { text: "嘟嘟车机桌面MINI", link: "/guide/other/updates_mini" },
          { text: "DC Player", link: "/guide/other/updates_dc" },
          { text: "晴天FM", link: "/guide/other/updates_qt" }
        ]
      },
      {
        text: "主题",
        items: [
          { text: "🆒🆔 浪 ꦿོ 子 এ࿐", link: "/guide/theme/lz" },
          { text: " 氺墨丹青 ▂◣", link: "/guide/theme/smdq" },
          { text: "文哥", link: "/guide/theme/wg" },
          { text: "情伤人", link: "/guide/theme/qsr" },
          { text: "正在想...", link: "/guide/theme/zzx" },
          { text: "系统主题", link: "/guide/theme/sys" }
        ]
      },
      {
        text: "更多",
        items: [
          { text: "可用车机", link: "/guide/other/可用车机" },
          { text: "实时服务", link: "/guide/nio_service" },
          { text: "功能介绍", link: "/guide/function" },
          { text: "主题制作", link: "/guide/theme_make" },
          { text: "设置说明", link: "/guide/set_info" },
          { text: "常见问题", link: "/guide/help" }
        ]
      }
    ],
    // 搜索设置
    search: true,
    sidebarDepth: 2,
    searchMaxSuggestions: 10,
    sidebar: "auto",
    // 最后更新时间
    lastUpdated: "更新时间",
    // 作者
    author: "肥皂泡上尉"
  }
};
