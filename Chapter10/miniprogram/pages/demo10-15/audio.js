// pages/demo10-15/audio.js
Page({
  data: {
    current: {
      poster: 'https://7368-shop-pxz7q-1300874018.tcb.qcloud.la/toky-private/poster.png?sign=1e08e639ba168918647e6b5d8ee84b98&t=1582597351',//为云存储空间链接
      name: '好想爱这个世界啊',
      author: '华晨宇',
      src: 'https://7368-shop-pxz7q-1300874018.tcb.qcloud.la/toky-private/haoxiangaizhegeshijiea-huachenyu.mp3?sign=f33e16f6c7f21ffe58a0e6dc764c4075&t=1582595398',//为云存储空间链接       
    } 
  },
  onLoad: function(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    //this.audioCtx = wx.createAudioContext('myAudio2')
    this.audioCtx = wx.createInnerAudioContext('myAudio3'); //测试第三个InnerAudio请打开此注释   
  },
  audioContextPlay: function() { 
    this.audioCtx.src = this.data.current.src 
    this.audioCtx.play()
  },
  audioContextPause: function() {
    this.audioCtx.pause()
  },
  audioContextStart: function() {
    this.audioCtx.seek(0)
  },

  // innerAudio对象的方法
  innerAudioPlay: function(options) {
    this.audioCtx.src = this.data.current.src 
    this.audioCtx.play()
  },
  innerAudioPause: function(options) {
    this.audioCtx.pause()
  },
  innerAudioStop: function(options) {
    this.audioCtx.stop() //只有innerAudio对象才有该方法
  },
  innerAudioSeek: function(options) {
    this.audioCtx.seek(5)
  },
  innerAudioDestroy: function(options) {
    this.audioCtx.destroy()
  }
})