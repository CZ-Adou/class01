// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count1: 0,
    count2: 0,
    msg: "你好",
    type: 1,
    flag: true,
    arr1: [{id:1, name: '苹果'},{id:2, name: '华为'},{id:3, name: '三星'},{id:4, name: '小米'}],
    arr2: ['苹果', '华为','三星','小米']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  addCount() {
    this.setData({
      count1: this.data.count1 + 1
    })
  },
  btnTap(e) {
     this.setData({
       count2: this.data.count2 + e.target.dataset.info
     })
  },
  // input输入框事件处理函数
  inputHandle(e) {
     console.log(e.detail.value);
     this.setData({
       msg : e.detail.value
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