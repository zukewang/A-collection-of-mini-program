// pages/demo10-7/textarea.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onInput(e:any) {
    this.setData({
      inputValue1: e.detail.value
    })
  },
  onFocus(e:any) {
    console.log(e)
    this.setData({
      inputValue2: e.detail.value,
      keyBoardHeight: e.detail.height
    })
  },
  onConfirm(e:any) {
    console.log(e)
    this.setData({
      inputValue3: e.detail.value,
    })
  },
  onBlur(e:any) {
    console.log(e)
    this.setData({
      inputValue4: e.detail.value,
    })
  },
  replaceInput(e:any) {
    const value = e.detail.value
    let pos = e.detail.cursor
    let left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
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