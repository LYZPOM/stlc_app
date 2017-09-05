var map;

function drawChinaMap(){
  var R = Raphael("map", 600, 500);
  //调用绘制地图方法
  paintMap(R);
  var textAttr = {
      "fill": "#000",
      "font-size": "12px",
      "cursor": "pointer"
  };
  for (var state in china) {
  china[state]['path'].color = Raphael.getColor(0.9);
      (function (st, state) {
    //获取当前图形的中心坐标
          var xx = st.getBBox().x + (st.getBBox().width / 2);
          var yy = st.getBBox().y + (st.getBBox().height / 2);
          //***修改部分地图文字偏移坐标
          switch (china[state]['name']) {
              case "海南":
                china[state]['path'].attr({fill: "#f59797", stroke: "#eee"});
                break;
              case "江苏":
                  xx += 5;
                  yy -= 10;
                  break;
              case "河北":
                  xx -= 10;
                  yy += 20;
                  break;
              case "天津":
                  xx += 10;
                  yy += 10;
                  break;
              case "上海":
                  xx += 10;
                  break;
              case "广东":
                  yy -= 10;
                  break;
              case "澳门":
                  yy += 10;
                  break;
              case "香港":
                  xx += 20;
                  yy += 5;
                  break;
              case "甘肃":
                  xx -= 40;
                  yy -= 30;
                  break;
              case "陕西":
                  xx += 5;
                  yy += 10;
                  break;
              case "内蒙古":
                  xx -= 15;
                  yy += 65;
                  break;
              default:
          }
    //写入文字
    china[state]['text'] = R.text(xx, yy, china[state]['name']).attr(textAttr);
    st[0].onmouseover = function () {
      if(china[state]['name']!="海南"){
              st.animate({fill: st.color, stroke: "#eee"}, 500);
      china[state]['text'].toFront();
              R.safari();
            }
          };
    st[0].onmouseout = function () {
           if(china[state]['name']!="海南"){
               st.animate({fill: "#97d6f5", stroke: "#eee"}, 500);
       china[state]['text'].toFront();
               R.safari();
           }
          };
       })(china[state]['path'], state);
  }
}

function drawGaoDeMap(){
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
