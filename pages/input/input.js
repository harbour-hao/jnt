var app = getApp()
Page({
   data: {
     phone: '请输入学号',
     password: '请输入密码',
     idcard:'请输入身份证号码(四六级)',
     room:'请输入宿舍号',
     name:'请输入姓名'
   },
   onLoad:function(opction)
   {
     var that=this;
     wx.getStorage({
       key: 'userInfo',
       success: function (res) {        
         that.setData({
           phone:res.data.phone,password:res.data.password,idcard:res.data.idcard,room:res.data.room,name:res.data.name
         })
       }
     });
    //  wx.navigateBack({
    //    delta: 1
    //  })
   },
   
  // 获取输入账号 
   phoneInput: function (e) {
     this.setData({
        phone: e.detail.value
     })
   },
   nameInput:function(e)
   {
     this.setData({
       name: e.detail.value
     })
     //console.log('name=' + this.data.name);
   },
  // 获取输入密码 
   passwordInput: function (e) {
     this.setData({
        password: e.detail.value
     })
   },
   idcardInput: function (e) {
     this.setData({
       idcard: e.detail.value
     })
   },
   roomInput: function (e) {
     this.setData({
       room: e.detail.value
     })
   },

  // 登录 
   login: function () {
     if (this.data.phone.length == 0 || this.data.password.length == 0) {
        wx.showToast({
          title: '用户名和密码不能为空',
          icon: 'loading',
          duration: 2000
        })
    } else {
       // 这里修改成跳转的页面 
         wx.showToast({
         title: '修改成功',
          icon: 'success',
          duration: 2000
         });
      //console.log('name='+this.data.name+"phone"+this.data.phone);
      wx.setStorage({
        key: 'userInfo',
        data: {phone:this.data.phone,password:this.data.password,idcard:this.data.idcard,room:this.data.room,name:this.data.name},
      })
     }
   },
  onUnload:function()
  {
    wx.redirectTo({
      url: '../index/index',
    })
  }
})