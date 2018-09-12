//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //swiper data
    imgUrls: [
      {
        src: '../../images/swiper/ic_eaten.jpg',
        url:'http://www.jnutong.com/jnt2016/wechat/application/Eaten/EatenIndex.php'
      },
      {
        src: '../../images/swiper/ic_exchange.jpg',
        url:''
      },
      {
        src: '../../images/swiper/ic_birth2.jpg',
        url:''
      }

    ],
    indicatorDots: true,
    autopaly: true,
    interval: 3000,
    duration: 1000,

    //grid data
    grids: [
      {
        name:'查成绩',
        url: '../jwxt-course/jwxt-course',
        icon: '../../images/grid/exam.svg'
      },
      {
        name: '四六级',
        url: '../electric/electric',
        icon: '../../images/grid/elec.svg'
      },
      {
        name: '倒计时',
        url: '../countdown/countdown',
        icon: '../../images/grid/exam_ddl.svg'
      },
      {
        name: '图书馆',
        url: '',
        icon: '../../images/grid/library.svg'
      },
      {
        name: '体测',
        url: '../pe/pe',
        icon: '../../images/grid/PE.svg'
      },
      {
        name: '换课',
        url: '',
        icon: '../../images/grid/exchange_class.svg'
      },
      {
        name: '课程评价',
        url: '',
        icon: '../../images/grid/class_eval.svg'
      },
    ]

  },

  onSwiperTap:function(event) {//点击图片触发事件
    var url = event.target.dataset.url;
    wx.navigateTo({
      url: url,
    })
    console.log(this.data.imageUrls[this.data.current] + 'navigateTo' + url);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload')
    var that = this
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