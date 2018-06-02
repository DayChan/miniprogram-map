Page({
  data: {
    list: [
      {
        id: 0,
        name: '校车：沙河校区 → 清水河校区',
        open: false,
        pages: ['星期一 至 星期五 中午：13:00', '星期一 至 星期五 下午：16:00-17:20', '星期一 至 星期五 晚上：19:30-20:00', '星期六、星期日 上午：7:30-10:00', '星期六、星期日 下午：13:00-17:00']
      },
      {
        id: 1,
        name: '校车：清水河校区 → 沙河校区',
        open: false,
        pages: ['星期一 至 星期五 上午：8:10、10:30', '星期一 至 星期五 中午：13:00', '星期一 至 星期五 下午：16:30', '星期一 至 星期五 晚上：18:30', '星期六、星期日 上午：8:20-11:00', '星期六、星期日 下午：14:00-18:00']
      },
      {
        id: 2,
        name: '396公交车：沙河校区 → 清水河校区',
        open: false,
        pages: ['7:00、7:30、7:45、8:30、10:30、11:30、12:30、13:30、14:30、15:30、16:30、17:20、18:20、19:20、20:40、21:30']
      },
      {
        id: 3,
        name: '396公交车：清水河校区 → 沙河校区',
        open: false,
        pages: ['7:00、7:30、8:30、9:00、10:30、11:30、12:30、13:30、14:30、15:30、16:30、17:20、18:20、19:20、20:40、21:30']
      },
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
});
