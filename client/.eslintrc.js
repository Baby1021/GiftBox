module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "taro/react",
  ],
  settings: {
    "import/resolver": {
      typescript: {
        // 使用
        "project": [
          "./tsconfig.json"
        ],
      }
    }
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-uses-react": "off", // 屏蔽"React" is defined but never used错误
    "react/react-in-jsx-scope": "off", // "React" 必须在作用域中

    // 没有使用的变量
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error"
    ],

    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off", // 函数需要写返回值
    "@typescript-eslint/no-explicit-any": 2, // 不能写any

    "import/extensions": 'error',
    "import/no-unresolved": 'error',

    "react/prop-types": [2, { ignore: ['children'] }], // React的props的类型检查，忽略children属性
    "react/jsx-indent-props": 0
  }
}