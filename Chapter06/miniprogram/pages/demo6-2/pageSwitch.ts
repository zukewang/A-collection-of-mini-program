// pages/demo6-2/pageSwitch.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  navagateToPage1(){
    wx.navigateTo({
      url:'../demo6-1/pageLifeCycle?id=1&title=ceshi&name=神州十七号'
    })
  },
  navagateToPage11(){
    wx.navigateTo({
      url:'./page1/page1'
    })
  },
  redirectToPage2(){
     wx.redirectTo({
       url:'./page1/page1'
     })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log("---pageSwitch页面onLoad---")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("---pageSwitch页面onReady---")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("---pageSwitch页面onShow---")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("---pageSwitch页面onHide---")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("---pageSwitch页面onUnload---")
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