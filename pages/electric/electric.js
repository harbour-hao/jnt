const app = getApp()
var  util  =  require('../../utils/util.js');  
Page({


  /**
   * 页面的初始数据
   */
  data: {
    time:'',
    __VIEWSTATE:'',
    __VIEWSTATEGENERATOR:'',
    __EVENTVALIDATION:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var WxParse = require('../wxParse/wxParse.js');
    var that = this;
    var name='';var id='';
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
     name=res.data.name; id=res.data.idcard;
    console.log("id=" + id); console.log("name=" + name);
    if(id!=''&&name!=''&&id.length==18)
    {
    wx.request({
      url: 'https://cet.jnu.edu.cn/cet/cj_research.aspx',
      success(res)
      {
        var __VIEWSTATE ='';var __VIEWSTATEGENERATOR = '';var __EVENTVALIDATION='';
        var A__VIEWSTATE = new Array();
        var A__VIEWSTATEGENERATOR = new Array();
        var A__EVENTVALIDATION = new Array();
        var end=new Array();
        A__VIEWSTATE = app.searchSubStr(res.data, "__VIEWSTATE");
        A__VIEWSTATEGENERATOR = app.searchSubStr(res.data, "__VIEWSTATEGENERATOR");
        A__EVENTVALIDATION = app.searchSubStr(res.data, "__EVENTVALIDATION");
        end = app.searchSubStr(res.data, "查询期限");       
        that.setData({ __VIEWSTATE: A__VIEWSTATE[1], __VIEWSTATEGENERATOR: A__VIEWSTATEGENERATOR[1], __EVENTVALIDATION: A__EVENTVALIDATION[1]});
        __VIEWSTATE = res.data.slice(A__VIEWSTATE[1]+20, A__VIEWSTATEGENERATOR[0]-35);
        __VIEWSTATEGENERATOR = res.data.slice(A__VIEWSTATEGENERATOR[1]+29, A__EVENTVALIDATION[0]-33);
        __EVENTVALIDATION = res.data.slice(A__EVENTVALIDATION[1]+26, end[0]-17);
         console.log(__VIEWSTATE);
         console.log(__VIEWSTATEGENERATOR);
         console.log(__EVENTVALIDATION);
        //console.log("id="+id);console.log("name="+name);
        wx.request({
          url: 'https://cet.jnu.edu.cn/cet/cj_research.aspx',
          method: 'POST',
          dataType: 'json',
          data: {
            '__VIEWSTATE': __VIEWSTATE,
            '__VIEWSTATEGENERATOR': __VIEWSTATEGENERATOR,
            '__EVENTVALIDATION': __EVENTVALIDATION,
            'TextBox1': '黄博浩',
            'TextBox2': '440104199804013418',
            'Button1': '查 询'
          },
          header: {
            'Content-Type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: function (res) {
             var content = res.data;
             var positions = new Array();
             var subStr='table';
               var pos = content.indexOf(subStr);
               while (pos > -1) {
                 positions.push(pos);
                 pos = content.indexOf(subStr, pos + 1);
               }
            content=content.slice(positions[1]+72) ;
            WxParse.wxParse('content', 'html', content, that, 5);
           //console.log(res.data);           
          }
        })
      },
    })
    }
    else{
      wx.showToast({
        title: '姓名或身份证错误',
        icon: 'none',
        duration: 4000
      })
      
      wx.redirectTo({
        url: '../input/input',
        success:function()
        {
          wx.showToast({
            title: '姓名身份证错误',
            icon: 'none',
            duration: 2000
          })
        }
      });
      
    }
      }
    })
      },
  onPullDownRefresh: function () {
    console.log("refress success");
    wx.showToast({
      title: '刷新成功',
      icon: 'success',
      duration: 2000
    })
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        name=res.data.name;
        id=res.data.idcard;
      }
    });
    wx.stopPullDownRefresh();
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
    
  },
    

   getBody:function(content){
     var REG_BODY = /<body[^>]*>([\s\S]*)<\/body>/;
    var result = REG_BODY.exec(content);
    if(result && result.length === 2)
                return result[1];
    return content;
  }
})