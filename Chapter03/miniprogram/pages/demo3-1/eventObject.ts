// pages/demo3-1/eventObject.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"初始内容",
    content1:"初始内容"
  },

  printEvent:function(e:any){
    console.log(e)
    var event=JSON.stringify(e)
    this.setData({content:event})

  },

  printEvent1:function(e:any){
    console.log(e)
    this.setData({content1:"王昱智"})

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