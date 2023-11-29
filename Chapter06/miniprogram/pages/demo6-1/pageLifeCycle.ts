// pages/demo6-1/pageLifeCycle.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {                //列表传值
    console.log(options.title)  //为空，输出undefined
    if(options.title!=null){
      wx.showToast({
        title:options.name+options.title
      })
    }

    console.log("---pageLifeCycle页面onLoad---")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("---pageLifeCycle页面onReady---")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("---pageLifeCycle页面onShow---")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("---pageLifeCycle页面onHide---")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("---pageLifeCycle页面onUnload---")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})