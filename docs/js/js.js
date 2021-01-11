$(document).ready(function() {
    var storeArray=[
        {
            name:'胖廚義大利麵',
            eng:'palmpasta',
            location:'汐止區',
            landing:'https://forms.gle/RLTbCqgaA2HFP8gY9',
            fill:false,
            
        },{
            name:'hala chicken',
            eng:'halachicken',
            location:'大安區',
            landing:'https://forms.gle/ij25ChV9vtHFYnSa6',
            fill:false,
        },{
            name:'hokenbits',
            eng:'hokenbits',
            location:'大安區',
            landing:'https://forms.gle/Qu6XACknoad7ovG27',
            fill:false,
        },{
            name:"Pimo's Café<br>皮莫咖啡",
            eng:'pimocafe',
            location:'中山區',
            landing:'https://forms.gle/7FHUzyifDus6qi4KA',
            fill:false,
        },{
            name:"98 Nine Eight<br>Land 南港中研店",
            eng:'98nineeightland',
            location:'南港區',
            landing:'https://forms.gle/CLHeG6W2H21vK9zb7',
            fill:false,
        },{
            name:"麵屋牛一雞骨牛肉麵",
            eng:'beefonebeefnoodles',
            location:'大安區',
            landing:'https://forms.gle/hn9FhA5VpA3X7sq18',
            fill:false,
        },{
            name:"姐夫重慶麵館",
            eng:'jie-fu',
            location:'新店區',
            landing:'https://forms.gle/hwP9bJw9EdRBPm4U8',
            fill:false,
        },{
            name:"四季香饅頭南京店",
            eng:'jessybun',
            location:'松山區',
            landing:'https://forms.gle/nFiqLs3u4oemHtaRA',
            fill:false,
        },{
            name:"四季香頂級手工饅頭",
            eng:'jessybun',
            location:'中山區',
            landing:'https://forms.gle/HKyiwHC8kzc4xneh9',
            fill:false,
        },{
            name:"新丼",
            eng:'newdonburi',
            location:'大同區',
            landing:'https://forms.gle/S4Yy1vi4ToFGaXK1A',
            fill:false,
        },{
            name:"來搭伙吧 RENDEZVOUS BAR",
            eng:'rendezvous',
            location:'中山區',
            landing:'https://forms.gle/JHRGHsciMwxR4Yt86',
            fill:true,
        },{
            name:"Oskafe coffee wine sandwich",
            eng:'oskafecoffee',
            location:'中山區',
            landing:'https://forms.gle/HaDqaJQbAyNmt8C8A',
            fill:false,
        },{
            name:"同安樂一店",
            eng:'tonganness',
            location:'大同區',
            landing:'https://forms.gle/C3NwHGSGqRsc1Dd16',
            fill:false,
        },{
            name:"同安樂二店",
            eng:'tonganness',
            location:'大同區',
            landing:'https://forms.gle/C3NwHGSGqRsc1Dd16',
            fill:false,
        },{
            name:"ezFit cafe",
            eng:'ezfitcafe',
            location:'松山區',
            landing:'https://forms.gle/N99y2kqFyThc23Ed6',
            fill:false,
        },{
            name:"秋紅園野菜鍋物",
            eng:'yuan86',
            location:'松山區',
            landing:'https://forms.gle/ynbjeskUo4AVvoUp6',
            fill:false,
        },{
            name:"宮田白鶴創意料理",
            eng:'gongtianbaihe',
            location:'中山區',
            landing:'https://forms.gle/Kwvax9mHNNZ1aLzL7',
            fill:false,
        },{
            name:"Dr.salt",
            eng:'drsalt',
            location:'四平商圈',
            landing:'https://forms.gle/Gtt7y5B78fAd1fBt5',
            fill:false,
        },{
            name:"牧牧沙拉 Mooosalad",
            eng:'mooosalad',
            location:'松山區',
            landing:'https://forms.gle/6pwan6z5M2JoyzZk6',
            fill:false,
        },{
            name:"吾糖派健康食品",
            eng:'wutangpie',
            location:'信義區',
            landing:'https://forms.gle/mtCoacvUdqZfVKDg8',
            fill:false,
        },{
            name:"LIFE KITCHEN 生活倉廚｜萬華門市",
            eng:'lifekitchen',
            location:'萬華區',
            landing:'https://forms.gle/HtabGRWJskviqVMu6',
            fill:false,
        },{
            name:"LIFE KITCHEN 生活倉廚｜大安門市",
            eng:'lifekitchen',
            location:'大安區',
            landing:'https://forms.gle/ZfVEkaQEi6uGaPCd7',
            fill:false,
        },{
            name:"LIFE KITCHEN 生活倉廚｜內湖門市",
            eng:'lifekitchen',
            location:'內湖區',
            landing:'https://forms.gle/3qDb17cxry6mLu9Y7',
            fill:false,
        },{
            name:"御膳煲養生雞湯館",
            eng:'ysbsoup',
            location:'松山區',
            landing:'https://forms.gle/AtnzPE9Ti97nCzYu7',
            fill:false,
        },{
            name:"Le Ming麵食精釀餐酒館—台北中山店",
            eng:'leming',
            location:'中山區',
            landing:'https://forms.gle/wEqDHyPg2vqLcF2aA',
            fill:true,
        },{
            name:"Le Ming麵食精釀餐酒館—林口店",
            eng:'leming',
            location:'林口區',
            landing:'https://forms.gle/BXD2WyPsggHCThY97',
            fill:false,
        },{
            name:"Provegcarb<br>頗微康餐飲工作室",
            eng:'provegcarb',
            location:'松山區',
            landing:'https://forms.gle/2RWhaT9UZ7BeEXY1A',
            fill:false,
        },{
            name:"蓮坊素食",
            eng:'lian-fang-su-shi',
            location:'信義區',
            landing:'https://forms.gle/youPrMtW5eYTXENb7',
            fill:false,
        },{
            name:"果然文創",
            eng:'surenatural',
            location:'大安區',
            landing:'https://forms.gle/HRafRGPkpf9BxH2NA',
            fill:false,
        },{
            name:"蔬漫小姐Miss Shu maan. House",
            eng:'missshu',
            location:'信義區',
            landing:'https://forms.gle/iKuGJAh2Y2AHLNmi6',
            fill:false,
        },{
            name:"HBJ kitchen<br>舒肥健康餐",
            eng:'hbjkitchen',
            location:'中山區',
            landing:'https://forms.gle/3cYFs5JpSBcm71JB6',
            fill:false,
        },{
            name:"食采集思(民生店)",
            eng:'healthyfoodisgood',
            location:'松山區',
            landing:'https://forms.gle/PvvjbhV3srosqce99',
            fill:false,
        },{
            name:"第七棟熗鍋麵",
            eng:'changcc',
            location:'板橋區',
            landing:'https://forms.gle/eqvimBWxiugrB3786',
            fill:false,
        },{
            name:"魚缸珈啡",
            eng:'coffish',
            location:'蘆洲區',
            landing:'https://forms.gle/EQFnj7MPxZJjaLBh8',
            fill:false,
        },{
            name:"鼎膳養生料理",
            eng:'ding-shan',
            location:'中山區',
            landing:'https://forms.gle/k5i8PvkUPPG9MnFBA',
            fill:false,
        },{
            name:"素匯雅集",
            eng:'vegetarian',
            location:'松山區',
            landing:'https://forms.gle/yD8TSbRmELAzX9oF8',
            fill:false,
        },{
            name:"Holy Chef 聖伙餐廚",
            eng:'holychef',
            location:'大安區',
            landing:'https://forms.gle/Q8VYj3MJ38tFaYS49',
            fill:false,
        },{
            name:"Hungry Bar好餓",
            eng:'hungrybar',
            location:'松山區',
            landing:'https://forms.gle/77GgwuSJo4bg7k2L8',
            fill:false,
        },{
            name:"uMeal 優膳糧",
            eng:'umeal',
            location:'信義區',
            landing:'https://forms.gle/5Qg1YAX6wUWGqntC8',
            fill:false,
        },{
            name:"稻穗輕食",
            eng:'daosuilightmeal',
            location:'中山區',
            landing:'https://forms.gle/jTXQgxXdFFGoS6Zb9',
            fill:false,
        },{
            name:"亞里士餐廳",
            eng:'alicesteakhouse',
            location:'中山區',
            landing:'https://forms.gle/KiP5xc6aeyuzvoyG9',
            fill:false,
        },{
            name:"Q POT 蛋蛋獨享鍋 ",
            eng:'qpot',
            location:'松山區',
            landing:'https://forms.gle/q4Qq3L8HD2t9iEPBA',
            fill:false,
        }
    ];

    function addList(num,i){
        var item = $('<li class="store__list">')
        var imgurl = 'url(img/store/'+num.eng+'.jpg)'
        item.css('background-image',imgurl);
        if(num.fill==true){
            item.append("<div class='overray--full'>名額已滿</div>");
        }else{
            item.append('<a href="'+num.landing+'" class="link" target="_blank" ></a>');
        }
        item.append("<div class='overray'></div>");
        item.append("<h3>"+num.name+"</h3>");
        item.append("<h4>"+num.location+"</h4>");



        $('ul#js_store').append(item);
    }
    for(var i =0;i<storeArray.length;i++){
        addList(storeArray[i],i);

    }
    

});

/* <li class="store__list" style="background-image: url(img/store/store1.png);">
<a href="yahoo.com" class="link"></a>
<div class="overray"></div>
<h3>LIFE KITCHEN<br>生活倉廚|大安門市</h3>
<h4>大安區</h4>
</li> */