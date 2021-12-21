// 配置
window.Config = {

  // 站点名
  SiteName: 'Uptime Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见说明
  ApiDomain: 'uptime-status.qikaile.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm790115571-b593143903ef665fcec0b858',//Webhorizon 新加坡
    'm790115275-bb466e6e7d7c52770b7f4dbf',//Vir圣何塞
    'm790115282-9e927d0e5c3a60ebf24b4dc7',//Vir水牛城
    'm790115279-b783391a01df04d6f6c2e826',//Vir西雅图
    'm782863226-cd42fbef7fa1e036307ab229',//One法国
    'm790113352-1c6b4109bd914c9a820dfe88',//AWS日本
    'm781209163-810fafc32b5a705d5c54dc47',//BWG日本
    'm781209163-810fafc32b5a705d5c54dc47',//HH香港
    'm782863238-198dcab55c8838864b66fb1c',//DMiT香港
    'm790113394-045bb7228eeafd702d12185d',//CMI香港
    'm790113387-6db8a9a689f0b43635cb6399',//绿云新加坡
    'm790115245-50c06fee7ab81d42a9be3de7',//DO新加坡
    'm790114718-16317deec25e177e1444254e',//Dedipath LA
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://tjys.now.sh/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/qikaile/uptime-status'
    }
  ]
};
