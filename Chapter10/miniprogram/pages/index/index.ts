// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    items: [{
      text: '视图容器组件--view编码测试',
      path: '/pages/demo10-1/view'
      },
      {
        text: '视图容器组件--scroll-view编码测试',
        path: '/pages/demo10-2/scroll-view'
      },
      {
        text: '基础内容组件--text编码测试',
        path: '/pages/demo10-3/text'
      },
      {
        text: '基础内容组件--progress编码测试',
        path: '/pages/demo10-4/progress'
      }
      ,
      {
        text: '表单组件--button编码测试',
        path: '/pages/demo10-5/buttons'
      },
      {
        text: '表单组件--input编码测试',
        path: '/pages/demo10-6/input'
      },
      {
        text: '表单组件--textarea编码测试',
        path: '/pages/demo10-7/textarea'
      },
      {
        text: '表单组件--radio编码测试',
        path: '/pages/demo10-8/radio'
      },
      {
        text: '表单组件--checkbox编码测试',
        path: '/pages/demo10-9/checkbox'
      },
      {
        text: '表单组件--label编码测试',
        path: '/pages/demo10-10/label'
      },
      {
        text: '表单组件--picker编码测试',
        path: '/pages/demo10-11/picker'
      },
      {
        text: '表单组件--slider编码测试',
        path: '/pages/demo10-12/slider'
      },
      {
        text: '表单组件--switch编码测试',
        path: '/pages/demo10-13/switch'
      },
      {
        text: '表单提交form编码测试案例--用户注册',
        path: '/pages/demo10-14/form'
      },
      {
        text: '多媒体组件--audio编码测试',
        path: '/pages/demo10-15/audio'
      },
      {
        text: '多媒体组件--video编码测试',
        path: '/pages/demo10-16/video'
      },
      {
        text: '多媒体组件--image编码测试',
        path: '/pages/demo10-17/image'
      },
      {
        text: '多媒体组件--camera编码测试',
        path: '/pages/demo10-18/camera'
      },
      {
        text: '地图组件--map组件测试案例',
        path: '/pages/demo10-19/map1'
      },
      {
        text: '地图组件--地图API测试案例',
        path: '/pages/demo10-20/map2'
      }
    ]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
