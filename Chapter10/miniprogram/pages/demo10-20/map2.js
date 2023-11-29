// pages/demo10-20/map2.js
var latitude = 0;
var longitude = 0;
Page({
  onReady: function() {
    this.mapCtx = wx.createMapContext('myMap') //通过wx.createMapContext获取MapContext实例
  },
  getCenterLocation: function() { //"获取当前地图中心的经纬度并打开
    var that = this
    this.mapCtx.getCenterLocation({
      success: function(res) {
        console.log(res)
        const latitude = res.latitude
        const longitude = res.longitude
        that.setData({
          markers: [{ id: 1, iconPath: '../../images/center.png', latitude: latitude,
            longitude: longitude, height: 50, width: 50, }],
        })
        // wx.openLocation({//可利用openLocation使用微信内置地图查看位置
        //   latitude,
        //   longitude,
        //   scale: 18
        // })
      }
    })
  },
  moveToLocation: function() { //移动到用户当前所在的位置
    this.mapCtx.moveToLocation()
  },
  translateMarker: function() { //移动maker标注至中心点
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        // console.log(latitude,longitude)
        that.mapCtx.translateMarker({
          markerId: 1,
          autoRotate: true,
          duration: 2000,
          rotate: 0,
          destination: {
            latitude: latitude,
            longitude: longitude,
          },
          success(res) { console.log(res) },
          fail(res) { console.log(res) },
          animationEnd() { console.log('animation end') }
        })
      }
    })
  },
  includePoints: function() { //缩放视野展示所有经纬度
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 25.81931,
        longitude: 113.3345211,
      }, {
          latitude: 25.817735,
        longitude: 114.922362,
      }]
    })
  }
})