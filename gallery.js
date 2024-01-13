
let img_change_contain = document.querySelector(".img-change-contain");
let inerpage2_natuer = document.getElementById("inerpage2_natuer");
let page1 = document.getElementById("page");
let page2 = document.querySelector(".page2");
let images = document.querySelectorAll(".image_nature, .image_city");
console.log(images);
let body = document.body;
page2.classList.add("d-none");

var image_objects = [
  { src: "nature-1.jpeg" },
  { src: "nature-2.jpeg" },
  { src: "nature-3.jpeg" },
  { src: "city-1.jpeg" },
  { src: "city-2.jpeg" },
  { src: "city-3.jpeg" },
  { src: "city-4.jpeg" },
  { src: "city-5.jpeg" },
];

var nature_object_2 = ["nature-1.jpeg", "nature-2.jpeg", "nature-3.jpeg"];
var city_object_2 = [
  "city-1.jpeg",
  "city-2.jpeg",
  "city-3.jpeg",
  "city-4.jpeg",
  "city-5.jpeg",
]

// ------------------div creat in js ------------------------------------------

for (let i = 0; i < images.length; i++) {
  cat = "nature";

  var image = images[i];
  image.addEventListener("click", function () {
    console.log(image);
    page1.classList.add("d-none");
    page2.classList.remove("d-none");
    body.classList.add("black");
    page2.classList.add("d-block");

    img_change_contain.src = image_objects[i].src;

    let div = document.getElementById("inerpage2_natuer");
    div.innerHTML = "";

    let itemsArray = (i <= 2) ? nature_object_2 : city_object_2;


    for (let j = 0; j < itemsArray.length; j++) {
      let items = itemsArray[j];
      let img = document.createElement("img");

      let find = document.getElementById("imagenext");
      let s = find.src;
      var f = s.slice(22);


      if (f === items) {
        img.className = "page2_imge_size";
      } 
      else {
        img.className = "page2_imge_size image-blur";
      }

      img.id = "page2_imge_size_1";
      img.src = items;
      div.append(img);
    }

    image.classList.remove("image-blur");




    let img_0 = document.querySelectorAll(".page2_imge_size");

    for (let i = 0; i < img_0.length; i++) {
      img_0[i].addEventListener("click", change);
    }

    function change() {
      for (let i = 0; i < img_0.length; i++) {
        img_0[i].classList.add("image-blur");
      }

      console.log("d");
      img_change_contain.src = this.src;

      this.classList.remove("image-blur");
    }
  });
}

// -----------------------Button_Right_Left---------------------------------

let nature_index = 0;
let city_index = 0;

let leftArrow = document.getElementById("Left_arrow");
let rightArrow = document.getElementById("Right_arrow");

leftArrow.addEventListener("click", function () {
  add("prev");
});

rightArrow.addEventListener("click", function () {
  add("next");
});

function add(x) {
  let a = document.getElementById("imagenext");
  let c = a.src;

  let v = c.slice(22);
  console.log(v);

  index = nature_object_2.indexOf(v);
  console.log("INDEX : " + index);

  let e = x;

  if (index == -1) {
    city_index = city_object_2.indexOf(v);
    city(e);
  } 
  else {
    nature_index = index;
    nature(e);
  }
}

function nature(x) {
  if (x === "next") {
    console.log("nature index : " + nature_index);
      nature_index = nature_index >= nature_object_2.length - 1 ? 0 : nature_index + 1;

  } 
  else {
    nature_index =
    nature_index === 0 ? nature_object_2.length - 1 : nature_index - 1;
  }

  img_4 = document.querySelectorAll(".page2_imge_size");

  for (let i = 0; i < img_4.length; i++) {
    img_4[i].classList.add("image-blur");
  }

  img_change_contain.src = nature_object_2[nature_index];
  img_4[nature_index].classList.remove("image-blur");
}

function city(x) {
  if (x === "next") {
    city_index = city_index >= city_object_2.length - 1 ? 0 : city_index + 1;
  } 
  else {
    city_index =
      city_index === 0 ? city_object_2.length - 1 : city_index - 1;
  }

  img_4 = document.querySelectorAll(".page2_imge_size");

  for (let i = 0; i < img_4.length; i++) {
    img_4[i].classList.add("image-blur");
  }

  img_change_contain.src = city_object_2[city_index];
  img_4[city_index].classList.remove("image-blur");
}

// -------------------------close button----------------------------------

let close_button = document.getElementById("close");

close_button.addEventListener("click", function () {
  page1.classList.remove("d-none");
  page2.classList.add("d-none");
  page2.classList.remove("d-block");
  body.classList.remove("black");
});
