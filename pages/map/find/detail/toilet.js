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
          latitude: 30.675798,
          longitude: 104.100298,
          markers: [{
            id: 1,
            latitude: 30.674034,
            longitude: 104.102779,
            width: 40,
            height: 40,
            iconPath: "/img/toilet.png",
            title:"第一教学楼厕所"
          },
          {
            id: 2,
            latitude: 30.674527,
            longitude: 104.102736,
            width: 40,
            height: 40,
            iconPath: "/img/toilet.png",
            title: "第二教学楼厕所"
          },{
            id: 3,
            latitude: 30.675861,
            longitude: 104.10309,
            width: 40,
            height: 40,
            iconPath: "/img/toilet.png",
            title: "第三教学楼厕所"
          },
          {
            id: 4,
            latitude: 30.675233,
            longitude: 104.103112,
            width: 40,
            height: 40,
            iconPath: "/img/toilet.png",
            title: "逸夫楼厕所"
          },
          {
            id: 5,
            latitude: 30.673847,
            longitude: 104.100432,
            width: 40,
            height: 40,
            iconPath: "/img/toilet.png",
            title: "主楼厕所"
          },
          {
            id: 6,
            latitude: 30.673970,
            longitude: 104.101200,
            width: 40,
            height: 40,
            iconPath: "/img/toilet.png",
            title: "主楼厕所"
          },
          {
            id: 7,
            latitude: 30.674262,
            longitude: 104.101794,
            width: 40,
            height: 40,
            iconPath: "/img/toilet.png",
            title: "主楼厕所"
          },
          {
            id: 8,
            latitude: 30.675051,
            longitude: 104.100180,
            width: 40,
            height: 40,
            iconPath: "/img/toilet.png",
            title: "微电子与固体电子楼厕所"
          },
          {
            id: 9,
            latitude: 30.675660,
            longitude: 104.102218,
            width: 40,
            height: 40,
            iconPath: "/img/toilet.png",
            title: "物理学院楼厕所"
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
        if(e.markerId == 1){
          wx.navigateTo({
            url: '../../polyline?latitude=30.674034&longitude=104.102779',
          })
        }
        else if(e.markerId == 2){
          wx.navigateTo({
            url: '../../polyline?latitude=30.674527&longitude=104.102736',
          })
        }
        else if (e.markerId == 3) {
          wx.navigateTo({
            url: '../../polyline?latitude=30.675861&longitude=104.10309',
          })
        }
        else if (e.markerId == 4) {
          wx.navigateTo({
            url: '../../polyline?latitude=30.675233&longitude=104.103112',
          })
        }
        else if (e.markerId == 5) {
          wx.navigateTo({
            url: '../../polyline?latitude=30.673847&longitude=104.100432',
          })
        }
        else if (e.markerId == 6) {
          wx.navigateTo({
            url: '../../polyline?latitude=30.673970&longitude=104.101200',
          })
        }
        else if (e.markerId == 7) {
          wx.navigateTo({
            url: '../../polyline?latitude=30.674262&longitude=104.101794',
          })
        }
        else if (e.markerId == 8) {
          wx.navigateTo({
            url: '../../polyline?latitude=30.675051&longitude=104.100180',
          })
        }
        else if (e.markerId == 9) {
          wx.navigateTo({
            url: '../../polyline?latitude=30.6756607&longitude=104.100432',
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

})