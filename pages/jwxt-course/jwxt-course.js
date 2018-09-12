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
    wx.request({
      url: 'https://jwxt.jnu.edu.cn/Login.aspx',
      header:{
        'content-type': 'application/json' 
      },
      data:{
      },
      success(res)
      {
        console.log(res.data);
        var cookie = res.header["Set-Cookie"];
        console.log(cookie);
        // wx.request({
        //   url: 'https://jwxt.jnu.edu.cn/Login.aspx',
         
        //   method: 'POST',
        //   dataType: 'json',
        //   data: {
        //     '__VIEWSTATE': ' /wEPDwUKMjA1ODgwODUwMg9kFgJmD2QWAgIBDw8WAh4EVGV4dAUk5pqo5Y2X5aSn5a2m57u85ZCI5pWZ5Yqh566h55CG57O757ufZGRkQHzthBmMTOkUl+ppvHZCGZFIgkY=',
        //     '__VIEWSTATEGENERATOR': 'C2EE9ABB',
        //     '__EVENTVALIDATION': '/wEWBwKa9aHcDAKDnbD2DALVp9zJDAKi+6bHDgKC3IeGDAKt86PwBQLv3aq9BwKtfLsN0olpYtRu4kxVBpo9Oquj',
        //     'txtYHBS':'2016052374',
        //     'txtYHMM':'h19980401',
        //     'btnLogin':'登    录',
        //     'btnFogetPswd':'忘记密码',
        //     'btnGetMyPswd':'新生获取密码'
        //   },
        //   header: {
        //     'Content-Type': 'application/x-www-form-urlencoded', // 默认值
        //     'Cookie':'ASP.NET_SessionId=jnkw0lb1vna5sxnrnx23nf2u'
        //   },
        //   success(res)
        //   {
        //     console.log(res.data);
        //   }
        // }      )
      }
      
    })
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