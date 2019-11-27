//Import base
const webpack = require("webpack");
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const compose = require('next-compose');
require('dotenv').config();

const envAnalyzer = {
  enabled: process.env.ANALYZE === 'true'
};


module.exports = compose([
  [withImages],
  [withBundleAnalyzer, envAnalyzer],
  {
    webpack: (config) => {
      config.node = {
        fs: 'empty'
      };
      const env = Object.keys(process.env).reduce((acc, curr) => {
        acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
        return acc;
      }, {});
      config.plugins.push(new webpack.DefinePlugin(env));
      return config
    }
  }
])


