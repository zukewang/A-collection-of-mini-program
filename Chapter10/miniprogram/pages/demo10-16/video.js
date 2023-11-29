// pages/demo10-16/video.js
Page({
  onReady() {
    this.videoContext = wx.createVideoContext('myVideo2')
  },
  inputValue: '',
  data: {
    src: '',
    danmuList:
      [{ text: '第 1s 出现的弹幕', color: '#ff0000', time: 1 }, 
       { text: '第 3s 出现的弹幕', color: '#ff00ff', time: 3 }],
    videoSrc: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
      },
  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: '#ff0000'
    })
  },
  videoErrorCallback(e) {
    console.log('视频错误信息:',e.detail.errMsg)
  },
  setPlayBackRate() {
    console.log(this.videoContext)
    this.videoContext.playbackRate(2)
  }
})

