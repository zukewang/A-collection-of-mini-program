// pages/demo10-11/picker.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectorItems: ['美国', '中国', '德国'],
    multiSelectorItems: [['黑色', '肤色', '酒红', '墨绿'],
    ['36', '37', '38', '39'],
    ['加绒', '加厚', '聚热']]
  },
  selectorChange: function (e:any) {
    let arrayIndex = e.detail.value; //获得选项的数组下标 
    let value = this.data.selectorItems[arrayIndex]; //获得选项的值
    this.setData({
      selector: value
    }); //更新页面数据selector
  },
  multiSelectorChange: function (e:any) {
    let arrayIndex = e.detail.value;
    let array = this.data.multiSelectorItems;
    let value = new Array(); //声明一个空数组，用于存放最后选择的值
    for (let i = 0; i < arrayIndex.length; i++) {
      let j = arrayIndex[i]; //第i个数组的元素下标
      let k = array[i][j]; //获得第i个数组的元素值
      value.push(k); //往数组中追加元素
    }
    this.setData({
      multiSelector: value
    });
  },
  timeChange: function (e:any) {
    let value = e.detail.value; //获得选择的时间
    this.setData({
      time: value
    });
  },
  dateChange: function (e:any) {
    let value = e.detail.value; //获得选择的日期
    this.setData({
      date: value
    });
  },
  regionChange: function (e:any) {
    let value = e.detail.value;
    this.setData({
      region: value
    });
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