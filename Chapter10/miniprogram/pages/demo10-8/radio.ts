// pages/demo10-8/radio.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioItems: [{ chooseitem: 'A.抽象数据类型', value: 'A' },
    { chooseitem: 'B.逻辑结构', value: 'B' },
    { chooseitem: 'C.存储结构', value: 'C' },
    { chooseitem: 'D.运算', value: 'D' },]
  },

  radioChange: function (e:any) {
    console.log('radio当前选中：' + e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

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