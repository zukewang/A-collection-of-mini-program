// app.ts
App({
  globalData: {userName:""},
  testApp(){
    this.globalData.userName="遥遥领先"
  },
  onLaunch() {
    console.log("---小程序onLaunch---")
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },

  onShow:function(){
    console.log("---小程序onShow---")
  },

  onHide:function(){
    console.log("---小程序onHide---")
  }
})