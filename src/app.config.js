const pages = ['pages/index/index'];

module.exports.ali = {
  pages,
  window: {
    defaultTitle: 'Remax Ali Template',
    titleBarColor: '#282c34',
  },
};

module.exports.wechat = {
  plugins: {
    contactPlugin: {
      version: '1.3.1',
      provider: 'wx104a1a20c3f81ec2',
    },
    myPlugin: {
      version: "1.0.0",
      provider: "wx1c77c2ed7b1cc1cb"
    }
  },
  pages,
  window: {
    navigationBarTitleText: 'Remax Wechat Template',
    navigationBarBackgroundColor: '#282c34',
  },
};

module.exports.toutiao = {
  pages,
  window: {
    navigationBarTitleText: 'Remax Toutiao Template',
    navigationBarBackgroundColor: '#282c34',
  },
};

module.exports.web = {
  pages,
  title: 'Remax Web Template',
};
