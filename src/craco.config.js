const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // '@primary-color': '#1DA57A'
              '@primary-color': '#30be10',
              '@font-size-base': '24px', // major text font size

              dark: true, // 开启暗黑模式
              // compact: true,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
