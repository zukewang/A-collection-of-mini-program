// pages/demo10-19/map1.js
Page({
  data: {
    latitude: 39.903740,
    longitude: 116.397827,
    markers: [{
      id: '1',
      latitude: 39.903740,
      longitude: 116.397827,
      iconPath: '../../images/location.png',
      height: 50,
      width: 50,
    }],
    polygons: [{
      points: [
        { latitude: 39.903740, longitude: 116.397827, },
        { latitude: 39.917940, longitude: 116.397140, },
        { latitude: 39.917940, longitude: 116.367140, },
      ],
      strokeWidth: 3,
      strokeColor: '#000000AA' ,
      fillColor:'#ffff00AA'
    }],
    subKey: 'B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7',//个性化地图所使用的的Key
    showCompass: false,
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    drawPolygon: false,
    enableSatellite: false,
    enableTraffic: false
  },
  regionChange: function (e) {
    console.log('regionChange被触发，视野发生变化。');
  },
  toggleShowCompass() {
    this.setData({
      showCompass: !this.data.showCompass
    })
  },
  toggleOverlooking() {
    this.setData({
      enableOverlooking: !this.data.enableOverlooking
    })
  },
  toggleZoom() {
    this.setData({
      enableZoom: !this.data.enableZoom
    })
  },
  toggleScroll() {
    this.setData({
      enableScroll: !this.data.enableScroll
    })
  },
  toggleRotate() {
    this.setData({
      enableRotate: !this.data.enableRotate
    })
  },
  togglePolygon() {
    this.setData({
      drawPolygon: !this.data.drawPolygon
    })
  },
  toggleSatellite() {
    this.setData({
      enableSatellite: !this.data.enableSatellite
    })
  },
  toggleTraffic() {
    this.setData({
      enableTraffic: !this.data.enableTraffic
    })
  }
})