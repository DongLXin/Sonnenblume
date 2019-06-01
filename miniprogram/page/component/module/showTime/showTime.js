// page/component/module/showTime/showTime.js
const info = wx.getSystemInfoSync()
Page({
  onShareAppMessage () {
    return {
      title: 'showTime',
      path: 'page/component/module/showTime/showTime'
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    platform: info.platform,
    list: [
      {
        time: '20080901',
        thing: '我们初次见面，但是当时还不认识',
        place: '东辽一高',
        title: 'I see you!'
      },
      {
        time: '20110602',
        thing: '我们正式在一起',
        place: '东辽一高',
        title: 'We are together!'
      }
    ]
  },
  onLoad () {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})