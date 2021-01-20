const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { merge } = require('webpack-merge');

module.exports = (config, options, targetOptions) => {
  const mfConfig = {
    output: {
        uniqueName: "dashboard"
    },
    optimization: {
      // Only need to bypass a temporary bug
      // Taken from https://github.com/manfredsteyer/webpack_5_module_federation_and_angular_cli/blob/main/projects/mfe1/webpack.extra.js
      runtimeChunk: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'dashboard',
        filename: 'remoteEntry.js',
        exposes: {
          './Dashboard': './src/app/app.module.ts'
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