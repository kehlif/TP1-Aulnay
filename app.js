(function init(){
  var pageModules;

  function getPagesModules(){
    var t = [];
    t.push(
      document.getElementById('header'),
      document.getElementById('section'),
      document.getElementById('footer')
    );
    return t;
  }


  function styliserModule(num, color,bg){
      pageModules[num].style.color= color;
      pageModules[num].style.backgroundColor = bg;
      return pageModules[num];
  }

  function getModuleInfos(num){
    var metrics=pageModules[num].getBoundingClientRect();
    var infos = {
        id: pageModules[num].id,
        tag: pageModules[num].tagName,
        class: pageModules[num].className,
        a:metrics.top,
        b:metrics.right,
        c:metrics.left,
        d:metrics.bottom
    };
    return infos;
  }
  window.onload = function(){
    var mod;
    pageModules = getPagesModules();
    console.log("le document est bien chargé!!");
    console.log(pageModules);
    mod = styliserModule(0, "white", "black");
    mod = styliserModule(2, "red", "pink");
    console.log(mod);
    console.log(getModuleInfos(2));

  }

}());
