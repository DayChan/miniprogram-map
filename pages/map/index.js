//获取应用实例
var app = getApp();
Page({
  data: {
    fullscreen: false,
    latitude: 30.674232,
    longitude: 104.096991,
    buildlData: app.globalData.map,
    windowHeight: "",
    windowWidth: "",
    isSelectedBuild: 0,
    isSelectedBuildType: 0,
    controls: [],
    imgCDN: app.imgCDN,
    islocation: true,
    clickchar:"⇓",    //点击横栏的下和上
    num:0,
    lastlongitude: 104.096991
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        //获取当前设备宽度与高度，用于定位控键的位置
        _this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth,
        })
        _this.setControls(res.windowWidth, res.windowHeight / 2)
        console.log(res.windowWidth)
      }
    })
    //载入更新后的数据
    this.setData({
      buildlData: app.globalData.map
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: app.globalData.introduce.name + ' - 校园导览',
      path: '/pages/map/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  ifChangeRegion: function () {
    var that = this;
    var curLatitude = 0;
    var curLongitude = 0;
    this.mapCtx = wx.createMapContext("map1");
    this.mapCtx.getCenterLocation({
      success: function (res) {
        curLatitude = res.longitude;
        curLongitude = res.latitude;
      }
    })
    console.log("n:",curLongitude);
    if (curLongitude == this.lastlongitude) {
      this.setData({
        lastlongitude: curLongitude
      });
      return 1;
    } else {
      this.setData({
        lastlongitude: curLongitude
      });
      return 0;
    }
  },
  regionchange(e) {
    console.log(e.type)
    console.log(e)
    this.setData({
      num: this.data.num+1
    })
    console.log(this.data.num)
    /*if (!this.data.fullscreen) {
      if(e.type == "end"){
        this.setData({ fullscreen: !this.data.fullscreen })
        if (this.data.fullscreen) {
          this.setControls(this.data.windowWidth, this.data.windowHeight -54)
          this.setData({
            clickchar: "⇑"
          })
        } else {
          this.setControls(this.data.windowWidth, this.data.windowHeight / 2)
          this.setData({
            clickchar: "⇓"
          })
        } 
        //移动地图事件
     } 
      }*/
    if(e.type == "end"){
      if(!this.ifChangeRegion()){
        
        if (!this.data.fullscreen) {
          this.setData({ fullscreen: !this.data.fullscreen })
          this.setControls(this.data.windowWidth, this.data.windowHeight - 54)
          this.setData({
            clickchar: "⇑"
          })
        }
      }
    }
  },
  markertap(e) {
    // 选中其对应的框
    this.setData({
      isSelectedBuild: e.markerId
    })
    if (this.data.fullscreen) {
      this.setData({ fullscreen: !this.data.fullscreen })
      this.setControls(this.data.windowWidth, this.data.windowHeight / 2)
      this.setData({
        clickchar: "⇓"
      })
      //点击坐标点事件
    } 
    console.log("e.markerId", e.markerId)
  },
  controltap(e) {
    if (e.controlId == -1) {
      wx.navigateTo({
        url: 'search'
      })
    } else if (e.controlId == -2) {
      this.location()
    } else {
      console.log("e.controlId", e.controlId)
    }
  },
/*  location: function () {
    var _this = this
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标  
      success: function (res) {
        app.globalData.latitude = res.latitude;
        app.globalData.longitude = res.longitude;
        _this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
  },
  */
  clickButton: function (e) {
    //console.log(this.data.fullscreen)
    console.log(e)
    //打印所有关于点击对象的信息
    this.setData({ fullscreen: !this.data.fullscreen })
    if (this.data.fullscreen) {
      this.setControls(this.data.windowWidth, this.data.windowHeight - 54)
      this.setData({
        clickchar: "⇑"
      })
    } else {
      this.setControls(this.data.windowWidth, this.data.windowHeight / 2)
      this.setData({
        clickchar: "⇓"
      })
    } 
    //景观按钮点击事件
  },
  changePage: function (event) {
    this.setData({
      isSelectedBuildType: event.currentTarget.id,
      isSelectedBuild: 0
    });

  },
  // 修改搜索和定位的位置
  setControls: function (width, height) {
    this.setData({
      controls: [{
        id: -1,
        iconPath: '/img/search.png',
        position: {
          left: width - 50,
          top: height - 110,
          width: 40,
          height: 40
        },
        clickable: true //设置搜索按钮位置
      }, {
        id: -2,
        iconPath: '/img/location.png',
        position: {
          left: width - 50,
          top: height - 65,
          width: 40,
          height: 40
        },
        clickable: true //设置定位按钮位置
      }]
    })

  }
  
})