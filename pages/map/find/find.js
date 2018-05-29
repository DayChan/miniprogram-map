var app = getApp();
Page({
  data: {
    list: [],
    latitude: 0,
    longitude: 0,
    scrollTop: 0,
    size: 0,
    onLine: true,
    noAuth: false,
    yesAuth: true
  },

  onTap1: function () {
    wx.navigateTo({
      url: 'detail/toilet',
    });
  },
  onTap2: function () {
    wx.navigateTo({
      url: 'detail/store',
    });
  },
  onTap3: function () {
    wx.makePhoneCall({
      phoneNumber: '83202241'
    })
  },
})
