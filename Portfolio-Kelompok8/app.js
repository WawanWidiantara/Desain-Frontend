const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Ilham Dean Abdillah",
    job: "Python Backend Developer",
    productDesc:
      "Selamat datang di dunia Python ala Orang Sunda yang bikin kamu ngakak! Di balik senyum manis dan bahasa Sunda yang khas, mereka adalah para penggemar Python yang handal. Mereka bisa 'nyunda' kode-kode sulit jadi lebih lucu daripada pentas wayang golek. Yuk, kita eksplor lebih dalam ke dalam keajaiban komedi Python versi Orang Sunda!",
    colors: [
      {
        code: "black",
        img: "./img/foto-ilham-color1.png",
      },
      {
        code: "darkblue",
        img: "./img/foto-ilham-color2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Cahya Mustofa",
    job: "Frontend Developer",
    productDesc: "Saya suka membaca buku dan bermain game.",
    colors: [
      {
        code: "purple",
        img: "./img/foto-cahya-color1.png",
      },
      {
        code: "yellow",
        img: "./img/foto-cahya-color2.png",
      },
    ],
  },
  {
    id: 3,
    title: "I Gede Widiantara",
    job: "Flutter Developer & Machine Learning Specialist",
    productDesc:
      "Halo semuanya! Siapa bilang orang Bali hanya pandai menari dan berselancar? Ada satu Bali-er (orang Bali) yang tidak hanya pandai menghibur, tapi juga jago dalam dunia Machine Learning! Jadi, mari kita eksplorasi dunia Machine Learning dengan penuh semangat dan senyum di wajah, bersama Widi! 🌴💻😄",
    colors: [
      {
        code: "#377e7f",
        img: "./img/foto-widi-baru-c1.png",
      },
      {
        code: "#845027",
        img: "./img/foto-widi-baru-c2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductJob = document.querySelector(".productJob");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductJob.textContent = choosenProduct.job;
    currentProductDesc.textContent = choosenProduct.productDesc;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
