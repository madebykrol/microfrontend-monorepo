const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { merge } = require('webpack-merge');

module.exports = (config, options, targetOptions) => {
  const mfConfig = {
    output: {
        uniqueName: "header"
    },
    optimization: {
      runtimeChunk: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'header',
        filename: 'remoteEntry.js',
        exposes: {
          './Header': './src/app/components/header/header.component.ts'
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