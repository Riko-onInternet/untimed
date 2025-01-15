var img1src = "img/SW-yellow-f.png";
var img2src = "img/SW-yellow-b.png";
var imgselected = 1;

function imgflowey() {
  img1src = "img/SW-yellow-f.png";
  img2src = "img/SW-yellow-b.png";
  var Image_Id1 = document.getElementById('imgmini1');
  var Image_Id2 = document.getElementById('imgmini2');
  Image_Id1.src = img1src;
  Image_Id2.src = img2src;
  if (imgselected == 1) {
    imgchange1();
  }
  if (imgselected == 2) {
    imgchange2();
  }
};

function imgasgore() {
  img1src = "img/SW-gray-f.png";
  img2src = "img/SW-gray-b.png";
  var Image_Id1 = document.getElementById('imgmini1');
  var Image_Id2 = document.getElementById('imgmini2');
  Image_Id1.src = img1src;
  Image_Id2.src = img2src;
  if (imgselected == 1) {
    imgchange1();
  }
  if (imgselected == 2) {
    imgchange2();
  }
};

function imgsans() {
  img1src = "img/SW-white-f.png";
  img2src = "img/SW-white-b.png";
  var Image_Id1 = document.getElementById('imgmini1');
  var Image_Id2 = document.getElementById('imgmini2');
  Image_Id1.src = img1src;
  Image_Id2.src = img2src;
  if (imgselected == 1) {
    imgchange1();
  }
  if (imgselected == 2) {
    imgchange2();
  }
};

function imgchange1() {
  var Image_Id = document.getElementById('imgshow');
  Image_Id.src = img1src;
  imgselected = 1;
};

function imgchange2() { //dietro
  var Image_Id = document.getElementById('imgshow');
  Image_Id.src = img2src;
  imgselected = 2;
};

function imgchange3() { //lato
  var Image_Id = document.getElementById('imgshow');
  Image_Id.src = "img/SW-All-l.png";
  imgselected = 3;
};