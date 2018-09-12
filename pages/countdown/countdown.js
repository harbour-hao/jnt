
let chooseYear = null;
let chooseMonth = null;
var app = getApp();
const conf = {
  data: {
    hasEmptyGrid: false,
    showPicker: false,
    countdate:'',
    counttime:'',
    countavi:[]
  },
  onLoad() {
    var _this = this;
   

    //页面日历加载
    const date = new Date();
    const curYear = date.getFullYear();
    const curMonth = date.getMonth() + 1;
    const weeksCh = ['日', '一', '二', '三', '四', '五', '六'];
    this.calculateEmptyGrids(curYear, curMonth);
    this.calculateDays(curYear, curMonth);// console.log(this.data.empytGrids);
    this.setData({
      curYear,
      curMonth,
      weeksCh
    });
    this.countdaypush();  
  },
  countdaypush()
  {
    var data = [{ day: "2018/5/1", content: "劳动节快乐" }, { day: "2018/5/20", content: "通通生日快乐" },{day: "2018/6/16", content: "稳过的四六级" }]
    var days = []; const date = new Date();
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var start = year + '/' + month + '/' + day;
    for(let i=0;i<3;i++){
    var day = this.countday(start, data[i].day);
    days.push({
      date:data[i].day,
      day:day,
      content:data[i].content
    })}
     this.setData({
       countavi:days
     })  
     //console.log(this.data.countavi)
  },
  countday(start,end)//计算日期
  {    
    var start_date = new Date(start);
    var end_date = new Date(end);
    var days = end_date.getTime() - start_date.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    return day;
  },
  getThisMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
  },
  getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },
  calculateEmptyGrids(year, month) {
    const firstDayOfWeek = this.getFirstDayOfWeek(year, month);//console.log(firstDayOfWeek);
    let empytGrids = [];
    if (firstDayOfWeek > 0) {
      for (let i = 0; i < firstDayOfWeek; i++) {
        empytGrids.push(i);
      }
      this.setData({
        hasEmptyGrid: true,
        empytGrids
      });
    } else {
      this.setData({
        hasEmptyGrid: false,
        empytGrids: []
      });
    }
  },
  calculateDays(year, month) {
    let days = [];

    const thisMonthDays = this.getThisMonthDays(year, month);
    //console.log("calculate.month="+month)
    for (let i = 1; i <= thisMonthDays; i++) {
      var choose = false;
      //当前日期，choosed为选中值
      if (i == new Date().getDate()&&month==new Date().getMonth()+1) choose = true;
      days.push({
        day: i,
        choosed: choose
      });
    }

    this.setData({
      days
    });
  },
  handleCalendar(e) {
    const handle = e.currentTarget.dataset.handle;
    const curYear = this.data.curYear;
    const curMonth = this.data.curMonth;
    if (handle === 'prev') {
      let newMonth = curMonth - 1;
      let newYear = curYear;
      if (newMonth < 1) {
        newYear = curYear - 1;
        newMonth = 12;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

      this.setData({
        curYear: newYear,
        curMonth: newMonth
      });
    } else {
      let newMonth = curMonth + 1;
      let newYear = curYear;
      if (newMonth > 12) {
        newYear = curYear + 1;
        newMonth = 1;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

      this.setData({
        curYear: newYear,
        curMonth: newMonth
      });
    }
  },
  //点击日期
  tapDayItem(e) {
    const idx = e.currentTarget.dataset.idx;
    const days = this.data.days;
    days[idx].choosed = !days[idx].choosed;
    this.setData({
      days,
    });
    //console.log(idx);
    //console.log(this.data.curYear);
    //console.log(this.data.curMonth);
  },
  chooseYearAndMonth() {
    const curYear = this.data.curYear;
    const curMonth = this.data.curMonth;
    let pickerYear = [];
    let pickerMonth = [];
    for (let i = 1900; i <= 2100; i++) {
      pickerYear.push(i);
    }
    for (let i = 1; i <= 12; i++) {
      pickerMonth.push(i);
    }
    const idxYear = pickerYear.indexOf(curYear);
    const idxMonth = pickerMonth.indexOf(curMonth);
    this.setData({
      pickerValue: [idxYear, idxMonth],
      pickerYear,
      pickerMonth,
      showPicker: true,
    });
  },
  pickerChange(e) {
    const val = e.detail.value;
    chooseYear = this.data.pickerYear[val[0]];
    chooseMonth = this.data.pickerMonth[val[1]];
  },
  tapPickerBtn(e) {
    const type = e.currentTarget.dataset.type;
    const o = {
      showPicker: false,
    };
    if (type === 'confirm') {
      o.curYear = chooseYear;
      o.curMonth = chooseMonth;
      this.calculateEmptyGrids(chooseYear, chooseMonth);
      this.calculateDays(chooseYear, chooseMonth);
    }

    this.setData(o);
  },
  onShareAppMessage() {
    return {
      title: '小程序日历',
      desc: '还是新鲜的日历哟',
      path: 'pages/index/index'
    };
  }
};

Page(conf);