module.exports = {
  title: "嘟嘟车机桌面",
  description: "嘟嘟桌面,免费的车机桌面",
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
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "鸣谢", link: "/views/other/鸣谢" },
      {
        text: "可用车机",
        link: "/views/other/可用车机"
      }
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类" // 默认 “分类”
      }
    },
    logo: "/head.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: "auto",
    // 最后更新时间
    lastUpdated: "更新时间",
    // 作者
    author: "肥皂泡上尉",
    record: "鲁ICP备19061432号",
    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: "PAOufgEXN2WaCpE0tgjw6oLq-gzGzoHsz", // your appId
      appKey: "PSP8brTAFya23o3jcA3Bmruq" // your appKey
    }
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    "@vuepress/pwa",
    {
      serviceWorker: true,
      popupComponent: "SWUpdatePopup",
      updatePopup: true
    }
  ]
};
