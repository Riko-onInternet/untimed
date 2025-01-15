$(window).on("load", function headeranimationload() {

  var htmlwidth_init = document.getElementById("htmltag").getBoundingClientRect();
  var htmlwidth = htmlwidth_init.width.toFixed();
  console.log(htmlwidth);
  if ((htmlwidth >= 300) && (htmlwidth <= 992)) {
    $(".navbar.navbar-expand-lg").removeClass("hovertextnavbar");
    $("#headermodifyscrolljs").addClass("bg-white");
  }
  else {
    if (htmlwidth > 992) {
      var Image_Id = document.getElementById('header-scroll-changeimage');
      const element = document.getElementById("headerscrollpoint");
      const rect = element.getBoundingClientRect();
      //Header animtion
      console.log(rect.top.toFixed());
      if (rect.top.toFixed() < 500) {
        $(".navbar.navbar-expand-lg").removeClass("hovertextnavbar");
        $("#headermodifyscrolljs").addClass("bg-white");
        //logo modif
        if (Image_Id.src.match("img/Logo1.png")) {
          Image_Id.src = "img/Logo.png";
        }
      } else {
        $(".navbar.navbar-expand-lg").addClass("hovertextnavbar");
        $("#headermodifyscrolljs").removeClass("bg-white");
        Image_Id.src = "img/Logo1.png";
        //logo modif
        if (Image_Id.src.match("img/Logo.png")) {
          Image_Id.src = "img/Logo1.png";
        }
      }
    }
  }
});


$(window).on("scroll", function headeranimation() {

  var htmlwidth_init = document.getElementById("htmltag").getBoundingClientRect();
  var htmlwidth = htmlwidth_init.width.toFixed();
  console.log(htmlwidth);
  if ((htmlwidth >= 300) && (htmlwidth <= 992)) {
    $(".navbar.navbar-expand-lg").removeClass("hovertextnavbar");
    $("#headermodifyscrolljs").addClass("bg-white");
  }
  else {
    if (htmlwidth > 992) {
      var Image_Id = document.getElementById('header-scroll-changeimage');
      const element = document.getElementById("headerscrollpoint");
      const rect = element.getBoundingClientRect();
      //Header animtion
      console.log(rect.top.toFixed());
      if (rect.top.toFixed() < 1000) {
        $(".navbar.navbar-expand-lg").removeClass("hovertextnavbar");
        $("#headermodifyscrolljs").addClass("bg-white");
        //logo modif
        if (Image_Id.src.match("img/Logo1.png")) {
          Image_Id.src = "img/Logo.png";
        }
      } else {
        $(".navbar.navbar-expand-lg").addClass("hovertextnavbar");
        $("#headermodifyscrolljs").removeClass("bg-white");
        Image_Id.src = "img/Logo1.png";
        //logo modif
        if (Image_Id.src.match("img/Logo.png")) {
          Image_Id.src = "img/Logo1.png";
        }
      }
    }
  }
});