导览 - 微信地图导览小程序
===
update0529
- 可显示校园内厕所（部分）及超市
- 可拨打保卫处电话
- 超市营业时间不准确
- find界面有待美化
- 还不能找出最近对应点

-----
update0522：
- 增加找厕所等页面（pages/map/find)
- 寻找最近厕所等按钮跳转后，未加入实际功能
- 注意：有些厕所、超市在一定时间内不开放（利用提示文字告知用户）
- 预想：找出所有点，按距离排序对应建筑，跳转至polyline达到效果
- 预期效果：进入后地图上显示icon，导览由近到远排序建筑，并标明距离及开放时间等注意事项

-----
update0512:

- [x] 修改分割线样式，增加上下变化
- [x] 修改总体色调，增加各标签icon
- [x] 修复无法及时加载出icon问题
- [ ] 图片归类（待操作）
- [ ] 滑动地图时自动下沉分割线以下内容（有bug）


-----
第一款开源的微信地图导览小程序，仅需修改地图文件，就可以适配某一学校/景区，具有出色的用户体验。


**特性** 

- [x] 一键配置切换
- [x] 地图路径规划
- [x] 在线热修补


---
## 使用说明

项目根文件新建config.js文件，写入以下内容，并根据自身需求修改

```
module.exports = {
  //调试模式开关，调试模式下只调用本地数据
  debug: true,
  //学校数据配置名称，学校英文缩写
  school: "gdst",
  //高德路线规划密钥，必须加入https://restapi.amap.com为request合法域名
  //密钥申请地址http://lbs.amap.com/api/javascript-api/summary/
  key: "", 
  //地图更新地址，用于热修补，无需每次都提交审核
  updateUrl: "https://www.qq.com/json.json",
    //图片CDN域名
  imgCDN: "https://www..gxgk.cc/"
}
```

复制resources下的地图数据文件gdst.js，重命名gdst.js为(你自己学校的英文缩写.js，根据实际情况修改)

```
module.exports.introduce = {}
module.exports.map = [{}]
``` 

修改地图文件

```
参照例子自行研究
地图经纬度获取：http://lbs.qq.com/tool/getpoint/index.html
``` 

---
