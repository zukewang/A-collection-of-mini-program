// pages/demo10-9/checkbox.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxItems: [{ chooseitem: 'A.采用非递归方式重写递归程序时必须使用栈 ', value: 'A' },
    { chooseitem: 'B.函数调用时，系统要用栈保存必要的信息 ', value: 'B' },
    { chooseitem: 'C.只要确定了入栈次序，即可确定出栈次序   ', value: 'C' },
    { chooseitem: 'D.栈是一种受限的线性表，允许在其两端进行操作', value: 'D' },]
  },

  checkboxChange: function (e:any) {
    console.log('监听checkbox多选框组件变化，当前选中的值是：' + e.detail.value)
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