import { join, resolve as _resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const isDevelopment = process.env.NODE_ENV !== 'production';

export const mode = isDevelopment ? 'development' : 'production';
export const entry = './src/index.tsx';
export const devtool = isDevelopment ? 'inline-source-map' : 'source-map';
export const devServer = {
  static: {
    directory: join(__dirname, 'dist'),
  },
  hot: true,
  open: true,
  port: 3000,
  historyApiFallback: true,
};
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.css$/i,
      use: [isDevelopment ? 'style-loader' : loader, 'css-loader'],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      type: 'asset/resource',
    },
  ],
};
export const resolve = {
  extensions: ['.tsx', '.ts', '.js'],
};
export const output = {
  filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
  path: _resolve(__dirname, 'dist'),
  publicPath: '/',
};
export const optimization = {
  minimize: !isDevelopment,
  minimizer: [
    new TerserPlugin({
      parallel: true,
    }),
    new CssMinimizerPlugin(),
  ],
  splitChunks: {
    chunks: 'all',
  },
};
export const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new Dotenv(),
  new ForkTsCheckerWebpackPlugin(),
  isDevelopment && new ReactRefreshWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
    chunkFilename: isDevelopment ? '[id].css' : '[id].[contenthash].css',
  }),
].filter(Boolean);
