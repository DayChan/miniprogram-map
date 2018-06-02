Page({
  data: {},
  onTap1: function () {
    wx.navigateTo({
      url: 'detail/toilet',
    })
  },
  onTap2: function () {
    wx.navigateTo({
      url: 'detail/store',
    })
  },
  onTap3: function () {
    wx.makePhoneCall({
      phoneNumber: '83202241',
    })
  },
  onTap4: function () {
    wx.navigateTo({
      url: 'detail/sbus',
    })
  }
});
