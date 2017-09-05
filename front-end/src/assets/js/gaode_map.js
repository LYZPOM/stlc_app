
var map;

window.onload=function(){
  var mapContainer = document.getElementById("container");
  if( mapContainer != null ){

    map = new AMap.Map("container", {
        resizeEnable: true,
        center: [109.415205, 18.502307],
        mapStyle: 'amap://styles/a219df1668c3b680410738a3e14cc932',
        zoom:10
    });

    ['en', 'zh_en', 'zh_cn'].forEach(function(btn) {
       var button = document.getElementById(btn);
       AMap.event.addDomListener(button,'click',clickListener)
     });

    function clickListener() {
        map.setLang(this.id);
    }
  }
 }

function keywordSearch(){
  AMap.service(["AMap.PlaceSearch"], function() {
      var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
          pageSize: 5,
          pageIndex: 1,
          city: "0899", //城市
          map: map,
          panel: "panel",
          lang:'en'
      });
      //关键字查询
      var keyword = document.getElementById("keywordInput").value;
      placeSearch.search(keyword);
  });
}
