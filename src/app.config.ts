export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/task-list/index',
    'pages/gift-list/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        iconPath: './images/home.png',
        selectedIconPath: './images/home_on.png',
        pagePath:'pages/index/index',
        text: ''
      },
      {
        iconPath: './images/gift.png',
        selectedIconPath: 'images/gift_on.png',
        pagePath:'pages/gift-list/index',
        text: ''
      }
    ],
    color: '#abaaba',
    selectedColor: '#f8d57e',
    backgroundColor: '#fff',
    borderStyle: 'white'
  }
})
