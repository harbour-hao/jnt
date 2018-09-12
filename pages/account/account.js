// pages/account/account.js
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    user:'',
    room:''
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    var that=this;
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
         that.setData({user:res.data.phone,room:res.data.room})
      },
      fail: function(res) {
        that.setData({ user: '未绑定', room:'未绑定' })
      },
      
    })
  },
  onPullDownRefresh: function () {
    //console.log("refress success");
    wx.showToast({
      title: '刷新成功',
      icon: 'success',
      duration: 2000
    })
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.setData({
          phone: res.data.phone, password: res.data.password, idcard: res.data.idcard, room: res.data.room
        })
      }
    });
    wx.stopPullDownRefresh();

  },
  onShow() {
    this.getUserInfo();
    this.setData({
      version: app.globalData.version
    });
    //this.getUserApiInfo();
    //this.getUserAmount();
   // this.checkScoreSign();
  },
  getUserInfo: function (cb) {
    var that = this
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({
              userInfo: res.userInfo
            });
          }
        })
      }
    })
  },
  aboutUs: function () {
    wx.showModal({
      title: '关于我们',
      content: '傲娇的暨大小公主(•̀∀•́)，脑洞大开给你推送最有趣的内容，包揽暨大课表、成绩、校车、电费等多种查询！',
      showCancel: false,
      confirmText: '好滴!',
      confirmColor: '#027dc1'
    })
  },
 putin:function()
 {
   wx.navigateTo({
     url: '../input/input',
   })
 }
})