module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // 解决TS中的 module 引用问题
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
      },
    ],
    '@babel/plugin-transform-runtime',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    'transform-class-properties',
  ],
};
