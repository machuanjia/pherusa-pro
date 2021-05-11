/*
 * @Author: D.Y
 * @Date: 2021-05-08 14:27:34
 * @LastEditTime: 2021-05-08 14:44:06
 * @LastEditors: D.Y
 * @FilePath: /pherusa-pro/.umirc.ts
 * @Description:
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'pherusa-pro',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'pherusa-ui',
        style: 'css',
      },
    ],
  ],
});
