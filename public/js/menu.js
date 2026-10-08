console.log("کافه فست فود محسن 🍔");

const foods = {

    //========================
    // برگر
    //========================

   burger: [

{
id:1,
name:"برگر مرغ",
image:"images/products/chicken-burger.jpg",
price:280000,
desc:"برگر مرغ، گوجه، کاهو، خیارشور"
},

{
id:2,
name:"برگر مخصوص",
image:"images/products/special-burger.jpg",
price:195000,
desc:"برگر شرکتی ۶۰٪، کاهو، گوجه، خیارشور"
},

{
id:3,
name:"برگر ساده",
image:"images/products/simple-burger.jpg",
price:145000,
desc:"برگر شرکتی ۳۰٪، کاهو، گوجه، خیارشور"
},

{
id:4,
name:"برگر ویژه محسن",
image:"images/products/burger-special.jpg",
price:575000,
desc:"برگر گوشت، برگر مرغ، ژامبون، پنیر، کاهو، گوجه، خیارشور، سس مخصوص"
},

{
id:5,
name:"دوبل برگر گوشت",
image:"images/products/doubleburger.jpg",
price:545000,
desc:"۲ عدد برگر گوشت، پنیر، کاهو، گوجه، خیارشور"
},

{
id:6,
name:"مکزیکن برگر",
image:"images/products/mexicanburger.jpg",
price:490000,
desc:"برگر گوشت، ژامبون گوشت، هالوپینو، پنیر، کاهو، گوجه"
},

{
id:7,
name:"ماشروم برگر",
image:"images/products/mushroomburger.jpg",
price:425000,
desc:"برگر گوشت، قارچ، سس قارچ، کاهو، گوجه"
},

{
id:8,
name:"چیز برگر ذغالی",
image:"images/products/cheeseburger.jpg",
price:350000,
desc:"برگر گوشت، پنیر، کاهو، گوجه، خیارشور"
},

{
id:9,
name:"برگر ذغالی",
image:"images/products/beefburger.jpg",
price:310000,
desc:"برگر گوشت، گوجه، خیارشور، کاهو"
}
],

//========================
 // پیتزا
//========================

   pizza:[

{
id:1,
name:"پیتزا ویژه محسن",
image:"images/products/pizza-special.jpg",
prices:{
single:620000,
medium:920000,
family:1220000
},
desc:"فیله گوساله، فیله مرغ، قارچ، فلفل دلمه، ذرت، زیتون، پنیر، سس مخصوص"
},

{
id:2,
name:"پیتزا سیر و استیک",
image:"images/products/garlic-steak.jpg",
prices:{
single:570000,
medium:820000,
family:1220000
},
desc:"استیک طعم‌دار، قارچ، زیتون، پنیر، سس سیر"
},

{
id:3,
name:"پیتزا چهار فصل",
image:"images/products/4season.jpg",
prices:{
single:570000,
medium:850000,
family:1150000
},
desc:"فیله مرغ، استیک، گوشت تاکو، قارچ، گوجه، پنیر، سس مخصوص"
},

{
id:4,
name:"پیتزا رست بیف",
image:"images/products/roast-beef-pizza.jpg",
prices:{
single:560000,
medium:820000,
family:1090000
},
desc:"گوشت رست شده، قارچ، پنیر، فلفل دلمه، زیتون"
},

{
id:5,
name:"پیتزا چیکن آلفردو",
image:"images/products/alfredo.jpg",
prices:{
single:570000,
medium:820000,
family:1110000
},
desc:"فیله مرغ، ذرت، زیتون، پنیر، سس آلفردو"
},

{
id:6,
name:"پیتزا پیکانتو",
image:"images/products/picanto.jpg",
prices:{
single:500000,
medium:780000,
family:980000
},
desc:"فیله گوساله، پپرونی، پنیر، هالوپینو، قارچ"
},

{
id:7,
name:"پیتزا قارچ و گوشت",
image:"images/products/mushroom-meat.jpg",
prices:{
single:570000,
medium:830000,
family:1120000
},
desc:"گوشت تاکو، قارچ، پنیر، فلفل دلمه"
},

{
id:8,
name:"پیتزا چیکن",
image:"images/products/chicken.jpg",
prices:{
single:580000,
medium:740000,
family:1070000
},
desc:"فیله مرغ، قارچ، فلفل دلمه، پنیر"
},

{
id:9,
name:"سیزر پیتزا",
image:"images/products/cizers.jpg",
prices:{
single:650000,
medium:670000,
family:690000
},
desc:"فیله مرغ، میکس کاهو، سس سزار، پنیر، سس سیر"
},

{
id:10,
name:"پیتزا کالزونه",
image:"images/products/calzone.jpg",
prices:{
single:520000,
medium:620000,
family:1040000
},
desc:"گوشت تاکو، ژامبون گوشت، پنیر، زیتون"
},

{
id:11,
name:"پیتزا پپرونی",
image:"images/products/pepperoni.jpg",
prices:{
single:490000,
medium:670000,
family:920000
},
desc:"پپرونی، پنیر، زیتون، هالوپینو"
},

{
id:12,
name:"پیتزا سبزیجات",
image:"images/products/vegetable.jpg",
prices:{
single:750000,
medium:900000,
family:920000
},
desc:"گوجه، قارچ، ذرت، زیتون، اسفناج، پنیر"
},

{
id:13,
name:"نان سیر",
image:"images/products/garlic-bread.jpg",
prices:{
single:470000,
medium:490000,
family:490000
},
desc:"سس سیر، پنیر پیتزا"
},

{
id:14,
name:"پیتزا ژامبون",
image:"images/products/ham-pizza.jpg",
prices:{
single:550000,
medium:780000,
family:1050000
},
desc:"ژامبون، قارچ، فلفل دلمه، ذرت، پنیر، سس مخصوص"
}

],

//===================
//پاستا
//===================

pasta:[

{
id:1,
name:"پاستا پنه بیف",
image:"images/products/pasta-beef.jpg",
price:420000,
desc:"گوشت گوساله، قارچ، سیر، پنیر، سس مخصوص"
},

{
id:2,
name:"پاستا چیکن آلفردو",
image:"images/products/pasta-alfredo.jpg",
price:390000,
desc:"فیله مرغ، قارچ، سیر، پنیر، سس آلفردو"
},

{
id:3,
name:"پاستا گوجه",
image:"images/products/pasta-tomato.jpg",
price:290000,
desc:"گوجه، پنیر، سیر، پیاز، سس مخصوص"
}

],

 //====================
 //سالاد
 //====================

 salad:[

{
id:1,
name:"سالاد ویژه محسن",
image:"images/products/salad-special.jpg",
price:280000,
desc:"ماکارونی فرمی، سینه مرغ، قارچ، ذرت، لوبیا چیتی، زیتون، هویج، خیارشور، کلم، فلفل دلمه، سس"
},

{
id:2,
name:"سالاد سزار",
image:"images/products/caesar.jpg",
price:220000,
desc:"کاهو پیچ، فیله مرغ گریل شده، تست، پنیر پارمسان، سس سزار"
},

{
id:3,
name:"سالاد سبزیجات",
image:"images/products/vegetable-salad.jpg",
price:200000,
desc:"کاهو، اسفناج، نعناع، میوه فصل، پنیر لیقوان، تخمه آفتابگردان، سس مخصوص"
},

{
id:4,
name:"سالاد یونانی",
image:"images/products/greek.jpg",
price:100000,
desc:"خیار، گوجه، پیاز، فلفل دلمه، زیتون، پنیر لیقوان، جعفری، سس مخصوص"
},

{
id:5,
name:"سالاد اندونزی",
image:"images/products/indonesian.jpg",
price:100000,
desc:"سیب زمینی، هویج، ژامبون، کلم بنفش، کلم سفید، خیارشور، ذرت، فلفل دلمه"
},

{
id:6,
name:"سالاد فصل",
image:"images/products/fasl.jpg",
price:90000,
desc:"کاهو، خیار، گوجه، هویج"
},

{
id:7,
name:"سالاد کلم",
image:"images/products/cabbage.jpg",
price:70000,
desc:"کلم سفید، هویج، ذرت، کشمش، گردو، سس"
},

{
id:8,
name:"سالاد سزار با رول سوخاری",
image:"images/products/caesar-with-rooles.jpg",
price:530000,
desc:"کاهو پیچ، فیله مرغ گریل شده، تست، پنیر پارمسان، سس سزار، رول مرغ سوخاری شده"
}

],

//======================
//پیش غذا
//======================

appetizer:[

{
id:1,
name:"سیب زمینی ویژه",
image:"images/products/special-fries.jpg",
price:380000,
desc:"سیب زمینی سرخ شده، قارچ، پنیر، سوسیس سرخ شده"
},

{
id:2,
name:"سیب زمینی تنوری",
image:"images/products/potato-baked.jpg",
price:320000,
desc:"سیب زمینی تنوری، سس قارچ"
},

{
id:3,
name:"سیب زمینی",
image:"images/products/fries.jpg",
price:240000,
desc:"سیب زمینی سرخ شده"
}

],

//==================
//ساندویچ
//==================

sandwich:[

{
id:1,
name:"ساندویچ رست بیف",
image:"images/products/roastbeef.jpg",
price:440000,
desc:"گوشت رست شده، کاهو، گوجه، خیارشور"
},

{
id:2,
name:"ساندویچ مغز",
image:"images/products/maghz.jpg",
price:355000,
desc:"مغز گوساله، گوجه، کاهو، خیارشور"
},

{
id:3,
name:"ساندویچ زبان",
image:"images/products/zaban.jpg",
price:300000,
desc:"زبان گوساله، گوجه، کاهو، خیارشور"
},

{
id:4,
name:"ساندویچ چیکن",
image:"images/products/chicken-sandwich.jpg",
price:250000,
desc:"فیله مرغ، کاهو، گوجه، خیارشور"
},

{
id:5,
name:"هات داگ",
image:"images/products/hotdog.jpg",
prices:{
    simple:195000,
    cheese:290000
},
desc:"سوسیس هات داگ، کاهو، گوجه، خیارشور"
},

{
id:6,
name:"کوکتل",
image:"images/products/cocktail.jpg",
prices:{
    simple:195000,
    cheese:235000
},
desc:"سوسیس کوکتل، کاهو، گوجه، خیارشور"
},

{
id:7,
name:"بندری",
image:"images/products/bandari.jpg",
price:195000,
desc:"سوسیس، سیب زمینی، پیاز، گوجه، کاهو، خیارشور"
},

{
id:8,
name:"فلافل",
image:"images/products/falafel.jpg",
price:145000,
desc:"فلافل خانگی، کاهو، گوجه، خیارشور"
},

{
id:9,
name:"ساندویچ سرد",
image:"images/products/cold-sandwich.jpg",
price:285000,
desc:"ژامبون مرغ یا گوشت، کاهو، گوجه، خیارشور"
}

],

//============
//مرغ
//============

chicken:[

{
id:1,
name:"فیله مرغ سوخاری (کیلویی)",
image:"images/products/fried-fillet.jpg",
price:1150000,
desc:"1 کیلو فیله مرغ سوخاری"
},

{
id:2,
name:"ران مرغ سوخاری (کیلویی)",
image:"images/products/fried-leg.jpg",
price:990000,
desc:"1 کیلو ران مرغ سوخاری"
},

{
id:3,
name:"بال و کتف سوخاری (کیلویی)",
image:"images/products/fried-wing.jpg",
price:900000,
desc:"1 کیلو بال و کتف سوخاری"
},

{
id:4,
name:"قارچ سوخاری (کیلویی)",
image:"images/products/fried-mushroom.jpg",
price:700000,
desc:"1 کیلو قارچ سوخاری"
}

],

//==============
//اسنک
//==============

snack:[

{
id:1,
name:"اسنک ویژه محسن",
image:"images/products/snack-special.jpg",
price:300000,
desc:"گوشت گوساله، فیله مرغ، قارچ، پنیر، فلفل دلمه، ذرت، آویشن"
},

{
id:2,
name:"اسنک رست بیف",
image:"images/products/snack-roastbeef.jpg",
price:250000,
desc:"گوشت گوساله رست شده، قارچ، فلفل دلمه، پنیر، آویشن"
},

{
id:3,
name:"اسنک مرغ و قارچ",
image:"images/products/snack-chicken.jpg",
price:210000,
desc:"فیله مرغ، قارچ، پنیر، فلفل دلمه، آویشن"
},

{
id:4,
name:"اسنک مخلوط",
image:"images/products/snack-mix.jpg",
price:160000,
desc:"کالباس مارتا، قارچ، پنیر، فلفل دلمه، آویشن"
}

],

//============
//نوشیدنی
//============

drinks:[

{
id:1,
name:"کوکاکولا",
price:35000,
desc:"بطری ۳۰۰ میلی‌لیتری"
},

{
id:2,
name:"فانتا",
price:60000,
desc:"بطری ۳۰۰ میلی‌لیتری"
},

{
id:3,
name:"اسپرایت",
price:60000,
desc:"بطری ۳۰۰ میلی‌لیتری"
},

{
id:4,
name:"دوغ",
price:60000,
desc:"دوغ سنتی"
},

{
id:5,
name:"دلستر",
price:75000,
desc:"در طعم‌های مختلف"
},

{
id:6,
name:"آب معدنی",
price:20000,
desc:"بطری ۵۰۰ میلی‌لیتری"
},

{
id:7,
name:"لیموناد",
price:85000,
desc:"لیموناد طبیعی"
}

],

//===============
//دسر
//===============

dessert:[

{
id:1,
name:"چیز کیک اورئو",
image:"images/products/oreo-cheesecake.jpg",
price:220000,
desc:"چیزکیک خامه‌ای با بیسکویت اورئو و سس شکلات"
},

{
id:2,
name:"چیز کیک لوتوس",
image:"images/products/lotus-cheesecake.jpg",
price:220000,
desc:"چیزکیک خامه‌ای با کرم و بیسکویت لوتوس کاراملی"
},

{
id:3,
name:"چیز کیک نوتلا",
image:"images/products/nutella-cheesecake.jpg",
price:220000,
desc:"چیزکیک خامه‌ای با کرم نوتلا"
},

{
id:4,
name:"چیز کیک شکلاتی",
image:"images/products/chocolate-cheesecake.jpg",
price:220000,
desc:"چیزکیک خامه‌ای با لایه‌ای از شکلات و گاناش"
},

{
id:5,
name:"کیک روز",
image:"images/products/cake-day.jpg",
price:120000,
desc:"کیک تازه روز، تهیه‌شده با طعم متغیر"
},

{
id:6,
name:"کوکی",
image:"images/products/cookie.jpg",
price:90000,
desc:"کوکی تازه شکلاتی"
}

],

//===============
// صبحانه
//===============

breakfast: [

{
id: 1,
name: "بشقاب صبحانه ایرانی",
image: "images/products/iranian-breakfast.jpg",
price: 380000,
desc: "املت گوجه، پنیر، گردو، خیار، گوجه، خامه، عسل"
},

{
id: 2,
name: "بشقاب صبحانه ایتالیایی",
image: "images/products/italian-breakfast.jpg",
price: 390000,
desc: "لوبیا و قارچ، نیمرو، ژامبون، کوکتل، گوجه، کاهو، زیتون، نان تست"
},

{
id: 3,
name: "بشقاب صبحانه ترکی",
image: "images/products/turkish-breakfast.jpg",
price: 400000,
desc: "سوسیس، تخم مرغ، خیار، گوجه، پنیر، مربا، کره، گردو، دورچین"
},

{
id: 4,
name: "بشقاب صبحانه اسپانیایی",
image: "images/products/spanish-breakfast.jpg",
price: 340000,
desc: "املت اسپانیایی، گوجه، خیارشور، دورچین"
}

],

//====================
// کافی بار
//====================

coffee: [

{
id: 1,
name: "اسپرسو",
image: "images/products/espresso.jpg",
price: 100000,
desc: ""
},

{
id: 2,
name: "آمریکانو",
image: "images/products/americano.jpg",
price: 120000,
desc: ""
},

{
id: 3,
name: "کاپوچینو",
image: "images/products/cappuccino.jpg",
price: 150000,
desc: ""
},

{
id: 4,
name: "لاته",
image: "images/products/latte.jpg",
price: 170000,
desc: ""
},

{
id: 5,
name: "موکا",
image: "images/products/mocha.jpg",
price: 200000,
desc: ""
},

{
id: 6,
name: "کارامل ماکیاتو",
image: "images/products/caramel-macchiato.jpg",
price: 210000,
desc: "اسپرسو، شیر بخار داده شده، سیروپ وانیل، سس کارامل"
}

],

//===============
//نوشیدنی گرم
//==============

hotDrinks: [

{
id: 1,
name: "چای مراکشی",
image: "images/products/moroccan-tea.jpg",
price: 150000,
desc: "نعناع، چای سبز، زعفران، نبات"
},

{
id: 2,
name: "دمنوش آرامش بخش",
image: "images/products/relax-tea.jpg",
price: 180000,
desc: "گل گاوزبان، سنبل الطیب، اسطوخودوس، گل محمدی"
},

{
id: 3,
name: "دمنوش انرژی زا",
image: "images/products/energy-tea.jpg",
price: 190000,
desc: "به‌لیمو، زعفران، بابونه، دارچین"
},

{
id: 4,
name: "چای سیاه",
image: "images/products/black-tea.jpg",
price: 90000,
desc: ""
},

{
id: 5,
name: "هات چاکلت",
image: "images/products/hot-chocolate.jpg",
price: 170000,
desc: ""
},

{
id: 6,
name: "ماسالا",
image: "images/products/masala.jpg",
price: 140000,
desc: ""
}

],

//==============
//نوشیدنی سرد
//==============

coldDrinks: [

{
id: 1,
name: "واین ست",
image: "images/products/wine-best.jpg",
price: 245000,
desc: "انگور تخمیری، آب میوه‌های بری، لیمو، سماق"
},

{
id: 2,
name: "ویولتا",
image: "images/products/violata.jpg",
price: 220000,
desc: "ویولتا، بلوبری، آب انار، لیمو"
},

{
id: 3,
name: "موهیتو",
image: "images/products/mojito.jpg",
price: 170000,
desc: ""
},

{
id: 4,
name: "لیموناد",
image: "images/products/lemonade.jpg",
price: 150000,
desc: ""
}

],

//================
//شیک
//================

shakes: [

{
id: 1,
name: "شیک نوتلا",
image: "images/products/nutella-shake.jpg",
price: 340000,
desc: ""
},

{
id: 2,
name: "شیک لوتوس",
image: "images/products/lotus-shake.jpg",
price: 315000,
desc: ""
},

{
id: 3,
name: "شیک پسته زعفران",
image: "images/products/pistachio-saffron-shake.jpg",
price: 390000,
desc: ""
}

],

//================
// اسپشیال هات
//================

specialHot: [

{
id: 1,
name: "کرمی پستاچیو",
image: "images/products/creamy-pistachio.jpg",
price: 275000,
desc: "کرم پسته، زعفران، شیر، خامه، بیسکویت"
},

{
id: 2,
name: "ماچا لاته",
image: "images/products/matcha-latte.jpg",
price: 250000,
desc: "پودر ماچا ژاپنی، شیر بخار داده شده، کف ابریشمی"
},

{
id: 3,
name: "اسپیرولینا لاته",
image: "images/products/spirulina-latte.jpg",
price: 190000,
desc: "دم‌کرده اسپیرولینا، شیر بخار داده شده، کف ابریشمی"
}

],

//================
//ایس کافی
//================

iceCoffee: [

{
id: 1,
name: "آیس پستاچیو آفوگاتو",
image: "images/products/pistachio-affogato.jpg",
price: 215000,
desc: "پسته، بستنی وانیلی، اسپرسو"
},

{
id: 2,
name: "آیس اورنج کافی",
image: "images/products/orange-coffee.jpg",
price: 225000,
desc: "آب پرتقال، سیروپ وانیل، قهوه"
},

{
id: 3,
name: "آیس کارامل ماکیاتو",
image: "images/products/iced-caramel-macchiato.jpg",
price: 210000,
desc: ""
},

{
id: 4,
name: "آیس لاته",
image: "images/products/iced-latte.jpg",
price: 150000,
desc: ""
},

{
id: 5,
name: "آیس موکا",
image: "images/products/iced-mocha.jpg",
price: 200000,
desc: ""
},

{
id: 6,
name: "آیس آمریکانو",
image: "images/products/iced-americano.jpg",
price: 110000,
desc: ""
},

{
id: 7,
name: "آیس ماچا لاته",
image: "images/products/iced-matcha-latte.jpg",
price: 250000,
desc: "شیر، دم شده ماچا"
},

{
id: 8,
name: "آیس اسپیرولینا",
image: "images/products/iced-spirulina.jpg",
price: 240000,
desc: "توت فرنگی، شیر، دم شده اسپیرولینا"
}

],

//================
//اسموتی
//================

smoothie:[

{
id:1,
name:"اسموتی گرین",
image:"images/products/green-smoothie.jpg",
price:345000,
desc:"کرفس، آووکادو، ریحان ایتالیایی، میکس میوه‌های سبز"
},

{
id:2,
name:"اسموتی تروپیکال",
image:"images/products/tropical-smoothie.jpg",
price:435000,
desc:"پاپایا، اناناس، فیسالیس و میوه‌های استوایی"
},

{
id:3,
name:"اسموتی بری",
image:"images/products/berry-smoothie.jpg",
price:280000,
desc:"میوه‌های بری، ماست یونانی، گراناداین"
},

{
id:4,
name:"اسموتی گریپ فروت",
image:"images/products/grapefruit-smoothie.jpg",
price:330000,
desc:"گریپ فروت، ماست یونانی، عسل، یخ"
}

],

//=================
//آبمیوه طبیعی
//=================

juice:[

{
id:1,
name:"آب پرتقال",
image:"images/products/orange.jpg",
price:130000,
desc:""
},

{
id:2,
name:"آب سیب",
image:"images/products/apple.jpg",
price:140000,
desc:""
},

{
id:3,
name:"آب هویج",
image:"images/products/carrot.jpg",
price:170000,
desc:""
},

{
id:4,
name:"آب هندوانه",
image:"images/products/watermelon.jpg",
price:100000,
desc:""
},

{
id:5,
name:"آب طالبی",
image:"images/products/cantaloupe.jpg",
price:130000,
desc:""
},

{
id:6,
name:"شیر موز",
image:"images/products/banana-milk.jpg",
price:170000,
desc:""
},

{
id:7,
name:"آب انبه",
image:"images/products/mango-juice.jpg",
price:290000,
desc:""
},

{
id:8,
name:"آب سیب هویج",
image:"images/products/apple-carrot-juice.jpg",
price:190000,
desc:""
},

{
id:9,
name:"آب هویج بستنی",
image:"images/products/carrot-icecream.jpg",
price:195000,
desc:""
},

{
id:10,
name:"آب طالبی بستنی",
image:"images/products/melon-icecream.jpg",
price:210000,
desc:""
},

{
id:11,
name:"شیر موز بستنی",
image:"images/products/banana-milk-icecream.jpg",
price:230000,
desc:""
},

{
id:12,
name:"شیر موز توت فرنگی",
image:"images/products/banana-strawberry-milk.jpg",
price:230000,
desc:""
},

{
id:13,
name:"شیر موز طالبی",
image:"images/products/banana-melon-milk.jpg",
price:150000,
desc:""
},

{
id:14,
name:"شیر موز پسته",
image:"images/products/banana-pistachio-milk.jpg",
price:400000,
desc:""
},

{
id:15,
name:"آب طالبی پسته‌ای",
image:"images/products/cantaloupe-pistachio.jpg",
price:210000,
desc:"آب طالبی تازه، بستنی پسته‌ای"
},

{
id:16,
name:"آب هویج پسته‌ای",
image:"images/products/carrot-pistachio.jpg",
price:195000,
desc:"آب هویج تازه، بستنی پسته‌ای"
},

{
id:17,
name:"شیر موز پسته‌ای",
image:"images/products/banana-pistachio-milk2.jpg",
price:230000,
desc:"شیر موز تازه، بستنی پسته‌ای"
}

]

};

//====================================
// تشخیص دسته بندی
//====================================

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const categoryTitles = {

burger:"🍔 منوی برگر",

pizza:"🍕 منوی پیتزا",

sandwich:"🌭 منوی ساندویچ",

snack:"🥪 منوی اسنک",

pasta:"🍝 منوی پاستا",

salad:"🥗 منوی سالاد",

chicken:"🍗 منوی سوخاری",

appetizer:"🍟 منوی پیش غذا",

drinks:"🥤 منوی نوشیدنی",

dessert:"🍰 منوی دسر",

breakfast:"🍳 منوی صبحانه",

coffee:"☕ منوی قهوه",

hotDrinks:"🍵 منوی نوشیدنی گرم",

coldDrinks:"🥤 منوی نوشیدنی سرد",

iceCoffee:"🧋 منوی آیس کافی بار",

specialHot:"🔥 منوی اسپشیال هات",

shakes:"🥤 منوی شیک",

smoothie:"🍹 منوی اسموتی",

juice:"🧃 منوی آبمیوه طبیعی",

};

//====================================
// متغیرها
//====================================

let selectedSize = "single";
let currentPrice = 0;

let selectedFood = null;

//====================================
// ساخت کارت ها
//====================================

function loadFoods() {

    console.log("category:", category);
    console.log("foods:", foods[category]);

    if (!foods[category]) return;

    const container = document.getElementById("foodsContainer");
    const title = document.getElementById("pageTitle");

    title.innerText = categoryTitles[category];

    container.innerHTML = "";

    foods[category].forEach((food, index) => {

        container.innerHTML += `

        <div class="category-card ${category==="drinks" ? "no-image" : ""}" onclick="showFood(${index})">

            ${category !== "drinks"
    ? `<img src="${food.image}" class="category-image">`
    : ""
}

            <h2>${food.name}</h2>

            <p class="food-price">
            ${(food.prices ? Object.values(food.prices)[0] : food.price).toLocaleString()} تومان
            </p>

        </div>

        `;

    });

}

//====================================
// نمایش مودال
//====================================

function showFood(index){

    selectedFood = foods[category][index];

    document.getElementById("foodName").innerText = selectedFood.name;

    document.getElementById("foodDesc").innerText = selectedFood.desc;

    const img = document.getElementById("foodImage");

if (selectedFood.image) {
    img.src = selectedFood.image;
    img.style.display = "block";
} else {
    img.style.display = "none";
}

    console.log(category);
    console.log(selectedFood);
    console.log(selectedFood.prices);
    
    if(selectedFood.prices){

    document.getElementById("pizzaSizeBox").style.display = "block";

    const options = document.getElementById("sizeOptions");

    options.innerHTML = "";

Object.keys(selectedFood.prices).forEach((key,index)=>{

    const labels = {
        single: "کوچک",
        medium: "متوسط",
        family: "خانواده",
        simple: "ساده",
        cheese: "پنیری"
    };

    let text = labels[key] || key;

    options.innerHTML += `
        <label>
            <input
                type="radio"
                name="pizzaSize"
                value="${key}"
                ${index===0 ? "checked" : ""}
                onchange="changePizzaSize()">

            ${text}
        </label>
        <br>
    `;
});

selectedSize = Object.keys(selectedFood.prices)[0];
currentPrice = selectedFood.prices[selectedSize];

} else {

    document.getElementById("pizzaSizeBox").style.display = "none";
    currentPrice = selectedFood.price;
}
    document.getElementById("foodPrice").innerText =
    currentPrice.toLocaleString() + " تومان";

document.getElementById("foodModal").style.display = "flex";
}
    
function changePizzaSize(){

    if(!selectedFood.prices) return;

    selectedSize = document.querySelector(
        'input[name="pizzaSize"]:checked'
    ).value;

    currentPrice = selectedFood.prices[selectedSize];

    document.getElementById("foodPrice").innerText =
        currentPrice.toLocaleString() + " تومان";

}

//====================================
// بستن مودال
//====================================

function closeModal() {

    document.getElementById("foodModal").style.display = "none";

}

window.onclick = function (event) {

    const modal = document.getElementById("foodModal");

    if (event.target === modal) {

        closeModal();

    }

};

//====================================
// جستجوی غذا
//====================================

//====================================
// نرمال‌سازی حروف فارسی (یکی کردن variations)
//====================================
function normalizePersian(text) {
    return text
        // آ ا أ إ → الف ساده
        .replace(/[آاأإ]/g, 'ا')
        // ى ي → ی
        .replace(/[ىي]/g, 'ی')
        // ك → ک
        .replace(/ك/g, 'ک')
        // فاصله‌های اضافی
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

//====================================
// جستجوی غذا (با پشتیبانی از variations)
//====================================
function searchFood() {
    const rawValue = document.getElementById("searchBox").value;
    const normalizedSearch = normalizePersian(rawValue);

    const cards = document.querySelectorAll(".category-card");

    cards.forEach(card => {
        const title = card.querySelector("h2").innerText;
        const normalizedTitle = normalizePersian(title);

        if (normalizedTitle.includes(normalizedSearch)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

//====================================
// انیمیشن نمایش کارت‌ها
//====================================

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".category-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = ".4s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 80);

    });

});

//====================================
// بستن مودال با کلید ESC
//====================================

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closeModal();

    }

});

//====================================
// فرمت قیمت
//====================================

function formatPrice(price) {

    return price.toLocaleString("fa-IR") + " تومان";

}

window.onload = () => {
    loadFoods();
};