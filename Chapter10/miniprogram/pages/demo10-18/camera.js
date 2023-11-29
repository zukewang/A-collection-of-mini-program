// pages/demo10-18/camera.js
Page({
  onReady: function () {
    //利用createCameraContext获得CameraContext对象并赋值给页面的ctx
    this.ctx = wx.createCameraContext()
  },
  /** 拍照 */
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({ src: res.tempImagePath })
      }
    })
  },
  /** 开始录像 */
  startRecord() {
    wx.showToast({
      title: '正在录像，点击停止结束录像...',
      icon: 'none',
      duration: 5000
    })
    var that = this;
    this.ctx.startRecord({
      timeoutCallback() { that.ctx.stopRecord() },
      success: (res) => { console.log(res) },
      fail: (res) => { console.log(res) }
    })
  },
  /** 停止录像 */
  stopRecord() {
    this.ctx.stopRecord({
      success: (res) => {
        console.log(res)
        this.setData({ videoSrc: res.tempVideoPath })
      },
      fail: (res) => { console.log(res) }
    })
  },
})