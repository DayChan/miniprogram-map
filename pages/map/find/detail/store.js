Page({
  data: {
    Height: 0,
    scale: 17,
    latitude: 30.674232,
    longitude: 104.096991,
    markers: [],
    circles: []
  },

  onLoad: function () {
    var _this = this;

    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          view: {
            Height: res.windowHeight
          }
        })
      }
    })

    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function () {

        _this.setData({
          latitude: 30.675688,
          longitude: 104.098930,
          markers: [{
            id: 1,
            latitude: 30.677178,
            longitude: 104.099718,
            width: 40,
            height: 40,
            iconPath: "/img/store.png",
            title: "校园超市（仅可使用校园卡结账）\n开放时间：8:45-22:45"
          },
          {
            id: 2,
            latitude: 30.676984,
            longitude: 104.099901,
            width: 40,
            height: 40,
            iconPath: "/img/store.png",
            title: "红旗超市\n开放时间：7:00-22:00"
          }, {
            id: 3,
            latitude: 30.676984,
            longitude: 104.101580,
            width: 40,
            height: 40,
            iconPath: "/img/store.png",
            title: "校园超市（仅可使用校园卡结账）\n开放时间：8:45-22:45"
          },
          {
            id: 4,
            latitude: 30.674484,
            longitude: 104.096752,
            width: 40,
            height: 40,
            iconPath: "/img/store.png",
            title: "校园超市（仅可使用校园卡结账）\n开放时间：8:45-22:45"          
          }],
        })
      }
    })

  },

  regionchange(e) {
    console.log("regionchange===" + e.type)
  },

  //点击merkers
  markertap(e) {
    console.log(e.markerId)

    wx.showActionSheet({
      itemList: ["去这里"],
      success: function (res) {
        console.log(res.tapIndex)
        if (e.markerId == 1) {
          wx.navigateTo({
            url: '../../polyline?latitude=30.677178&longitude=104.099718',
          })
        }
        else if (e.markerId == 2) {
          wx.navigateTo({
            url: '../../polyline?latitude=30.676984&longitude=104.099901',
          })
        }
        else if (e.markerId == 3) {
          wx.navigateTo({
            url: '../../polyline?latitude=30.676984&longitude=104.101580',
          })
        }
        else if (e.markerId == 4) {
          wx.navigateTo({
            url: '../../polyline?latitude=30.674484&longitude=104.096752',
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

})