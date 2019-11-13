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
      {
        text: "历史版本",
        icon: "reco-date",
        items: [
          {
            text: "嘟嘟桌面",
            link: "/views/other/updates"
          },
          {
            text: "DC音乐",
            link: "/views/other/updates_dc"
          },
          {
            text: "嘟嘟音乐",
            link: "/views/other/updates_music"
          },
          {
            text: "嘟嘟桌面mini版",
            link: "/views/other/updates_mini"
          }
        ]
      },
      {
        text: "主题制作",
        items: [
          {
            text: "开发工具制作主题",
            link: "/views/themeMake/主题制作dev"
          },
          {
            text: "反编译工具制作主题",
            link: "/views/themeMake/主题制作反编译"
          },
          {
            text: "参数配置",
            link: "/views/themeMake/主题配置参数"
          }
        ]
      },
      { text: "捐送名单", link: "/views/other/捐送名单" }
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
    author: "Soap",
    // 项目开始时间
    startYear: "2017",
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
  plugins: ["@vuepress/pwa", "@vuepress/medium-zoom", "flowchart"]
};
