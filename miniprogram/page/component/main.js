Page({
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
      console.log('onShow...')
        wx.reportAnalytics('enter_home_programmatically', {})
    },
    /**
     * 用户点击右上角分享
     */
      onShareAppMessage() {
        return {
          title: '小程序官方组件展示',
          path: 'page/component/index1'
        }
    },
    data: {
      userInfo: {
        avatarUrl: "",//用户头像
        nickName: "",//用户昵称
      },
      list: [
        {
          id: 'view',
          name: '视图容器',
          open: false,
          pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view']
        }, {
          id: 'content',
          name: '基础内容',
          open: false,
          pages: ['text', 'icon', 'progress', 'rich-text']
        }, {
          id: 'form',
          name: '表单组件',
          open: false,
          pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea']
        }, {
          id: 'nav',
          name: '导航',
          open: false,
          pages: ['navigator']
        }, {
          id: 'media',
          name: '媒体组件',
          open: false,
          pages: ['image', 'audio', 'video', 'camera']
        }, {
          id: 'map',
          name: '地图',
          open: false,
          pages: ['map']
        }, {
          id: 'canvas',
          name: '画布',
          open: false,
          pages: ['canvas']
        }, {
          id: 'open',
          name: '开放能力',
          open: false,
          pages: ['ad', 'open-data', 'web-view']
        }
      ]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
      console.log('onLoad...')
      //获取数据
      // wx.cloud.init()
      // const db = wx.cloud.database({
      //   env: 'sonnenblume-cloud-nc1db'
      // })
      // const booktest = db.collection('booktest')
      // booktest.get().then(res => {
      //   console.log(res.data)
      // })
      // .catch(err => {
      //   console.log(err)
      // })
      //获取用户头像
      var that = this;
      /**
       * 获取用户信息
       */
      wx.getUserInfo({
        success: function (res) {
          var avatarUrl = 'userInfo.avatarUrl';
          var nickName = 'userInfo.nickName';
          that.setData({
            [avatarUrl]: res.userInfo.avatarUrl,
            [nickName]: res.userInfo.nickName,
          })
        }
      })
    },
    kindToggle(e) {
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
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
      console.log('onHide...')

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

    }
})
  