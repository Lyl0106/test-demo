/*
 * @Description: 模块配置
 * @Author: liuyuluan
 * @Date: 2019-10-18 16:25:53
 * @LastEditors: liuyuluan
 * @LastEditTime: 2021-03-15 20:28:39
 */

const { override, fixBabelImports, addLessLoader ,addBabelPlugins } = require('customize-cra');

module.exports = override(
    ...addBabelPlugins( // 支持装饰器
        [
            '@babel/plugin-proposal-decorators',
            { legacy: true}
        ]
    ),
    addLessLoader({
        javascriptEnabled: true,
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
);
