// pages/demo2-10/kehouzuoye.ts
Page({

  /**
   * 页面的初始数据
   */
  data:  {
    arr:[1,2,3,4,5,6,7,8,9],
    arr1:[9,8,7,6,5,4,3,2,1],
    color:"greenyellow",
    content:"按钮初始内容",
    btnText:"切换背景色按钮"
    },
    btnClick:function(){
      console.log("button is clicked")
      this.setData({
        content:"这是更新后的内容...",
        color:"blue"
      })
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