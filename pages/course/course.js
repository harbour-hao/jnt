//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
      { "xqj": '', "skjc": '', "skcd": '', "kcmc": '' },
      { "xqj":'' , "skjc":'' , "skcd": '', "kcmc": ''},
      { "xqj": 2, "skjc": 1, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "xqj": 2, "skjc": 8, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "xqj": 3, "skjc": 4, "skcd": 1, "kcmc": "高等数学@教A-301" },
      { "xqj": 3, "skjc": 8, "skcd": 1, "kcmc": "高等数学@教A-301" },
      { "xqj": 3, "skjc": 5, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "xqj": 4, "skjc": 2, "skcd": 3, "kcmc": "高等数学@教A-301" },
      { "xqj": 4, "skjc": 8, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "xqj": 5, "skjc": 1, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "xqj": 6, "skjc": 3, "skcd": 2, "kcmc": "高等数学@教A-301" },

      ],
    array: ['美国', '中国', '巴西', '日本',],
    index: 0,
    multiArray: [['周一', '周二', '周三', '周四', '周五', '周六', '周日'], ['第一节', '第二节', '第三节', '第四节', '第五节', '第六节', '第七节', '第八节', '第九节', '第十节', '第十一节', '第十二节', '第第十三节',],['1','2','3','4','5']],
    

      multiIndex: [0, 0, 0],

     
    
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，普通选择器携带值为', e.detail.value)
    var del = this.data.wlist;
   //console.log('改变前' + del.length )
    del.splice( e.detail.value,1);
   // console.log('改变后' + del.length)
    
    this.setData({
      index: e.detail.value,wlist:del
    });
    var tep = new Array;
    for (var i = 0; i < this.data.wlist.length; i++) {
      tep[i] = '周' + this.data.wlist[i].xqj + '的' + this.data.wlist[i].kcmc;
      //console.log('要输出数组=' + tep[i]);
    }
    this.setData({ array: tep })
    
  },

  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
    //console.log("这是确定的值"+e.detail.value[0]);
    //数组添加
    var obj = [{ "xqj": e.detail.value[0] + 1, "skjc": e.detail.value[1] + 1, "skcd": e.detail.value[2]+1, "kcmc": ""}];
    this.setData({
            'wlist': this.data.wlist.concat(obj)
      });
    //console.log(this.data.wlist[this.data.wlist.length-1].kcmc);
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    
        
        console.log(data.multiIndex);
       
    
    this.setData(data);
  },


   Input:function(e)
   {
     this.data.wlist[this.data.wlist.length-1].kcmc = e.detail.value;
     this.setData({
           wlist: this.data.wlist
     });
   
    
   },
  onLoad: function () {
    console.log('course-onLoad')
    //console.log(this.data.wlist[3].xqj);
    var tep = new Array;
    for (var i = 0; i < this.data.wlist.length; i++)
    {
      tep[i] = '周'+this.data.wlist[i].xqj+'的'+this.data.wlist[i].kcmc;
      //console.log('要输出数组=' + tep[i]);
    }
      this.setData({array:tep})
    var that=this;
    wx.getStorage({
      key: 'course',
      success: function(res) {
        //console.log('printf===='+res.data);
        that.setData({
          wlist: res.data
        });
      },
    })
  },
  onHide:function()
  {
    wx.setStorage({
      key: 'course',
      data: this.data.wlist,
    })
    console.log("course-HIDE")
  }
})
 

  
