导览 - 微信地图导览小程序
===

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
