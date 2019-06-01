Page({
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {
    return {
      title: '小程序官方组件展示',
      path: 'page/component/main'
    }
  },
  data: {
    flag: 0,
    current: {},
    audioAction: {
      method: 'pause',
      loop:true
    }, 
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {
      avatarUrl: "",//用户头像
      nickName: "",//用户昵称
    },
    lovetime: "2011/06/02",
    lovedays: '',
    showLoveTime: {
      year: '',
      mouth: '',
      day: '',
      hours: '',
      min: '',
      sec: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    console.log(this.data.canIUse)
    this.getDaysFun()
    this.getMusicFun()
    this.getUserInfo()
  },
  /**
   * 计算天数
   */
  getDaysFun(){
    var dateList = {}
    var time = Date.parse(new Date()) - Date.parse(new Date(this.data.lovetime))
    console.log(time)
    //计算出相差年数
    var year = Math.floor(time / (365 * 24 * 3600 * 1000))
    dateList.year = year
    //计算出相差月数
    var leave1 = time % (365 * 24 * 3600 * 1000)
    dateList.mouth = Math.floor(leave1 / (30 * 24 * 3600 * 1000))
    //计算出相差天数
    var leave2 = time % (30 * 24 * 3600 * 1000)
    dateList.day = Math.floor(leave2 / (24 * 3600 * 1000))
    //计算出小时数
    var leave3 = time % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
    dateList.hours = Math.floor(leave3 / (3600 * 1000))
    //计算相差分钟数
    var leave4 = time % (3600 * 1000)        //计算小时数后剩余的毫秒数
    dateList.minutes = Math.floor(leave4 / (60 * 1000))
    console.log(dateList)
    this.setData({
      lovedays: Math.floor(time / (24 * 3600 * 1000))
    })
  },
  /**
   * 获取Music信息
   */
  getMusicFun () {
    //获取用户头像
    var that = this;
    //获取背景音乐
    // wx.cloud.init()
    const db = wx.cloud.database({
      env: 'sonnenblume-cloud-nc1db'
    })
    const BGMusicList = db.collection('music')
    BGMusicList.get().then(res => {
      if (res && res.data.length > 0) {
        this.currentListBgm = res.data[0].musicList
        this.currentListLm = res.data[0].loveMList
        const msList = res.data[0].musicList
        if (msList.length > 0) {
          //列表随机因子
          // const leg = msList.length
          // const rnum = parseInt(leg * Math.random())
          var current = this.data.current
          current = msList[0]
          that.setData({
            current
          })
        }
      }
    })
      .catch(err => {
        console.log(err)
      })
  },
  /**
   * 获取用户信息
   */
  getUserInfo() {
    console.clear()
    //获取用户头像
    var that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              var userInfo = {}
              userInfo.avatarUrl = res.userInfo.avatarUrl,
              userInfo.nickName = res.userInfo.nickName,
              that.setData({
                userInfo,
                canIUse: false
              })
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo={}
        userInfo.avatarUrl = res.userInfo.avatarUrl,
        userInfo.nickName = res.userInfo.nickName,
        that.setData({
          userInfo,
          canIUse:false
        })
      }
    })
  },
  kindToggle (e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    console.log('onReady...')

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('onShow...')
    var that = this
    wx.reportAnalytics('enter_home_programmatically', {})
    setTimeout(function () {
      that.setData({
        audioAction: {
          method: 'play'
        }
      }) }, 1000);
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    var that = this
    setTimeout(function () {
      that.setData({
        audioAction: {
          method: 'pause'
        }
      })
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload...')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh...')

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom...')

  },
  onPageScroll: function () {
    // Do something when page scroll
    console.log('onPageScroll...')
  },
  onResize: function () {
    // Do something when page resize
    console.log('onResize...')
  },
  onTabItemTap (item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  },

  openlovepage () {
    this.setData({
      audioAction: {
        method: 'pause'
      }
    })
    wx.navigateTo({
      url: "module/showTime/showTime"
    })
    return
  },
  //切换上下曲
  changeNusic (event) {
    var falg = event.currentTarget.dataset.falg;
    if (falg == '0') {
      var rnum = this.data.flag + 1 == this.currentListBgm.length - 1 ? 0 : this.data.flag + 1
    } else {
      var rnum = this.data.flag == 0 ? this.currentListBgm.length - 1 : this.data.flag - 1
    }
    this.setData({
      flag: rnum
    })
    this.setData({
      audioAction: {
        method: 'pause'
      }
    })
    //获取data数据
    var currentdata = this.data.current
    currentdata = this.currentListBgm[rnum]
    //设置data数据
    this.setData({
      current: currentdata
    })
    this.setData({
      audioAction: {
        method: 'play'
      }
    })
  }
})
