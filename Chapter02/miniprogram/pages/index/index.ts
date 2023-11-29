// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    motto: 'Hello World',
    items: [{
      id:1,
      text: '跳转到日志页',
      path: '/pages/logs/logs'
    },{
      id:2,
      text: '跳转到按钮实例',
      path: '/pages/demo2-1/button'
    },{
      id:3,
      text: '跳转到按钮实例',
      path: '/pages/demo2-2/button'
    },{
      id:4,
      text: '跳转到官网表单实例',
      path: '/pages/demo2-3/form'
    },{
      id:5,
      text: '跳转到文本框实例',
      path: '/pages/demo2-4/label'
    },{
      id:6,
      text: '跳转到文本域实例',
      path: '/pages/demo2-5/textarea'
    },{
      id:7,
      text: '跳转到数据渲染实例',
      path: '/pages/demo2-6/dataBind'
    },{
      id:8,
      text: '跳转到渲染标签实例',
      path: '/pages/demo2-7/renderLabel'
    },{
      id:9,
      text: '跳转到模板与引用实例',
      path: '/pages/demo2-8/template'
    },{
      id:10,
      text: '跳转到乘法口诀',
      path: '/pages/demo2-9/chengfakoujue'
    },{
      id:11,
      text: '第二次作业综合实例',
      path: '/pages/demo2-10/kehouzuoye'
    }

  ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
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
