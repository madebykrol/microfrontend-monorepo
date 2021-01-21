const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { merge } = require('webpack-merge');

module.exports = (config, options, targetOptions) => {
  const mfConfig = {
    output: {
        uniqueName: "catalog"
    },
    optimization: {
      runtimeChunk: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'catalog',
        filename: 'remoteEntry.js',
        exposes: {
          './Catalog': './src/app/catalog/catalog.module.ts'
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