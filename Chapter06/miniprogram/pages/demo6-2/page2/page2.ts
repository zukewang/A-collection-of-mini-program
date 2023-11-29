// pages/demo6-2/page2/page2.ts   tablebar不会重走一次生命周期，所以尽量不要传参
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log("---page2页面onLoad---")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("---page2页面onReady---")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("---page2页面onShow---")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("---page2页面onHide---")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("---page2页面onUnload---")
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