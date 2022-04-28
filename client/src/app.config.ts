export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/task-list/index',
    'pages/gift-list/index',
    'pages/mine/index',
    'pages/add-gift/index',
    'pages/cropper/index'
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
      },
      {
        iconPath: './images/task.png',
        selectedIconPath: 'images/task_on.png',
        pagePath:'pages/task-list/index',
        text: ''
      },
      {
        iconPath: './images/mine.png',
        selectedIconPath: 'images/mine_on.png',
        pagePath:'pages/mine/index',
        text: ''
      }
    ],
    color: '#abaaba',
    selectedColor: '#f8d57e',
    backgroundColor: '#fff',
    borderStyle: 'white'
  }
})
