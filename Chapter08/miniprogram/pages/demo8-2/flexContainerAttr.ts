// pages/demo8-2/flexContainerAttr.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentValue1: 'row',
    flexDirectionValue: ['row', 'row-reverse', 'column', 'column-reverse'],
    currentValue2: 'flex-start',
    justifyContentValue: ['flex-start','center','flex-end','space-between','space-around','space-evenly'],
    currentValue3: 'stretch',
    alignItemsValue: ['stretch','flex-start','center','flex-end','baseline'],
    currentValue4: 'nowrap',
    flexWrapValue: ['nowrap','wrap','wrap-reverse'],
    currentValue5:'stretch',
    alignContentValue: ['stretch','flex-start','center','flex-end','space-between','space-around','space-evenly']
  },
  changeValue1(e:any) {
    var index = e.currentTarget.dataset.valueindex
    var tempValue = this.data.flexDirectionValue[index]
    this.setData({
      currentValue1: tempValue
    })
  },
  changeValue2(e:any) {
    var index = e.currentTarget.dataset.index
    var tempValue = this.data.justifyContentValue[index]
    this.setData({
      currentValue2: tempValue
    })
  },
  changeValue3(e:any) {
    var index = e.currentTarget.dataset.index
    var tempValue = this.data.alignItemsValue[index]
    this.setData({
      currentValue3: tempValue
    })
  },
  changeValue4(e:any) {
    var index = e.currentTarget.dataset.index
    var tempValue = this.data.flexWrapValue[index]
    this.setData({
      currentValue4: tempValue
    })
  },
  changeValue5(e:any) {
    var index = e.currentTarget.dataset.index
    var tempValue = this.data.alignContentValue[index]
    this.setData({
      currentValue5: tempValue
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