// pages/demo2-6/dataBind.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnText:"按钮文字",
    color:"red",
    content:"这是一段初始内容......",
    id:"testId",
    condition:true,
    result:true,
    a:2,
    b:3,
    c:4,
    d:5,
    length:2,
    name:"华为",
    msg:"遥遥领先",
    array:['Toky','Bob','Zuke','Jack'],
    object:{
        name:"Yahoo",
        gender:"man",
        age:"20"
    },
    x:"5"
  },
  btnClick:function(){
    console.log("按钮被点击")
    this.setData({
      content:"这是更新后的内容",
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