module.exports = {
  env: {
    browser: true,
    es2024: true,
    jest: true
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['standard-with-typescript', 'eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.md', '.css'],
  },
  plugins: ['react', 'react-hooks'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    semi: 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowedNames: [
          'Button',
          'FloatButton',
          'Icon',
          'Typography',
          'Text',
          'Title',
          'Link',
          'Paragraph',
          'Rate',
          'Form',
          'TreeSelect',
          'Select',
          'Mentions',
          'Radio',
          'ColorPicker',
          'Slider',
          'Cascader',
          'DatePicker',
          'Checkbox',
          'Input',
          'InputNumber',
          'Switch',
          'Upload',
          'AutoComplete',
          'TimePicker',
          'Transfer',
          'Collapse',
          'Timeline',
          'Calendar',
          'Segmented',
          'Tabs',
          'Tag',
          'Tour',
          'Carousel',
          'Tooltip',
          'Statistic',
          'Tree',
          'Image',
          'QRCode',
          'Badge',
          'Card',
          'Avatar',
          'Descriptions',
          'Table',
          'Empty',
          'Popover',
          'List',
          'Progress',
          'Result',
          'Spin',
          'Skeleton',
          'Watermark',
          'Popconfirm',
          'Drawer',
          'Modal',
          'Notification',
          'Alert',
          'Message',
          'LoadingModal',
          'Flex',
          'Center',
          'Space',
          'Layout',
          'Grid',
          'Divider',
          'Steps',
          'Anchor',
          'Dropdown',
          'Breadcrumb',
          'Pagination',
          'Menu',
          'ConfigProvider',
          'Affix',
          'App',
          'GlobalNavigation',
          'SuiteLogo',
          'NavigationSearch',
          'NavigationCreate',
          'NavigationIcon',
          'NavigationList',
          'WorkspaceSelector',
          'WorkspaceNoResults',
          'WorkspaceSignout',
        ],
      },
    ],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { allowNamedExports: true, functions: false }],
    "@typescript-eslint/promise-function-async": "warn",
    'react/react-in-jsx-scope': 'off',
    'import/no-duplicates': 'off',
    'react/jsx-boolean-value': 'warn'
  },
  globals: {
    React: true,
    expect: true,
  },
}