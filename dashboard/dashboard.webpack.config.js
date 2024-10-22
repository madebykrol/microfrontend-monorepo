const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { merge } = require('webpack-merge');

module.exports = (config, options, targetOptions) => {
  const mfConfig = {
    output: {
        uniqueName: "dashboard"
    },
    optimization: {
      runtimeChunk: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'dashboard',
        filename: 'remoteEntry.js',
        exposes: {
          './Dashboard': './src/app/dashboard/dashboard.module.ts'
        },
        shared: {
          '@angular/core': {
            eager: true,
          },
          '@angular/common': {
            eager: true,
          },
          '@angular/router': {
            eager: true,
          }
        }
      }),
    ],
  };

  return merge(config, mfConfig);
};