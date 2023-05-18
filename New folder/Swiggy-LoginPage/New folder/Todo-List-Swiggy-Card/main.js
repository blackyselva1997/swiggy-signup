let foodList = [
  {
    id: 1,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bwkfac2r3bpphgfm7rh9",
    name1: "SS Hyderabad Briyani",
    cusine: "Biryani,North Indian,Chinese",
    icon: "",
    rating: 4.4,
    deleveryTime: "30MINS",
    rate: "₹300 FOR TWO",
    disicon: "",
    offer: "50% off | Use WELCOME50",
    quickView: "QUICK VIEW",
  },
  {
    id: 2,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cyxyhx6wzgi9ogyapxym",
    name1: "Tasty Kitchen",
    cusine: "Biryani, South Indian, Chinese, North Indian",
    icon: "",
    rating: 4.2,
    deleveryTime: "54MINS",
    rate: "₹300 FOR TWO",
    disicon: "",
    offer: "50% off | Use WELCOME50",
    quickView: "QUICK VIEW",
  },
  {
    id: 3,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/o5vlkrbbjez8gbei4utj",
    name1: "Moonlight Takeaway & Delivery",
    cusine: "Indian, Chinese, Tandoor",
    icon: "",
    rating: 4.0,
    deleveryTime: "41MINS",
    rate: "₹250 FOR TWO",
    disicon: "",
    offer: "50% off | Use WELCOME50",
    quickView: "QUICK VIEW",
  },
  {
    id: 4,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zggqzcw1muhht6tkwuba",
    name1: "Burger King",
    cusine: "Burgers, American",
    icon: "",
    rating: 4.1,
    deleveryTime: "55MINS",
    rate: "₹350 FOR TWO",
    disicon: "",
    offer: "60% off | Use STEALDEAL",
    quickView: "QUICK VIEW",
  },
  {
    id: 5,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ac1staxtetolkvynv2ot",
    name1: "Zaitoon",
    cusine: "Biryani, Juices, North Indian, Chinese,Arabian, Mughlai, Kebabs",
    icon: "",
    rating: 4.3,
    deleveryTime: "44 MINS",
    rate: "₹500 FOR TWO",
    disicon: "",
    offer: "50% off | Use WELCOME50",
    quickView: "QUICK VIEW",
  },
  {
    id: 6,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gbuvu9fca82lu0r7mdxl",
    name1: "Hotel Farook",
    cusine: "South Indian, Arabian",
    icon: "",
    rating: 4.3,
    deleveryTime: "33 MINS",
    rate: "₹450 FOR TWO",
    disicon: "",
    offer: "50% off | Use WELCOME50",
    quickView: "QUICK VIEW",
  },
  {
    id: 7,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
    name1: "KFC",
    cusine: "Burgers, Biryani, American, Snacks, Fast Food",
    icon: "",
    rating: 4.0,
    deleveryTime: "28 MINS",
    rate: "₹400 FOR TWO",
    disicon: "",
    offer: "50% off | Use WELCOME50",
    quickView: "QUICK VIEW",
  },
  {
    id: 8,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hdatwmjnajz1htglkw7o",
    name1: "Anburaj Resturant Briyani & Fast Food",
    cusine: "Biryani, North Indian",
    icon: "",
    rating: "3.8",
    deleveryTime: "36 MINS",
    rate: "₹250 FOR TWO",
    disicon: "",
    offer: "40% off | Use GUILTFREE",
    quickView: "QUICK VIEW",
  },
  {
    id: 9,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/biztrxunzi2lklnrzgjf",
    name1: "Bismillah Biryani & Fast food",
    cusine: "Tandoor, Chinese, Biryani, Indian",
    icon: "",
    rating: 3.9,
    deleveryTime: "49 MINS",
    rate: "₹300 FOR TWO",
    disicon: "",
    offer: "50% off | Use WELCOME50",
    quickView: "QUICK VIEW",
  },
  {
    id: 10,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/oodghmivnc6bxnbrvzzw",
    name1: "Sangeetha Veg Restaurant",
    cusine: "North Indian, Chinese, South Indian",
    icon: "",
    rating: 4.5,
    deleveryTime: "25 MINS",
    rate: "₹150 FOR TWO",
    disicon: "",
    offer: "50% off | Use WELCOME50",
    quickView: "QUICK VIEW",
  },
  {
    id: 11,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/p6w2bhhag5nym91k1wn8",
    name1: "Halal Kattu Biryani",
    cusine: "Biryani, Indian, Chinese",
    icon: "",
    rating: 4.0,
    deleveryTime: "45 MINS",
    rate: "₹250 FOR TWO",
    disicon: "",
    offer: "50% off | Use WELCOME50",
    quickView: "QUICK VIEW",
  },
  {
    id: 12,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jk1nao7hohp8lreel9vh",
    name1: "zam zam fast food",
    cusine: "Indian, Chinese",
    icon: "",
    rating: 4.0,
    deleveryTime: "26 MINS",
    rate: "₹300 FOR TWO",
    disicon: "",
    offer: "30% off on all orders",
    quickView: "QUICK VIEW",
  },
  {
    id: 13,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fbca6jpnenbixhnshpgl",
    name1: "Abid's",
    cusine:
      "Arabian, Biryani, Chinese, Grill, Hyderabadi, Indian, North Indian, Tandoor",
    icon: "",
    rating: 4.4,
    deleveryTime: "27 MINS",
    rate: "₹700 FOR TWO",
    disicon: "",
    offer: "50% off | Use WELCOME50",
    quickView: "QUICK VIEW",
  },
  {
    id: 14,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/es6sxfn37c2awnbk9zhj",
    name1: "Sri Balaji Fast Food",
    cusine: "Chinese, Indian, South Indian, Chettinad, Home Food",
    icon: "",
    rating: 4.1,
    deleveryTime: "37 MINS",
    rate: "₹250 FOR TWO",
    disicon: "",
    offer: "50% off | Use WELCOME50",
    quickView: "QUICK VIEW",
  },
  {
    id: 15,
    imgurl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pigur7jszfduqsrqzvjk",
    name1: "SREE AKSHAYAM",
    cusine: "South Indian, North Indian, Chinese, Beverages",
    icon: "",
    rating: 4.3,
    deleveryTime: "46 MINS",
    rate: "₹400 FOR TWO",
    disicon: "",
    offer: "50% off | Use WELCOME50",
    quickView: "QUICK VIEW",
  },
];

let cont = document.getElementById("container");
let row = document.createElement("div");
row.classList.add("row");
cont.appendChild(row);

foodList.forEach(function (e) {
  let column = document.createElement("div");
  column.classList.add("col");
  row.appendChild(column);

  let fullbox = document.createElement("div");
  fullbox.classList.add("box");
  column.appendChild(fullbox);

  let imgdiv = document.createElement("div");
  imgdiv.classList.add("imgdiv");
  fullbox.appendChild(imgdiv);

  let img = document.createElement("img");
  img.src = e.imgurl;
  imgdiv.appendChild(img);

  let namediv = document.createElement("div");
  namediv.classList.add("namediv");
  fullbox.appendChild(namediv);

  let hed2 = document.createElement("h2");
  hed2.innerHTML = e.name1;
  namediv.appendChild(hed2);

  let namepara = document.createElement("p");
  namepara.innerHTML = e.cusine;
  namediv.appendChild(namepara);

  let ratediv = document.createElement("div");
  ratediv.classList.add("ratediv");
  fullbox.appendChild(ratediv);

  let ratepara = document.createElement("p");
  ratepara.innerHTML = e.rating;
  ratediv.appendChild(ratepara);

  let ratepara1 = document.createElement("p");
  ratepara1.innerHTML = e.deleveryTime;
  ratediv.appendChild(ratepara1);

  let ratepara2 = document.createElement("p");
  ratepara2.innerHTML = e.rate;
  ratediv.appendChild(ratepara2);

  let discdiv = document.createElement("div");
  discdiv.classList.add("discdiv");
  fullbox.appendChild(discdiv);

  let discpara = document.createElement("p");
  discpara.innerHTML = e.offer;
  discdiv.appendChild(discpara);

  let lastdiv = document.createElement("div");
  lastdiv.classList.add("lastdiv");
  fullbox.appendChild(lastdiv);

  let lastpara = document.createElement("p");
  lastpara.innerHTML = e.quickView;
  lastdiv.appendChild(lastpara);
});