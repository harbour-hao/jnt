const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var WxParse = require('../wxParse/wxParse.js');
    var that = this;
    var id = '';
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        id = res.data.phone;
        console.log("id=" + id);
         if (id !=''&&id.length==10 ) {
          wx.request({
            url: 'https://tzcs.jnu.edu.cn/spQuery',
            data: {
              method: 'healthscore',
              schoolid: '100001',
              stuNo: id
            },
            dataType: 'json',
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(res) {
             // var that = this;
              var article = res.data;
              article = article.replace(/<(script)[\S\s]*?\/\1>/gi, '');
              article = article.replace(/<!DOCTYPE html>/, '');
              article = article.replace(/体测查询/, '');
              article = article.replace(/返回首页/, '');
              article = article.replace(/历年查询/, '');
              WxParse.wxParse('article', 'html', article, that, 5);
            },
          })
        }
        else {
          wx.showToast({
            title: '姓名或身份证错误',
            icon: 'none',
            duration: 4000
          })

          wx.redirectTo({
            url: '../input/input',
            success: function () {
              wx.showToast({
                title: '学号错误',
                icon: 'none',
                duration: 2000
              })
            }
          });

        }
      }
    })
  }
    ,

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