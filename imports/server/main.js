// import { StocksTable } from '/import/collections.js'
//
// Meteor.startup(function(){
//   const StockData = [
//  {
//    "stockCode": 1,
//    "stockCn": "長和",
//    "stockEn": "CKH HOLDINGS",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2,
//    "stockCn": "中電控股",
//    "stockEn": "CLP HOLDINGS",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3,
//    "stockCn": "香港中華煤氣",
//    "stockEn": "HK & CHINA GAS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 4,
//    "stockCn": "九龍倉集團",
//    "stockEn": "WHARF HOLDINGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 5,
//    "stockCn": "匯豐控股",
//    "stockEn": "HSBC HOLDINGS",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 6,
//    "stockCn": "電能實業",
//    "stockEn": "POWER ASSETS",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 7,
//    "stockCn": "凱富能源",
//    "stockEn": "HOIFU ENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 8,
//    "stockCn": "電訊盈科",
//    "stockEn": "PCCW",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 9,
//    "stockCn": "九號運通",
//    "stockEn": "NINE EXPRESS",
//    "stockBoardLot": 6000
//  },
//  {
//    "stockCode": 10,
//    "stockCn": "恒隆集團",
//    "stockEn": "HANG LUNG GROUP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 11,
//    "stockCn": "恒生銀行",
//    "stockEn": "HANG SENG BANK",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 12,
//    "stockCn": "恒基地產",
//    "stockEn": "HENDERSON LAND",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 14,
//    "stockCn": "希慎興業",
//    "stockEn": "HYSAN DEV",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 15,
//    "stockCn": "盈信控股",
//    "stockEn": "VANTAGE INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 16,
//    "stockCn": "新鴻基地產",
//    "stockEn": "SHK PPT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 17,
//    "stockCn": "新世界發展",
//    "stockEn": "NEW WORLD DEV",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 18,
//    "stockCn": "東方報業集團",
//    "stockEn": "ORIENTAL PRESS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 19,
//    "stockCn": "太古股份公司Ａ",
//    "stockEn": "SWIRE PACIFIC A",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 20,
//    "stockCn": "會德豐",
//    "stockEn": "WHEELOCK",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 21,
//    "stockCn": "大中華地產控股",
//    "stockEn": "GREAT CHI PPT",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 22,
//    "stockCn": "茂盛控股",
//    "stockEn": "MEXAN",
//    "stockBoardLot": 40000
//  },
//  {
//    "stockCode": 23,
//    "stockCn": "東亞銀行",
//    "stockEn": "BANK OF E ASIA",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 24,
//    "stockCn": "寶威控股",
//    "stockEn": "BURWILL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 25,
//    "stockCn": "CHEVALIER INT'L",
//    "stockEn": "CHEVALIER INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 26,
//    "stockCn": "中華汽車",
//    "stockEn": "CHINA MOTOR BUS",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 27,
//    "stockCn": "銀河娛樂",
//    "stockEn": "GALAXY ENT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 28,
//    "stockCn": "天安",
//    "stockEn": "TIAN AN",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 29,
//    "stockCn": "達力集團",
//    "stockEn": "DYNAMIC HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 30,
//    "stockCn": "萬隆控股集團",
//    "stockEn": "BAN LOONG HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 31,
//    "stockCn": "航天控股",
//    "stockEn": "CHINA AEROSPACE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 32,
//    "stockCn": "港通控股",
//    "stockEn": "CROSS-HAR(HOLD)",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 33,
//    "stockCn": "亞投金融集團",
//    "stockEn": "ASIA INV FIN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 34,
//    "stockCn": "九龍建業",
//    "stockEn": "KOWLOON DEV",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 35,
//    "stockCn": "遠東發展",
//    "stockEn": "FE CONSORT INTL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 36,
//    "stockCn": "遠東控股國際",
//    "stockEn": "FE HLDGS INTL",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 37,
//    "stockCn": "遠東酒店實業",
//    "stockEn": "FE HOTELS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 38,
//    "stockCn": "第一拖拉機股份",
//    "stockEn": "FIRST TRACTOR",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 39,
//    "stockCn": "中國北大荒",
//    "stockEn": "CH BEIDAHUANG",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 40,
//    "stockCn": "金山工業",
//    "stockEn": "GOLD PEAK",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 41,
//    "stockCn": "鷹君",
//    "stockEn": "GREAT EAGLE H",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 42,
//    "stockCn": "東北電氣",
//    "stockEn": "NE ELECTRIC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 43,
//    "stockCn": "卜蜂國際",
//    "stockEn": "C.P. POKPHAND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 44,
//    "stockCn": "香港飛機工程",
//    "stockEn": "HAECO",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 45,
//    "stockCn": "大酒店",
//    "stockEn": "HK&S HOTELS",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 46,
//    "stockCn": "科聯系統",
//    "stockEn": "COMPUTER & TECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 47,
//    "stockCn": "合興集團",
//    "stockEn": "HOP HING GROUP",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 48,
//    "stockCn": "中國汽車內飾",
//    "stockEn": "C AUTO INT DECO",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 50,
//    "stockCn": "香港小輪（集團）",
//    "stockEn": "HK FERRY (HOLD)",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 51,
//    "stockCn": "海港企業",
//    "stockEn": "HARBOUR CENTRE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 52,
//    "stockCn": "FAIRWOOD HOLD",
//    "stockEn": "FAIRWOOD HOLD",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 53,
//    "stockCn": "國浩集團",
//    "stockEn": "GUOCO GROUP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 54,
//    "stockCn": "合和實業",
//    "stockEn": "HOPEWELL HOLD",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 55,
//    "stockCn": "中星集團控股",
//    "stockEn": "NEWAY GROUP",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 56,
//    "stockCn": "聯合地產（香港）",
//    "stockEn": "ALLIED PPT (HK)",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 57,
//    "stockCn": "震雄集團",
//    "stockEn": "CHEN HSONG HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 58,
//    "stockCn": "新威國際",
//    "stockEn": "SUNWAY INT'L",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 59,
//    "stockCn": "天譽置業",
//    "stockEn": "SKYFAME REALTY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 60,
//    "stockCn": "香港食品投資",
//    "stockEn": "HK FOOD INV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 61,
//    "stockCn": "北亞資源",
//    "stockEn": "NORTH ASIA RES",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 62,
//    "stockCn": "載通",
//    "stockEn": "TRANSPORT INT'L",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 63,
//    "stockCn": "榮豐國際",
//    "stockEn": "WINFOONG INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 64,
//    "stockCn": "結好控股",
//    "stockEn": "GET NICE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 65,
//    "stockCn": "弘海高新資源",
//    "stockEn": "GRAND OCEAN AR",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 66,
//    "stockCn": "港鐵公司",
//    "stockEn": "MTR CORPORATION",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 67,
//    "stockCn": "旭光高新材料",
//    "stockEn": "LUMENA NEWMAT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 68,
//    "stockCn": "利興發展",
//    "stockEn": "LEE HING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 69,
//    "stockCn": "香格里拉（亞洲）",
//    "stockEn": "SHANGRI-LA ASIA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 70,
//    "stockCn": "海王集團",
//    "stockEn": "NEPTUNE GROUP",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 71,
//    "stockCn": "美麗華酒店",
//    "stockEn": "MIRAMAR HOTEL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 72,
//    "stockCn": "現代傳播",
//    "stockEn": "MODERN MEDIA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 73,
//    "stockCn": "亞洲果業",
//    "stockEn": "ASIAN CITRUS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 75,
//    "stockCn": "渝太地產",
//    "stockEn": "Y.T. REALTY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 76,
//    "stockCn": "南海石油",
//    "stockEn": "SOUTH SEA PETRO",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 77,
//    "stockCn": "進智公共交通",
//    "stockEn": "AMS TRANSPORT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 78,
//    "stockCn": "REGAL INT'L",
//    "stockEn": "REGAL INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 79,
//    "stockCn": "世紀建業",
//    "stockEn": "CENTURY LEGEND",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 81,
//    "stockCn": "中國海外宏洋集團",
//    "stockEn": "CH OVS G OCEANS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 82,
//    "stockCn": "第一視頻",
//    "stockEn": "V1 GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 83,
//    "stockCn": "信和置業",
//    "stockEn": "SINO LAND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 84,
//    "stockCn": "寶光實業",
//    "stockEn": "STELUX HOLDINGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 85,
//    "stockCn": "中國電子",
//    "stockEn": "CHINA ELECTRON",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 86,
//    "stockCn": "新鴻基公司",
//    "stockEn": "SUN HUNG KAI CO",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 87,
//    "stockCn": "太古股份公司Ｂ",
//    "stockEn": "SWIRE PACIFIC B",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 88,
//    "stockCn": "TAI CHEUNG HOLD",
//    "stockEn": "TAI CHEUNG HOLD",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 89,
//    "stockCn": "大生地產",
//    "stockEn": "TAI SANG LAND",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 90,
//    "stockCn": "琥珀能源",
//    "stockEn": "AMBER ENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 91,
//    "stockCn": "標準資源控股",
//    "stockEn": "INT'L STD RES",
//    "stockBoardLot": 50000
//  },
//  {
//    "stockCode": 92,
//    "stockCn": "CHAMPION TECH",
//    "stockEn": "CHAMPION TECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 93,
//    "stockCn": "TERMBRAY IND",
//    "stockEn": "TERMBRAY IND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 94,
//    "stockCn": "綠心集團",
//    "stockEn": "GREENHEART GP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 95,
//    "stockCn": "綠景中國地產",
//    "stockEn": "LVGEM CHINA",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 96,
//    "stockCn": "ＹＵＳＥＩ",
//    "stockEn": "YUSEI",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 97,
//    "stockCn": "恒基發展",
//    "stockEn": "HENDERSON INV",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 98,
//    "stockCn": "興發鋁業",
//    "stockEn": "XINGFA ALUM",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 99,
//    "stockCn": "王氏國際",
//    "stockEn": "WONG'S INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 100,
//    "stockCn": "白馬戶外媒體",
//    "stockEn": "CLEAR MEDIA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 101,
//    "stockCn": "恒隆地產",
//    "stockEn": "HANG LUNG PPT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 102,
//    "stockCn": "凱升控股",
//    "stockEn": "SUMMIT ASCENT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 103,
//    "stockCn": "首長寶佳",
//    "stockEn": "SHOUGANG CENT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 104,
//    "stockCn": "ASIA COMM HOLD",
//    "stockEn": "ASIA COMM HOLD",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 105,
//    "stockCn": "凱聯國際酒店",
//    "stockEn": "ASSO INT HOTELS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 106,
//    "stockCn": "朗詩綠色地產",
//    "stockEn": "LANDSEA PPT",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 107,
//    "stockCn": "四川成渝高速公路",
//    "stockEn": "SICHUAN EXPRESS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 108,
//    "stockCn": "國銳地產",
//    "stockEn": "GR PROPERTIES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 109,
//    "stockCn": "天成國際",
//    "stockEn": "GOODRESOURCES",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 110,
//    "stockCn": "中國長遠",
//    "stockEn": "CHINA FORTUNE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 111,
//    "stockCn": "信達國際控股",
//    "stockEn": "CINDA INTL HLDG",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 112,
//    "stockCn": "勒泰商業地產",
//    "stockEn": "LT COMM REALEST",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 113,
//    "stockCn": "迪生創建",
//    "stockEn": "DICKSON CONCEPT",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 114,
//    "stockCn": "HERALD HOLD",
//    "stockEn": "HERALD HOLD",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 115,
//    "stockCn": "鈞濠集團",
//    "stockEn": "GRAND FIELD GP",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 116,
//    "stockCn": "周生生",
//    "stockEn": "CHOW SANG SANG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 117,
//    "stockCn": "天利控股集團",
//    "stockEn": "TIANLI HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 118,
//    "stockCn": "大同機械",
//    "stockEn": "COSMOS MACH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 119,
//    "stockCn": "保利置業集團",
//    "stockEn": "POLY PROPERTY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 120,
//    "stockCn": "COSMOPOL INT'L",
//    "stockEn": "COSMOPOL INT'L",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 121,
//    "stockCn": "卜蜂蓮花",
//    "stockEn": "C.P. LOTUS",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 122,
//    "stockCn": "鱷魚恤",
//    "stockEn": "CROCODILE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 123,
//    "stockCn": "越秀地產",
//    "stockEn": "YUEXIU PROPERTY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 124,
//    "stockCn": "粵海置地",
//    "stockEn": "GD LAND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 125,
//    "stockCn": "新興光學",
//    "stockEn": "SUN HING VISION",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 126,
//    "stockCn": "佳寧娜",
//    "stockEn": "CARRIANNA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 127,
//    "stockCn": "華人置業",
//    "stockEn": "CHINESE EST H",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 128,
//    "stockCn": "安寧控股",
//    "stockEn": "ENM HOLDINGS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 129,
//    "stockCn": "泛海集團",
//    "stockEn": "ASIA STANDARD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 130,
//    "stockCn": "慕詩國際",
//    "stockEn": "MOISELLE INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 131,
//    "stockCn": "卓能(集團)",
//    "stockEn": "CHEUK NANG HOLD",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 132,
//    "stockCn": "中國興業控股",
//    "stockEn": "CHINA INV HOLD",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 135,
//    "stockCn": "昆侖能源",
//    "stockEn": "KUNLUN ENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 136,
//    "stockCn": "恒騰網絡",
//    "stockEn": "HENGTEN NET",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 137,
//    "stockCn": "金輝集團",
//    "stockEn": "JINHUI HOLDINGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 138,
//    "stockCn": "中建富通",
//    "stockEn": "CCT FORTIS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 139,
//    "stockCn": "中國軟實力",
//    "stockEn": "CH SOFT POWER",
//    "stockBoardLot": 14000
//  },
//  {
//    "stockCode": 141,
//    "stockCn": "大中華集團",
//    "stockEn": "GREAT CHINA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 142,
//    "stockCn": "第一太平",
//    "stockEn": "FIRST PACIFIC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 143,
//    "stockCn": "GLOBAL TECH",
//    "stockEn": "GLOBAL TECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 144,
//    "stockCn": "招商局港口",
//    "stockEn": "CHINA MER PORT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 145,
//    "stockCn": "香港建屋貸款",
//    "stockEn": "HK BLDG & LOAN",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 146,
//    "stockCn": "TAI PING CARPET",
//    "stockEn": "TAI PING CARPET",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 147,
//    "stockCn": "超越集團",
//    "stockEn": "CHAOYUE GROUP",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 148,
//    "stockCn": "建滔化工",
//    "stockEn": "KINGBOARD CHEM",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 149,
//    "stockCn": "中國農產品交易",
//    "stockEn": "CH AGRI-PROD EX",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 151,
//    "stockCn": "中國旺旺",
//    "stockEn": "WANT WANT CHINA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 152,
//    "stockCn": "深圳國際",
//    "stockEn": "SHENZHEN INT'L",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 153,
//    "stockCn": "中國賽特",
//    "stockEn": "CHINA SAITE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 154,
//    "stockCn": "北京控股環境集團",
//    "stockEn": "BE ENVIRONMENT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 155,
//    "stockCn": "中國源暢",
//    "stockEn": "CHINA SOLAR",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 156,
//    "stockCn": "力寶華潤",
//    "stockEn": "LIPPO CHINA RES",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 157,
//    "stockCn": "自然美",
//    "stockEn": "NATURAL BEAUTY",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 158,
//    "stockCn": "萬邦投資",
//    "stockEn": "MELBOURNE ENT",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 159,
//    "stockCn": "布萊克萬礦業",
//    "stockEn": "BROCKMAN MINING",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 160,
//    "stockCn": "漢國置業",
//    "stockEn": "HON KWOK LAND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 161,
//    "stockCn": "中航國際控股",
//    "stockEn": "AVIC IHL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 162,
//    "stockCn": "世紀金花",
//    "stockEn": "CENTURY GINWA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 163,
//    "stockCn": "英皇國際",
//    "stockEn": "EMPEROR INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 164,
//    "stockCn": "中國寶力科技",
//    "stockEn": "CHINA BAOLI TEC",
//    "stockBoardLot": 25000
//  },
//  {
//    "stockCode": 165,
//    "stockCn": "中國光大控股",
//    "stockEn": "CHINA EB LTD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 166,
//    "stockCn": "新時代能源",
//    "stockEn": "NEWTIMES ENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 167,
//    "stockCn": "IDT INT'L",
//    "stockEn": "IDT INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 168,
//    "stockCn": "青島啤酒股份",
//    "stockEn": "TSINGTAO BREW",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 169,
//    "stockCn": "萬達酒店發展",
//    "stockEn": "WANDA HOTEL DEV",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 171,
//    "stockCn": "銀建國際",
//    "stockEn": "SILVER GRANT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 172,
//    "stockCn": "金榜集團",
//    "stockEn": "GOLDBOND GROUP",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 173,
//    "stockCn": "嘉華國際",
//    "stockEn": "K. WAH INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 174,
//    "stockCn": "盛洋投資",
//    "stockEn": "GEMINI INV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 175,
//    "stockCn": "吉利汽車",
//    "stockEn": "GEELY AUTO",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 176,
//    "stockCn": "聯太工業",
//    "stockEn": "UNITED PACIFIC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 177,
//    "stockCn": "江蘇寧滬高速公路",
//    "stockEn": "JIANGSU EXPRESS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 178,
//    "stockCn": "莎莎國際",
//    "stockEn": "SA SA INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 179,
//    "stockCn": "德昌電機控股",
//    "stockEn": "JOHNSON ELEC H",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 180,
//    "stockCn": "開達集團",
//    "stockEn": "KADER HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 181,
//    "stockCn": "閩港控股",
//    "stockEn": "FUJIAN HOLDINGS",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 182,
//    "stockCn": "協合新能源",
//    "stockEn": "CONCORD NE",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 183,
//    "stockCn": "宏輝集團",
//    "stockEn": "WINFULL GP",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 184,
//    "stockCn": "激成投資",
//    "stockEn": "KECK SENG INV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 185,
//    "stockCn": "正恒國際控股",
//    "stockEn": "ZH INT'L HOLD",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 186,
//    "stockCn": "GRANDE HOLDINGS",
//    "stockEn": "GRANDE HOLDINGS",
//    "stockBoardLot": 30000
//  },
//  {
//    "stockCode": 187,
//    "stockCn": "京城機電股份",
//    "stockEn": "JINGCHENG MAC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 188,
//    "stockCn": "新華匯富金融",
//    "stockEn": "SUNWAH KINGSWAY",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 189,
//    "stockCn": "東岳集團",
//    "stockEn": "DONGYUE GROUP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 190,
//    "stockCn": "香港建設(控股)",
//    "stockEn": "HKC (HOLDINGS)",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 191,
//    "stockCn": "麗新國際",
//    "stockEn": "LAI SUN INT'L",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 193,
//    "stockCn": "冠中地產",
//    "stockEn": "CAPITAL ESTATE",
//    "stockBoardLot": 15000
//  },
//  {
//    "stockCode": 194,
//    "stockCn": "廖創興企業",
//    "stockEn": "LIU CHONG HING",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 195,
//    "stockCn": "利海資源",
//    "stockEn": "L'SEA RESOURCES",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 196,
//    "stockCn": "宏華集團",
//    "stockEn": "HONGHUA GROUP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 197,
//    "stockCn": "亨泰",
//    "stockEn": "HENG TAI",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 198,
//    "stockCn": "星美控股",
//    "stockEn": "SMI HOLDINGS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 199,
//    "stockCn": "德祥地產",
//    "stockEn": "ITC PROPERTIES",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 200,
//    "stockCn": "新濠國際發展",
//    "stockEn": "MELCO INT'L DEV",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 201,
//    "stockCn": "華大酒店",
//    "stockEn": "MAGNIFICENT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 202,
//    "stockCn": "潤中國際控股",
//    "stockEn": "EVERCHINA INT'L",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 205,
//    "stockCn": "財訊傳媒",
//    "stockEn": "SEEC MEDIA",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 206,
//    "stockCn": "TSC集團",
//    "stockEn": "TSC GROUP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 207,
//    "stockCn": "大悅城地產",
//    "stockEn": "JOY CITY PPT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 208,
//    "stockCn": "保利達資產",
//    "stockEn": "POLYTEC ASSET",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 209,
//    "stockCn": "瀛晟科學",
//    "stockEn": "WINSHINE SCI",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 210,
//    "stockCn": "達芙妮國際",
//    "stockEn": "DAPHNE INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 211,
//    "stockCn": "STYLAND HOLD",
//    "stockEn": "STYLAND HOLD",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 212,
//    "stockCn": "NANYANG HOLD",
//    "stockEn": "NANYANG HOLD",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 213,
//    "stockCn": "NATIONAL ELEC H",
//    "stockEn": "NATIONAL ELEC H",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 214,
//    "stockCn": "匯漢控股",
//    "stockEn": "ASIA ORIENT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 215,
//    "stockCn": "和記電訊香港",
//    "stockEn": "HUTCHTEL HK",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 216,
//    "stockCn": "建業實業",
//    "stockEn": "CHINNEY INV",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 217,
//    "stockCn": "中國誠通發展集團",
//    "stockEn": "CHINA CHENGTONG",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 218,
//    "stockCn": "申萬宏源",
//    "stockEn": "SHENWANHONGYUAN",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 219,
//    "stockCn": "順豪物業",
//    "stockEn": "SHUNHO PROPERTY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 220,
//    "stockCn": "統一企業中國",
//    "stockEn": "U-PRESID CHINA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 221,
//    "stockCn": "易易壹金融",
//    "stockEn": "EASY ONE FIN",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 222,
//    "stockCn": "閩信集團",
//    "stockEn": "MIN XIN HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 223,
//    "stockCn": "神州資源",
//    "stockEn": "SRGL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 224,
//    "stockCn": "建生國際",
//    "stockEn": "PIONEER GLOBAL",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 225,
//    "stockCn": "博富臨置業",
//    "stockEn": "POKFULAM",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 226,
//    "stockCn": "力寶",
//    "stockEn": "LIPPO",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 227,
//    "stockCn": "第一上海",
//    "stockEn": "FIRST SHANGHAI",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 228,
//    "stockCn": "中能控股",
//    "stockEn": "CHINA ENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 229,
//    "stockCn": "利民實業",
//    "stockEn": "RAYMOND IND",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 230,
//    "stockCn": "五礦地產",
//    "stockEn": "MINMETALS LAND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 231,
//    "stockCn": "平安證券集團控股",
//    "stockEn": "PING AN SEC GP",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 232,
//    "stockCn": "中國航空工業國際",
//    "stockEn": "AVIC INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 233,
//    "stockCn": "銘源醫療",
//    "stockEn": "MY MEDICARE",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 234,
//    "stockCn": "新世紀集團",
//    "stockEn": "NEW CENTURY GP",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 235,
//    "stockCn": "中策集團",
//    "stockEn": "CHINA STRATEGIC",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 236,
//    "stockCn": "香港生力啤",
//    "stockEn": "SAN MIGUEL HK",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 237,
//    "stockCn": "安全貨倉",
//    "stockEn": "SAFETY GODOWN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 238,
//    "stockCn": "長興國際",
//    "stockEn": "EVERGREEN INT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 239,
//    "stockCn": "白花油",
//    "stockEn": "PAK FAH YEOW",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 240,
//    "stockCn": "利基控股",
//    "stockEn": "BUILD KING HOLD",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 241,
//    "stockCn": "阿里健康",
//    "stockEn": "ALI HEALTH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 242,
//    "stockCn": "信德集團",
//    "stockEn": "SHUN TAK HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 243,
//    "stockCn": "QPL INT'L",
//    "stockEn": "QPL INT'L",
//    "stockBoardLot": 9000
//  },
//  {
//    "stockCode": 244,
//    "stockCn": "先施",
//    "stockEn": "SINCERE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 245,
//    "stockCn": "中國民生金融",
//    "stockEn": "CN MINSHENG FIN",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 246,
//    "stockCn": "瑞金礦業",
//    "stockEn": "REALGOLD MINING",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 247,
//    "stockCn": "TST PROPERTIES",
//    "stockEn": "TST PROPERTIES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 248,
//    "stockCn": "香港通訊國際控股",
//    "stockEn": "HKC INT'L HOLD",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 250,
//    "stockCn": "中國數碼信息",
//    "stockEn": "SINO-I TECH",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 251,
//    "stockCn": "爪哇控股",
//    "stockEn": "SEA HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 252,
//    "stockCn": "華信地產財務",
//    "stockEn": "SE ASIA PPT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 253,
//    "stockCn": "順豪控股",
//    "stockEn": "SHUNHO HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 254,
//    "stockCn": "國家聯合資源",
//    "stockEn": "NUR HOLDINGS",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 255,
//    "stockCn": "龍記集團",
//    "stockEn": "LUNG KEE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 256,
//    "stockCn": "冠城鐘錶珠寶",
//    "stockEn": "CITYCHAMP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 257,
//    "stockCn": "中國光大國際",
//    "stockEn": "CHINA EB INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 258,
//    "stockCn": "湯臣集團",
//    "stockEn": "TOMSON GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 259,
//    "stockCn": "億都（國際控股）",
//    "stockEn": "YEEBO (INT'L H)",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 260,
//    "stockCn": "幸福控股",
//    "stockEn": "AVIC JOY HLDG",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 261,
//    "stockCn": "中建置地",
//    "stockEn": "CCT LAND",
//    "stockBoardLot": 80000
//  },
//  {
//    "stockCode": 262,
//    "stockCn": "迪臣發展國際",
//    "stockEn": "DESON DEV INT'L",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 263,
//    "stockCn": "高富集團控股",
//    "stockEn": "GT GROUP HLDG",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 264,
//    "stockCn": "中璽國際",
//    "stockEn": "ASCENT INT'L",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 265,
//    "stockCn": "東勝中國",
//    "stockEn": "ORIENT VICTORY",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 266,
//    "stockCn": "天德地產",
//    "stockEn": "TIAN TECK LAND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 267,
//    "stockCn": "中信股份",
//    "stockEn": "CITIC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 268,
//    "stockCn": "金蝶國際",
//    "stockEn": "KINGDEE INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 269,
//    "stockCn": "中國資源交通",
//    "stockEn": "CRTG",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 270,
//    "stockCn": "粵海投資",
//    "stockEn": "GUANGDONG INV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 271,
//    "stockCn": "丹楓控股",
//    "stockEn": "DAN FORM HOLD",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 272,
//    "stockCn": "瑞安房地產",
//    "stockEn": "SHUI ON LAND",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 273,
//    "stockCn": "民信金控",
//    "stockEn": "MASON FIN",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 274,
//    "stockCn": "中富資源",
//    "stockEn": "C BILLION RES",
//    "stockBoardLot": 40000
//  },
//  {
//    "stockCode": 275,
//    "stockCn": "錦興集團",
//    "stockEn": "HANNY HOLDINGS",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 276,
//    "stockCn": "蒙古能源",
//    "stockEn": "MONGOLIA ENERGY",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 277,
//    "stockCn": "太興置業",
//    "stockEn": "TERN PROPERTIES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 278,
//    "stockCn": "華廈置業",
//    "stockEn": "WAH HA REALTY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 279,
//    "stockCn": "民眾金服",
//    "stockEn": "FREEMAN FIN",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 280,
//    "stockCn": "景福集團",
//    "stockEn": "KING FOOK HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 281,
//    "stockCn": "川河集團",
//    "stockEn": "RIVERA (HOLD)",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 282,
//    "stockCn": "壹傳媒",
//    "stockEn": "NEXT DIGITAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 283,
//    "stockCn": "高銀地產",
//    "stockEn": "GOLDIN PPT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 285,
//    "stockCn": "比亞迪電子",
//    "stockEn": "BYD ELECTRONIC",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 286,
//    "stockCn": "同佳健康",
//    "stockEn": "CS HEALTH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 287,
//    "stockCn": "永發置業",
//    "stockEn": "WINFAIR INV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 288,
//    "stockCn": "萬洲國際",
//    "stockEn": "WH GROUP",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 289,
//    "stockCn": "WING ON CO",
//    "stockEn": "WING ON CO",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 290,
//    "stockCn": "中國富強金融",
//    "stockEn": "C FORTUNE FIN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 291,
//    "stockCn": "華潤啤酒",
//    "stockEn": "CHINA RES BEER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 292,
//    "stockCn": "泛海酒店",
//    "stockEn": "ASIA STD HOTEL",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 293,
//    "stockCn": "國泰航空",
//    "stockEn": "CATHAY PAC AIR",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 294,
//    "stockCn": "長江製衣",
//    "stockEn": "YANGTZEKIANG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 295,
//    "stockCn": "江山控股",
//    "stockEn": "KONG SUN HOLD",
//    "stockBoardLot": 25000
//  },
//  {
//    "stockCode": 296,
//    "stockCn": "英皇娛樂酒店",
//    "stockEn": "EMPEROR E HOTEL",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 297,
//    "stockCn": "中化化肥",
//    "stockEn": "SINOFERT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 298,
//    "stockCn": "莊士中國",
//    "stockEn": "CHUANG'S CHINA",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 299,
//    "stockCn": "新體育",
//    "stockEn": "NEW SPORTS",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 300,
//    "stockCn": "昆明機床",
//    "stockEn": "KUNMING MACHINE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 303,
//    "stockCn": "VTECH HOLDINGS",
//    "stockEn": "VTECH HOLDINGS",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 305,
//    "stockCn": "五菱汽車",
//    "stockEn": "WULING MOTORS",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 306,
//    "stockCn": "冠忠巴士集團",
//    "stockEn": "KWOON CHUNG BUS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 307,
//    "stockCn": "優派能源發展",
//    "stockEn": "UP ENERGY DEV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 308,
//    "stockCn": "香港中旅",
//    "stockEn": "CHINA TRAVEL HK",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 309,
//    "stockCn": "新華通訊頻媒",
//    "stockEn": "XH NEWS MEDIA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 311,
//    "stockCn": "聯泰控股",
//    "stockEn": "LUEN THAI",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 312,
//    "stockCn": "歲寶百貨",
//    "stockEn": "SHIRBLE STORE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 313,
//    "stockCn": "裕田中國",
//    "stockEn": "RICHLY FIELD",
//    "stockBoardLot": 50000
//  },
//  {
//    "stockCode": 315,
//    "stockCn": "數碼通電訊",
//    "stockEn": "SMARTONE TELE",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 316,
//    "stockCn": "東方海外國際",
//    "stockEn": "OOIL",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 317,
//    "stockCn": "中船防務",
//    "stockEn": "COMEC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 318,
//    "stockCn": "黃河實業",
//    "stockEn": "VONGROUP",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 319,
//    "stockCn": "勤美達國際",
//    "stockEn": "CHINA METAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 320,
//    "stockCn": "金寶通",
//    "stockEn": "COMPUTIME",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 321,
//    "stockCn": "德永佳集團",
//    "stockEn": "TEXWINCA HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 322,
//    "stockCn": "康師傅控股",
//    "stockEn": "TINGYI",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 323,
//    "stockCn": "馬鞍山鋼鐵股份",
//    "stockEn": "MAANSHAN IRON",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 326,
//    "stockCn": "中國星集團",
//    "stockEn": "CHINA STAR ENT",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 327,
//    "stockCn": "百富環球",
//    "stockEn": "PAX GLOBAL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 328,
//    "stockCn": "ALCO HOLDINGS",
//    "stockEn": "ALCO HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 329,
//    "stockCn": "叁龍國際",
//    "stockEn": "DRAGONITE INT'L",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 330,
//    "stockCn": "思捷環球",
//    "stockEn": "ESPRIT HOLDINGS",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 331,
//    "stockCn": "豐盛機電",
//    "stockEn": "FSE ENGINEERING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 332,
//    "stockCn": "元亨燃氣",
//    "stockEn": "YUANHENG GAS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 333,
//    "stockCn": "黛麗斯國際",
//    "stockEn": "TOP FORM INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 334,
//    "stockCn": "TCL顯示科技",
//    "stockEn": "TCL DISPLAY",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 335,
//    "stockCn": "美建集團",
//    "stockEn": "UPBEST GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 336,
//    "stockCn": "華寶國際",
//    "stockEn": "HUABAO INTL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 337,
//    "stockCn": "綠地香港",
//    "stockEn": "GREENLAND HK",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 338,
//    "stockCn": "上海石油化工股份",
//    "stockEn": "SHANGHAI PECHEM",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 340,
//    "stockCn": "中國礦業",
//    "stockEn": "CHINA MINING",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 341,
//    "stockCn": "大家樂集團",
//    "stockEn": "CAFE DE CORAL H",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 342,
//    "stockCn": "新海能源",
//    "stockEn": "NEWOCEAN ENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 343,
//    "stockCn": "文化傳信",
//    "stockEn": "CULTURECOM HOLD",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 345,
//    "stockCn": "VITASOY INT'L",
//    "stockEn": "VITASOY INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 346,
//    "stockCn": "延長石油國際",
//    "stockEn": "YANCHANG PETRO",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 347,
//    "stockCn": "鞍鋼股份",
//    "stockEn": "ANGANG STEEL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 348,
//    "stockCn": "海爾智能健康",
//    "stockEn": "HAIERHEALTHWISE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 351,
//    "stockCn": "亞洲能源物流",
//    "stockEn": "ASIA ENERGY LOG",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 352,
//    "stockCn": "富陽",
//    "stockEn": "FORTUNE SUN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 353,
//    "stockCn": "能源國際投資",
//    "stockEn": "ENERGY INTINV",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 354,
//    "stockCn": "中國軟件國際",
//    "stockEn": "CHINASOFT INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 355,
//    "stockCn": "世紀城市國際",
//    "stockEn": "CENTURY C INT'L",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 357,
//    "stockCn": "航基股份",
//    "stockEn": "HNA INFRA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 358,
//    "stockCn": "江西銅業股份",
//    "stockEn": "JIANGXI COPPER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 359,
//    "stockCn": "海升果汁",
//    "stockEn": "HAISHENG JUICE",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 360,
//    "stockCn": "新焦點",
//    "stockEn": "NEW FOCUS AUTO",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 361,
//    "stockCn": "順龍控股",
//    "stockEn": "SINO GOLF HOLD",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 362,
//    "stockCn": "中國天化工",
//    "stockEn": "C ZENITH CHEM",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 363,
//    "stockCn": "上海實業控股",
//    "stockEn": "SHANGHAI IND H",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 364,
//    "stockCn": "坪山茶業",
//    "stockEn": "PING SHAN TEA",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 365,
//    "stockCn": "日東科技",
//    "stockEn": "SUN EAST TECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 366,
//    "stockCn": "陸氏集團(越南)",
//    "stockEn": "LUKS GROUP (VN)",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 367,
//    "stockCn": "莊士機構國際",
//    "stockEn": "CHUANG'S INT'L",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 368,
//    "stockCn": "中外運航運",
//    "stockEn": "SINOTRANS SHIP",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 369,
//    "stockCn": "永泰地產",
//    "stockEn": "WING TAI PPT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 370,
//    "stockCn": "國華",
//    "stockEn": "CHINA BEST",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 371,
//    "stockCn": "北控水務集團",
//    "stockEn": "BJ ENT WATER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 372,
//    "stockCn": "德祥企業",
//    "stockEn": "ITC CORPORATION",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 373,
//    "stockCn": "聯合集團",
//    "stockEn": "ALLIED GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 374,
//    "stockCn": "四洲集團",
//    "stockEn": "FOUR SEAS MER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 375,
//    "stockCn": "YGM TRADING",
//    "stockEn": "YGM TRADING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 376,
//    "stockCn": "瑞東集團",
//    "stockEn": "REORIENT GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 377,
//    "stockCn": "華君控股",
//    "stockEn": "HUAJUN HOLD",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 378,
//    "stockCn": "五龍動力",
//    "stockEn": "FDG KINETIC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 379,
//    "stockCn": "恒嘉融資租賃",
//    "stockEn": "EG LEASING",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 380,
//    "stockCn": "冠力國際",
//    "stockEn": "SOFTPOWER INT",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 381,
//    "stockCn": "僑雄國際",
//    "stockEn": "KIU HUNG INT'L",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 382,
//    "stockCn": "威靈控股",
//    "stockEn": "WELLING HOLDING",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 383,
//    "stockCn": "中國醫療網絡",
//    "stockEn": "CHINA MED&HCARE",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 384,
//    "stockCn": "中國燃氣",
//    "stockEn": "CHINA GAS HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 385,
//    "stockCn": "建聯集團",
//    "stockEn": "CHINNEY ALLI",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 386,
//    "stockCn": "中國石油化工股份",
//    "stockEn": "SINOPEC CORP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 387,
//    "stockCn": "力豐（集團）",
//    "stockEn": "LEEPORT(HOLD)",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 388,
//    "stockCn": "香港交易所",
//    "stockEn": "HKEX",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 389,
//    "stockCn": "通天酒業",
//    "stockEn": "TONTINE WINES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 390,
//    "stockCn": "中國中鐵",
//    "stockEn": "CHINA RAILWAY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 391,
//    "stockCn": "美亞娛樂資訊",
//    "stockEn": "MEI AH ENTER",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 392,
//    "stockCn": "北京控股",
//    "stockEn": "BEIJING ENT",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 393,
//    "stockCn": "旭日企業",
//    "stockEn": "GLORIOUS SUN",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 395,
//    "stockCn": "中國智能集團",
//    "stockEn": "SMARTAC GP CH",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 396,
//    "stockCn": "興利(香港)控股",
//    "stockEn": "HING LEE (HK)",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 397,
//    "stockCn": "君陽金融",
//    "stockEn": "JUN YANG FIN",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 398,
//    "stockCn": "東方表行集團",
//    "stockEn": "ORIENTAL WATCH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 399,
//    "stockCn": "領航醫藥生物科技",
//    "stockEn": "INNOVATIVE PHAR",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 400,
//    "stockCn": "科通芯城",
//    "stockEn": "COGOBUY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 401,
//    "stockCn": "萬嘉集團",
//    "stockEn": "WANJIA GROUP",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 402,
//    "stockCn": "天下圖控股",
//    "stockEn": "PEACEMAP HOLD",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 403,
//    "stockCn": "星光集團",
//    "stockEn": "STARLITE HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 404,
//    "stockCn": "新昌集團控股",
//    "stockEn": "HSIN CHONG GP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 406,
//    "stockCn": "有利集團",
//    "stockEn": "YAU LEE HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 408,
//    "stockCn": "葉氏化工集團",
//    "stockEn": "YIP'S CHEMICAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 410,
//    "stockCn": "SOHO中國",
//    "stockEn": "SOHO CHINA",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 411,
//    "stockCn": "南順（香港）",
//    "stockEn": "LAM SOON (HK)",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 412,
//    "stockCn": "中國新金融",
//    "stockEn": "CHINA INNO FIN",
//    "stockBoardLot": 6000
//  },
//  {
//    "stockCode": 413,
//    "stockCn": "南華集團控股",
//    "stockEn": "SC HOLDINGS",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 416,
//    "stockCn": "錦州銀行",
//    "stockEn": "BANKOFJINZHOU",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 417,
//    "stockCn": "謝瑞麟",
//    "stockEn": "TSE SUI LUEN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 418,
//    "stockCn": "方正控股",
//    "stockEn": "FOUNDER HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 419,
//    "stockCn": "華誼騰訊娛樂",
//    "stockEn": "HUAYI TENCENT",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 420,
//    "stockCn": "福田實業",
//    "stockEn": "FOUNTAIN SET",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 422,
//    "stockCn": "越南製造加工出口",
//    "stockEn": "VMEP HOLDINGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 423,
//    "stockCn": "經濟日報集團",
//    "stockEn": "HKET HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 425,
//    "stockCn": "敏實集團",
//    "stockEn": "MINTH GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 426,
//    "stockCn": "萬華媒體",
//    "stockEn": "ONE MEDIA GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 430,
//    "stockCn": "東方網庫",
//    "stockEn": "ORIENTAL EXPL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 431,
//    "stockCn": "大中華金融",
//    "stockEn": "G CHINA FIN",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 432,
//    "stockCn": "盈大地產",
//    "stockEn": "PCPD",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 433,
//    "stockCn": "北方礦業",
//    "stockEn": "NORTH MINING",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 434,
//    "stockCn": "博雅互動",
//    "stockEn": "BOYAA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 436,
//    "stockCn": "新宇環保",
//    "stockEn": "NU ENVIRO",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 438,
//    "stockCn": "彩虹新能源",
//    "stockEn": "IRICO NEWENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 439,
//    "stockCn": "光啟科學",
//    "stockEn": "KUANGCHI",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 440,
//    "stockCn": "大新金融",
//    "stockEn": "DAH SING",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 442,
//    "stockCn": "KTL INT'L",
//    "stockEn": "KTL INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 444,
//    "stockCn": "SINCEREWATCH HK",
//    "stockEn": "SINCEREWATCH HK",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 445,
//    "stockCn": "中國消防",
//    "stockEn": "CHINA FIRE",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 449,
//    "stockCn": "志高控股",
//    "stockEn": "CHIGO HOLDING",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 450,
//    "stockCn": "鴻興印刷集團",
//    "stockEn": "HUNG HING PRINT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 451,
//    "stockCn": "協鑫新能源",
//    "stockEn": "GCL NEWENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 455,
//    "stockCn": "天大藥業",
//    "stockEn": "TIANDA PHARMA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 456,
//    "stockCn": "新城市建設發展",
//    "stockEn": "NEW CITY DEV",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 458,
//    "stockCn": "聯亞集團",
//    "stockEn": "TRISTATE HOLD",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 459,
//    "stockCn": "美聯工商舖",
//    "stockEn": "MIDLAND IC&I",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 460,
//    "stockCn": "四環醫藥",
//    "stockEn": "SIHUAN PHARM",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 462,
//    "stockCn": "天然乳品",
//    "stockEn": "NATURAL DAIRY",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 464,
//    "stockCn": "建福集團",
//    "stockEn": "KENFORD GROUP",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 465,
//    "stockCn": "富通科技",
//    "stockEn": "FUTONG TECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 467,
//    "stockCn": "聯合能源集團",
//    "stockEn": "UNITEDENERGY GP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 468,
//    "stockCn": "紛美包裝",
//    "stockEn": "GAPACK",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 469,
//    "stockCn": "凱普松國際",
//    "stockEn": "CAPXON INT'L",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 471,
//    "stockCn": "中播控股",
//    "stockEn": "CMMB VISION",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 472,
//    "stockCn": "新絲路文旅",
//    "stockEn": "NEW SILKROAD",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 474,
//    "stockCn": "昊天發展集團",
//    "stockEn": "HAO TIAN DEV",
//    "stockBoardLot": 6000
//  },
//  {
//    "stockCode": 475,
//    "stockCn": "中發展控股",
//    "stockEn": "ZHONG FA ZHAN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 476,
//    "stockCn": "中國動力控股",
//    "stockEn": "CH DYNAMICS",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 477,
//    "stockCn": "奧普集團控股",
//    "stockEn": "AUPU GROUP HLDG",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 479,
//    "stockCn": "華建控股",
//    "stockEn": "CIL HOLDINGS",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 480,
//    "stockCn": "香港興業國際",
//    "stockEn": "HKR INT'L",
//    "stockBoardLot": 800
//  },
//  {
//    "stockCode": 482,
//    "stockCn": "聖馬丁國際",
//    "stockEn": "SANDMARTIN INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 483,
//    "stockCn": "包浩斯國際",
//    "stockEn": "BAUHAUS INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 484,
//    "stockCn": "雲遊控股",
//    "stockEn": "FORGAME",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 485,
//    "stockCn": "實華發展",
//    "stockEn": "SHIHUA DEV",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 486,
//    "stockCn": "RUSAL",
//    "stockEn": "RUSAL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 487,
//    "stockCn": "實德環球",
//    "stockEn": "SUCCESSUNIVERSE",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 488,
//    "stockCn": "麗新發展",
//    "stockEn": "LAI SUN DEV",
//    "stockBoardLot": 15000
//  },
//  {
//    "stockCode": 489,
//    "stockCn": "東風集團股份",
//    "stockEn": "DONGFENG GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 491,
//    "stockCn": "漢傳媒",
//    "stockEn": "SEE CORPORATION",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 493,
//    "stockCn": "國美電器",
//    "stockEn": "GOME",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 494,
//    "stockCn": "利豐",
//    "stockEn": "LI & FUNG",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 495,
//    "stockCn": "PALADIN",
//    "stockEn": "PALADIN",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 496,
//    "stockCn": "卡森國際",
//    "stockEn": "KASEN",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 497,
//    "stockCn": "資本策略地產",
//    "stockEn": "CSI PROPERTIES",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 498,
//    "stockCn": "保華集團",
//    "stockEn": "PYI CORP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 499,
//    "stockCn": "青島控股",
//    "stockEn": "QINGDAO HLDGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 500,
//    "stockCn": "先豐服務集團",
//    "stockEn": "FRONTIER SER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 503,
//    "stockCn": "朗生醫藥",
//    "stockEn": "LANSEN PHARMA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 505,
//    "stockCn": "興業銅業",
//    "stockEn": "XINGYE COPPER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 506,
//    "stockCn": "中國食品",
//    "stockEn": "CHINA FOODS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 508,
//    "stockCn": "鼎億集團投資",
//    "stockEn": "DINGYI GP INV",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 509,
//    "stockCn": "世紀陽光",
//    "stockEn": "SUNSHINE",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 510,
//    "stockCn": "時富金融服務集團",
//    "stockEn": "CASH FIN SER GP",
//    "stockBoardLot": 6000
//  },
//  {
//    "stockCode": 511,
//    "stockCn": "電視廣播",
//    "stockEn": "TVB",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 512,
//    "stockCn": "遠大醫藥",
//    "stockEn": "CHINAGRANDPHARM",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 513,
//    "stockCn": "恆和集團",
//    "stockEn": "CONTINENTAL H",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 515,
//    "stockCn": "達進東方照明",
//    "stockEn": "TC ORI LIGHT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 517,
//    "stockCn": "中遠國際控股",
//    "stockEn": "COSCO INTL HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 518,
//    "stockCn": "同得仕（集團）",
//    "stockEn": "TUNGTEX (HOLD)",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 519,
//    "stockCn": "實力建業",
//    "stockEn": "APPLIED DEV",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 520,
//    "stockCn": "呷哺呷哺",
//    "stockEn": "XIABUXIABU",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 521,
//    "stockCn": "海航實業股份",
//    "stockEn": "HNA HOLDING",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 522,
//    "stockCn": "ASM PACIFIC",
//    "stockEn": "ASM PACIFIC",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 524,
//    "stockCn": "E-KONG GROUP",
//    "stockEn": "E-KONG GROUP",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 525,
//    "stockCn": "廣深鐵路股份",
//    "stockEn": "GUANGSHEN RAIL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 526,
//    "stockCn": "利時集團控股",
//    "stockEn": "LISI GP HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 527,
//    "stockCn": "瑞風新能源",
//    "stockEn": "RUIFENG RENEW",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 528,
//    "stockCn": "金達控股",
//    "stockEn": "KINGDOM HOLDING",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 529,
//    "stockCn": "SIS INT'L",
//    "stockEn": "SIS INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 530,
//    "stockCn": "高銀金融",
//    "stockEn": "GOLDIN FIN HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 531,
//    "stockCn": "順誠",
//    "stockEn": "SAMSON HOLDING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 532,
//    "stockCn": "WKK INTL (HOLD)",
//    "stockEn": "WKK INTL (HOLD)",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 533,
//    "stockCn": "金利來集團",
//    "stockEn": "GOLDLION HOLD",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 535,
//    "stockCn": "金地商置",
//    "stockEn": "GEMDALE PPT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 536,
//    "stockCn": "貿易通",
//    "stockEn": "TRADELINK",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 538,
//    "stockCn": "味千(中國)",
//    "stockEn": "AJISEN (CHINA)",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 539,
//    "stockCn": "冠華國際控股",
//    "stockEn": "VICTORY CITY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 540,
//    "stockCn": "迅捷環球控股",
//    "stockEn": "SPEEDY GLOBAL",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 542,
//    "stockCn": "新嶺域集團",
//    "stockEn": "CENERIC",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 543,
//    "stockCn": "太平洋網絡",
//    "stockEn": "PACIFIC ONLINE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 544,
//    "stockCn": "大同集團",
//    "stockEn": "DAIDO GROUP",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 546,
//    "stockCn": "阜豐集團",
//    "stockEn": "FUFENG GROUP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 547,
//    "stockCn": "數字王國",
//    "stockEn": "DIGITAL DOMAIN",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 548,
//    "stockCn": "深圳高速公路股份",
//    "stockEn": "SHENZHENEXPRESS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 549,
//    "stockCn": "奇峰化纖",
//    "stockEn": "QIFENG FIBER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 550,
//    "stockCn": "先傳媒",
//    "stockEn": "CINMEDIA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 551,
//    "stockCn": "裕元集團",
//    "stockEn": "YUE YUEN IND",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 552,
//    "stockCn": "中國通信服務",
//    "stockEn": "CHINACOMSERVICE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 553,
//    "stockCn": "南京熊貓電子股份",
//    "stockEn": "NANJING PANDA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 554,
//    "stockCn": "漢思能源",
//    "stockEn": "HANS ENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 555,
//    "stockCn": "御泰中彩控股",
//    "stockEn": "REXLOT HOLDINGS",
//    "stockBoardLot": 25000
//  },
//  {
//    "stockCode": 556,
//    "stockCn": "泛亞環保",
//    "stockEn": "PAN ASIA ENVIRO",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 557,
//    "stockCn": "CITY E-SOLUTION",
//    "stockEn": "CITY E-SOLUTION",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 558,
//    "stockCn": "力勁科技",
//    "stockEn": "LK TECH",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 559,
//    "stockCn": "德泰新能源集團",
//    "stockEn": "DETAI NEWENERGY",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 560,
//    "stockCn": "珠江船務",
//    "stockEn": "CHU KONG SHIP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 563,
//    "stockCn": "上實城市開發",
//    "stockEn": "SH IND URBAN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 564,
//    "stockCn": "鄭煤機",
//    "stockEn": "ZMJ",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 565,
//    "stockCn": "錦藝紡織",
//    "stockEn": "ART TEXTILE",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 566,
//    "stockCn": "漢能薄膜發電",
//    "stockEn": "HANERGY TFP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 567,
//    "stockCn": "大昌微綫集團",
//    "stockEn": "DAISHOMICROLINE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 568,
//    "stockCn": "山東墨龍",
//    "stockEn": "SHANDONG MOLONG",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 569,
//    "stockCn": "中國自動化",
//    "stockEn": "CH AUTOMATION",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 570,
//    "stockCn": "中國中藥",
//    "stockEn": "TRAD CHI MED",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 571,
//    "stockCn": "豐德麗控股",
//    "stockEn": "ESUN HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 572,
//    "stockCn": "中達金融集團",
//    "stockEn": "CENT WEALTH FIN",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 573,
//    "stockCn": "稻香控股",
//    "stockEn": "TAO HEUNG HLDGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 574,
//    "stockCn": "百信藥業",
//    "stockEn": "PASHUN PHARMA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 575,
//    "stockCn": "勵晶太平洋",
//    "stockEn": "REGENT PACIFIC",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 576,
//    "stockCn": "浙江滬杭甬",
//    "stockEn": "ZHEJIANGEXPRESS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 577,
//    "stockCn": "十三集團",
//    "stockEn": "THE 13 HOLDINGS",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 578,
//    "stockCn": "融信資源",
//    "stockEn": "ROSAN RES",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 579,
//    "stockCn": "京能清潔能源",
//    "stockEn": "JNCEC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 580,
//    "stockCn": "賽晶電力電子",
//    "stockEn": "SUN.KING ELEC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 581,
//    "stockCn": "中國東方集團",
//    "stockEn": "CHINA ORIENTAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 582,
//    "stockCn": "藍鼎國際",
//    "stockEn": "LANDING INTL",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 583,
//    "stockCn": "南潮控股",
//    "stockEn": "ARMADA HLDGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 585,
//    "stockCn": "意馬國際",
//    "stockEn": "IMAGI INT'L",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 586,
//    "stockCn": "海螺創業",
//    "stockEn": "CONCH VENTURE",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 587,
//    "stockCn": "華瀚健康",
//    "stockEn": "HUA HAN HEALTH",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 588,
//    "stockCn": "北京北辰實業股份",
//    "stockEn": "BEIJING N STAR",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 589,
//    "stockCn": "寶國國際",
//    "stockEn": "PORTICO INT'L",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 590,
//    "stockCn": "六福集團",
//    "stockEn": "LUK FOOK HOLD",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 591,
//    "stockCn": "中國高精密",
//    "stockEn": "C HIGHPRECISION",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 592,
//    "stockCn": "BOSSINI INT'L",
//    "stockEn": "BOSSINI INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 593,
//    "stockCn": "天洋國際控股",
//    "stockEn": "SKYOCEAN INTL",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 595,
//    "stockCn": "AV CONCEPT HOLD",
//    "stockEn": "AV CONCEPT HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 596,
//    "stockCn": "浪潮國際",
//    "stockEn": "INSPUR INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 598,
//    "stockCn": "中國外運",
//    "stockEn": "SINOTRANS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 599,
//    "stockCn": "怡邦行控股",
//    "stockEn": "E. BON HOLDINGS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 600,
//    "stockCn": "中國基建投資",
//    "stockEn": "CHINA INFRA INV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 601,
//    "stockCn": "權智（國際）",
//    "stockEn": "GROUP SENSE",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 602,
//    "stockCn": "佳華百貨控股",
//    "stockEn": "JIAHUA STORES H",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 603,
//    "stockCn": "中油燃氣",
//    "stockEn": "CHINA OIL & GAS",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 604,
//    "stockCn": "深圳控股",
//    "stockEn": "SHENZHEN INVEST",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 605,
//    "stockCn": "中國金融投資管理",
//    "stockEn": "C FIN SERVICES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 606,
//    "stockCn": "中國糧油控股",
//    "stockEn": "CHINA AGRI",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 607,
//    "stockCn": "豐盛控股",
//    "stockEn": "FULLSHARE",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 608,
//    "stockCn": "達利國際",
//    "stockEn": "HIGH FASHION",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 609,
//    "stockCn": "天德化工",
//    "stockEn": "TIANDE CHEMICAL",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 610,
//    "stockCn": "WAI KEE HOLD",
//    "stockEn": "WAI KEE HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 611,
//    "stockCn": "中國核能科技",
//    "stockEn": "CNE TECH CORP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 613,
//    "stockCn": "YUGANG INT'L",
//    "stockEn": "YUGANG INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 616,
//    "stockCn": "高山企業",
//    "stockEn": "EMINENCE ENT",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 617,
//    "stockCn": "百利保控股",
//    "stockEn": "PALIBURG HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 618,
//    "stockCn": "北大資源",
//    "stockEn": "PKU RESOURCES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 619,
//    "stockCn": "南華金融",
//    "stockEn": "SOUTH CHINA FIN",
//    "stockBoardLot": 50000
//  },
//  {
//    "stockCode": 620,
//    "stockCn": "大唐西市",
//    "stockEn": "DTXS SILK ROAD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 621,
//    "stockCn": "壇金礦業",
//    "stockEn": "TAUNG GOLD",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 622,
//    "stockCn": "威華達控股",
//    "stockEn": "ENERCHINA HOLD",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 623,
//    "stockCn": "中視金橋",
//    "stockEn": "SINOMEDIA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 626,
//    "stockCn": "大眾金融控股",
//    "stockEn": "PUBLIC FIN HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 627,
//    "stockCn": "佑威國際",
//    "stockEn": "U-RIGHT INT'L",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 628,
//    "stockCn": "華銀控股",
//    "stockEn": "SINO CREDIT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 629,
//    "stockCn": "悅達礦業",
//    "stockEn": "YUE DA MINING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 630,
//    "stockCn": "雋泰控股",
//    "stockEn": "AMCO UNITED",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 631,
//    "stockCn": "三一國際",
//    "stockEn": "SANY INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 632,
//    "stockCn": "東方明珠石油",
//    "stockEn": "PEARLORIENT OIL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 633,
//    "stockCn": "中國全通",
//    "stockEn": "CH ALL ACCESS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 635,
//    "stockCn": "彩星集團",
//    "stockEn": "PLAYMATES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 636,
//    "stockCn": "嘉里物流",
//    "stockEn": "KERRY LOG NET",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 637,
//    "stockCn": "利記",
//    "stockEn": "LEE KEE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 638,
//    "stockCn": "建溢集團",
//    "stockEn": "KIN YAT HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 639,
//    "stockCn": "首鋼資源",
//    "stockEn": "SHOUGANG RES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 640,
//    "stockCn": "星謙發展",
//    "stockEn": "INFINITY DEV",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 641,
//    "stockCn": "恒天立信",
//    "stockEn": "CHTC FONG'S",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 642,
//    "stockCn": "PALADIN PREF",
//    "stockEn": "PALADIN PREF",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 643,
//    "stockCn": "恆富控股",
//    "stockEn": "CARRY WEALTH",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 645,
//    "stockCn": "安域亞洲",
//    "stockEn": "ARES ASIA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 646,
//    "stockCn": "中國環保科技",
//    "stockEn": "CHINA ENV TEC",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 647,
//    "stockCn": "JOYCE BOUTIQUE",
//    "stockEn": "JOYCE BOUTIQUE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 648,
//    "stockCn": "中國華仁醫療",
//    "stockEn": "WAH YAN HEALTH",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 650,
//    "stockCn": "順昌集團",
//    "stockEn": "SHUN CHEONG",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 651,
//    "stockCn": "中海重工",
//    "stockEn": "CHI OCEAN IND",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 653,
//    "stockCn": "卓悅控股",
//    "stockEn": "BONJOUR HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 655,
//    "stockCn": "香港華人有限公司",
//    "stockEn": "HK CHINESE LTD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 656,
//    "stockCn": "復星國際",
//    "stockEn": "FOSUN INTL",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 657,
//    "stockCn": "環科國際",
//    "stockEn": "G-VISION INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 658,
//    "stockCn": "中國高速傳動",
//    "stockEn": "C TRANSMISSION",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 659,
//    "stockCn": "新創建集團",
//    "stockEn": "NWS HOLDINGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 660,
//    "stockCn": "偉俊礦業集團",
//    "stockEn": "WAI CHUN MINING",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 661,
//    "stockCn": "中國大冶有色金屬",
//    "stockEn": "CDAYENONFER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 662,
//    "stockCn": "亞洲金融",
//    "stockEn": "ASIA FINANCIAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 663,
//    "stockCn": "金山能源",
//    "stockEn": "KING STONE ENGY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 665,
//    "stockCn": "海通國際",
//    "stockEn": "HAITONG INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 668,
//    "stockCn": "東銀國際控股",
//    "stockEn": "DOYEN INTL HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 669,
//    "stockCn": "創科實業",
//    "stockEn": "TECHTRONIC IND",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 670,
//    "stockCn": "中國東方航空股份",
//    "stockEn": "CHINA EAST AIR",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 672,
//    "stockCn": "眾安房產",
//    "stockEn": "ZHONGAN REALEST",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 673,
//    "stockCn": "中國衛生控股",
//    "stockEn": "CHINA HEALTH",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 674,
//    "stockCn": "文化地標投資",
//    "stockEn": "CULTURELANDMARK",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 675,
//    "stockCn": "堅寶國際",
//    "stockEn": "K & P INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 676,
//    "stockCn": "創信國際",
//    "stockEn": "PEGASUS INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 677,
//    "stockCn": "金源米業",
//    "stockEn": "GOLDEN RES DEV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 678,
//    "stockCn": "雲頂香港",
//    "stockEn": "GENTING HK",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 679,
//    "stockCn": "亞洲聯網科技",
//    "stockEn": "ASIA TELE-NET",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 680,
//    "stockCn": "南海控股",
//    "stockEn": "NAN HAI CORP",
//    "stockBoardLot": 50000
//  },
//  {
//    "stockCode": 681,
//    "stockCn": "中民控股",
//    "stockEn": "CHI PEOPLE HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 682,
//    "stockCn": "超大現代",
//    "stockEn": "CHAODA MODERN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 683,
//    "stockCn": "嘉里建設",
//    "stockEn": "KERRY PPT",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 684,
//    "stockCn": "亞倫國際",
//    "stockEn": "ALLAN INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 685,
//    "stockCn": "世界華文媒體",
//    "stockEn": "MEDIA CHINESE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 686,
//    "stockCn": "聯合光伏",
//    "stockEn": "UNITED PV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 687,
//    "stockCn": "泰昇集團",
//    "stockEn": "TYSAN HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 688,
//    "stockCn": "中國海外發展",
//    "stockEn": "CHINA OVERSEAS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 689,
//    "stockCn": "長盈集團(控股)",
//    "stockEn": "EPI (HOLDINGS)",
//    "stockBoardLot": 15000
//  },
//  {
//    "stockCode": 690,
//    "stockCn": "聯康生物科技集團",
//    "stockEn": "UNI-BIO GROUP",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 691,
//    "stockCn": "山水水泥",
//    "stockEn": "SHANSHUI CEMENT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 692,
//    "stockCn": "中國家居",
//    "stockEn": "CHINA HOUSEHOLD",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 693,
//    "stockCn": "陳唱國際",
//    "stockEn": "TAN CHONG INT'L",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 694,
//    "stockCn": "北京首都機場股份",
//    "stockEn": "BEIJING AIRPORT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 695,
//    "stockCn": "東吳水泥",
//    "stockEn": "DONGWU CEMENT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 696,
//    "stockCn": "中國民航信息網絡",
//    "stockEn": "TRAVELSKY TECH",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 697,
//    "stockCn": "SHOUGANG INT'L",
//    "stockEn": "SHOUGANG INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 698,
//    "stockCn": "通達集團",
//    "stockEn": "TONGDA GROUP",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 699,
//    "stockCn": "神州租車",
//    "stockEn": "CAR INC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 700,
//    "stockCn": "騰訊控股",
//    "stockEn": "TENCENT",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 701,
//    "stockCn": "CNT GROUP",
//    "stockEn": "CNT GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 702,
//    "stockCn": "中國油氣控股",
//    "stockEn": "SINO OIL & GAS",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 703,
//    "stockCn": "FUTURE BRIGHT",
//    "stockEn": "FUTURE BRIGHT",
//    "stockBoardLot": 6000
//  },
//  {
//    "stockCode": 704,
//    "stockCn": "和嘉資源",
//    "stockEn": "HUSCOKE RES",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 705,
//    "stockCn": "鼎和礦業",
//    "stockEn": "DINGHE MINING",
//    "stockBoardLot": 12000
//  },
//  {
//    "stockCode": 706,
//    "stockCn": "美麗中國控股",
//    "stockEn": "BEAUTI C HOLD",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 707,
//    "stockCn": "協盛協豐",
//    "stockEn": "CO-PROSPERITY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 708,
//    "stockCn": "恒大健康",
//    "stockEn": "EVERG HEALTH",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 709,
//    "stockCn": "佐丹奴國際",
//    "stockEn": "GIORDANO INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 710,
//    "stockCn": "精電",
//    "stockEn": "VARITRONIX INTL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 711,
//    "stockCn": "中國城建集團股份",
//    "stockEn": "CHINA CITY CONS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 712,
//    "stockCn": "卡姆丹克太陽能",
//    "stockEn": "COMTEC SOLAR",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 713,
//    "stockCn": "世界（集團）",
//    "stockEn": "WORLD HOUSEWARE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 715,
//    "stockCn": "中泛控股",
//    "stockEn": "CHINA OCEANWIDE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 716,
//    "stockCn": "勝獅貨櫃",
//    "stockEn": "SINGAMAS CONT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 717,
//    "stockCn": "英皇證券",
//    "stockEn": "EMPEROR CAPITAL",
//    "stockBoardLot": 6000
//  },
//  {
//    "stockCode": 718,
//    "stockCn": "太和控股",
//    "stockEn": "TAI UNITED HOLD",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 719,
//    "stockCn": "山東新華製藥股份",
//    "stockEn": "SHANDONG XINHUA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 720,
//    "stockCn": "意達利控股",
//    "stockEn": "AUTO ITALIA",
//    "stockBoardLot": 25000
//  },
//  {
//    "stockCode": 722,
//    "stockCn": "聯合醫務",
//    "stockEn": "UMP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 723,
//    "stockCn": "永保林業",
//    "stockEn": "SUSTAIN FOREST",
//    "stockBoardLot": 60000
//  },
//  {
//    "stockCode": 724,
//    "stockCn": "瑞鑫國際集團",
//    "stockEn": "RUIXIN INT'L",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 725,
//    "stockCn": "恆都集團",
//    "stockEn": "PERENNIAL INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 726,
//    "stockCn": "中民築友科技",
//    "stockEn": "CM DRAWIN TECH",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 727,
//    "stockCn": "皇冠環球集團",
//    "stockEn": "CROWNICORP",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 728,
//    "stockCn": "中國電信",
//    "stockEn": "CHINA TELECOM",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 729,
//    "stockCn": "五龍電動車",
//    "stockEn": "FDG EVEHICLES",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 730,
//    "stockCn": "SHOUGANG GRAND",
//    "stockEn": "SHOUGANG GRAND",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 731,
//    "stockCn": "森信紙業集團",
//    "stockEn": "SAMSON PAPER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 732,
//    "stockCn": "信利國際",
//    "stockEn": "TRULY INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 733,
//    "stockCn": "合富輝煌",
//    "stockEn": "HOPEFLUENT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 735,
//    "stockCn": "中國電力新能源",
//    "stockEn": "C P NEW ENERGY",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 736,
//    "stockCn": "中國置業投資",
//    "stockEn": "CHINA PPT INV",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 737,
//    "stockCn": "合和公路基建",
//    "stockEn": "HOPEWELL INFR",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 738,
//    "stockCn": "萊爾斯丹",
//    "stockEn": "LE SAUNDA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 743,
//    "stockCn": "亞洲水泥(中國)",
//    "stockEn": "ASIA CEMENT CH",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 745,
//    "stockCn": "中國國家文化產業",
//    "stockEn": "CN CULTURE GP",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 746,
//    "stockCn": "理文化工",
//    "stockEn": "L & M CHEMICAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 747,
//    "stockCn": "瀋陽公用發展股份",
//    "stockEn": "SHENYANG PUBLIC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 750,
//    "stockCn": "興業太陽能",
//    "stockEn": "SINGYES SOLAR",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 751,
//    "stockCn": "創維數碼",
//    "stockEn": "SKYWORTHDIGITAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 752,
//    "stockCn": "PICO FAR EAST",
//    "stockEn": "PICO FAR EAST",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 753,
//    "stockCn": "中國國航",
//    "stockEn": "AIR CHINA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 754,
//    "stockCn": "合生創展集團",
//    "stockEn": "HOPSON DEV HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 755,
//    "stockCn": "上海証大",
//    "stockEn": "SHANGHAI ZENDAI",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 756,
//    "stockCn": "天溢森美",
//    "stockEn": "TIANYI SUMMI",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 757,
//    "stockCn": "陽光能源",
//    "stockEn": "SOLARGIGA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 758,
//    "stockCn": "JUNEFIELD GROUP",
//    "stockEn": "JUNEFIELD GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 759,
//    "stockCn": "CEC INT'L HOLD",
//    "stockEn": "CEC INT'L HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 760,
//    "stockCn": "新天地產集團",
//    "stockEn": "TALENT PPT GP",
//    "stockBoardLot": 15000
//  },
//  {
//    "stockCode": 761,
//    "stockCn": "百營環球資源",
//    "stockEn": "BEL GLOBAL RES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 762,
//    "stockCn": "中國聯通",
//    "stockEn": "CHINA UNICOM",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 763,
//    "stockCn": "中興通訊",
//    "stockEn": "ZTE",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 764,
//    "stockCn": "永恒策略",
//    "stockEn": "ETERNITY INV",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 765,
//    "stockCn": "PERFECTECH INTL",
//    "stockEn": "PERFECTECH INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 766,
//    "stockCn": "中盈集團控股",
//    "stockEn": "SINO PROSPER GP",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 767,
//    "stockCn": "PACIFIC PLYWOOD",
//    "stockEn": "PACIFIC PLYWOOD",
//    "stockBoardLot": 40000
//  },
//  {
//    "stockCode": 769,
//    "stockCn": "中國稀土",
//    "stockEn": "CHINA RAREEARTH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 771,
//    "stockCn": "自動系統",
//    "stockEn": "AUTOMATED SYS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 775,
//    "stockCn": "長江生命科技",
//    "stockEn": "CKLIFE SCIENCES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 776,
//    "stockCn": "捷豐家居",
//    "stockEn": "JF FURNISHINGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 777,
//    "stockCn": "網龍",
//    "stockEn": "NETDRAGON",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 787,
//    "stockCn": "利標品牌",
//    "stockEn": "GLOBAL BRANDS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 789,
//    "stockCn": "雅天妮",
//    "stockEn": "ARTINI",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 794,
//    "stockCn": "錦勝集團(控股)",
//    "stockEn": "COME SURE GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 798,
//    "stockCn": "光谷聯合",
//    "stockEn": "OVU",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 799,
//    "stockCn": "IGG",
//    "stockEn": "IGG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 800,
//    "stockCn": "A8新媒體",
//    "stockEn": "A8 NEW MEDIA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 801,
//    "stockCn": "金衛醫療",
//    "stockEn": "GOLDEN MEDITECH",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 802,
//    "stockCn": "宏霸數碼",
//    "stockEn": "RCG",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 803,
//    "stockCn": "昌興國際",
//    "stockEn": "PROSPERITY INTL",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 805,
//    "stockCn": "GLENCORE-S",
//    "stockEn": "GLENCORE-S",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 806,
//    "stockCn": "惠理集團",
//    "stockEn": "VALUE PARTNERS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 809,
//    "stockCn": "大成生化科技",
//    "stockEn": "GLOBAL BIO-CHEM",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 811,
//    "stockCn": "新華文軒",
//    "stockEn": "XINHUA WINSHARE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 812,
//    "stockCn": "西證國際證券",
//    "stockEn": "SWSI",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 813,
//    "stockCn": "世茂房地產",
//    "stockEn": "SHIMAO PROPERTY",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 814,
//    "stockCn": "北京京客隆",
//    "stockEn": "JINGKELONG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 815,
//    "stockCn": "中國白銀集團",
//    "stockEn": "CHI SILVER GP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 816,
//    "stockCn": "華電福新",
//    "stockEn": "HUADIAN FUXIN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 817,
//    "stockCn": "中國金茂",
//    "stockEn": "CHINA JINMAO",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 818,
//    "stockCn": "高陽科技",
//    "stockEn": "HI SUN TECH",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 819,
//    "stockCn": "天能動力",
//    "stockEn": "TIANNENG POWER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 821,
//    "stockCn": "匯盈控股",
//    "stockEn": "VC HOLDINGS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 822,
//    "stockCn": "嘉瑞國際",
//    "stockEn": "KA SHUI INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 825,
//    "stockCn": "新世界百貨中國",
//    "stockEn": "NWDS CHINA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 826,
//    "stockCn": "天工國際",
//    "stockEn": "TIANGONG INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 827,
//    "stockCn": "玖源集團",
//    "stockEn": "KO YO GROUP",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 828,
//    "stockCn": "王朝酒業",
//    "stockEn": "DYNASTY WINES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 829,
//    "stockCn": "神冠控股",
//    "stockEn": "SHENGUAN HLDGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 830,
//    "stockCn": "遠東環球",
//    "stockEn": "FAR EAST GLOBAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 831,
//    "stockCn": "利亞零售",
//    "stockEn": "CR ASIA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 832,
//    "stockCn": "建業地產",
//    "stockEn": "CENTRAL CHINA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 833,
//    "stockCn": "華訊",
//    "stockEn": "ALLTRONICS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 834,
//    "stockCn": "康大食品",
//    "stockEn": "KANGDA FOOD",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 835,
//    "stockCn": "亞洲煤業",
//    "stockEn": "ASIA COAL",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 836,
//    "stockCn": "華潤電力",
//    "stockEn": "CHINA RES POWER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 837,
//    "stockCn": "譚木匠",
//    "stockEn": "CARPENTER TAN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 838,
//    "stockCn": "億和控股",
//    "stockEn": "EVA HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 839,
//    "stockCn": "天大石油管材",
//    "stockEn": "TIANDA OIL PIPE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 840,
//    "stockCn": "天業節水",
//    "stockEn": "TIANYE WATER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 841,
//    "stockCn": "木薯資源",
//    "stockEn": "CASSAVA RES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 842,
//    "stockCn": "理士國際",
//    "stockEn": "LEOCH INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 844,
//    "stockCn": "廣豪國際",
//    "stockEn": "GRAND CONCORD",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 845,
//    "stockCn": "恒盛地產",
//    "stockEn": "GLORIOUS PPT H",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 846,
//    "stockCn": "明發集團",
//    "stockEn": "MINGFA GROUP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 847,
//    "stockCn": "哈薩克礦業-S",
//    "stockEn": "KAZ MINERALS-S",
//    "stockBoardLot": 30
//  },
//  {
//    "stockCode": 848,
//    "stockCn": "茂業國際",
//    "stockEn": "MAOYE INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 850,
//    "stockCn": "中亞能源",
//    "stockEn": "PETROASIAN",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 851,
//    "stockCn": "盛源控股",
//    "stockEn": "SHENG YUAN HLDG",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 852,
//    "stockCn": "海峽石油化工",
//    "stockEn": "STRONG PETRO",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 853,
//    "stockCn": "微創醫療",
//    "stockEn": "MICROPORT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 854,
//    "stockCn": "威雅利",
//    "stockEn": "WILLAS-ARRAY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 855,
//    "stockCn": "中國水務",
//    "stockEn": "CHINA WATER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 856,
//    "stockCn": "偉仕控股",
//    "stockEn": "VST HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 857,
//    "stockCn": "中國石油股份",
//    "stockEn": "PETROCHINA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 858,
//    "stockCn": "精優藥業",
//    "stockEn": "EXTRAWELL PHAR",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 859,
//    "stockCn": "鎮科集團",
//    "stockEn": "HENRY GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 860,
//    "stockCn": "奧立仕控股",
//    "stockEn": "O LUXE HOLD",
//    "stockBoardLot": 12000
//  },
//  {
//    "stockCode": 861,
//    "stockCn": "神州控股",
//    "stockEn": "DC HOLDINGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 862,
//    "stockCn": "遠見控股",
//    "stockEn": "VISION VALUES",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 863,
//    "stockCn": "品牌中國",
//    "stockEn": "BRANDINGCHINA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 864,
//    "stockCn": "永利地產發展",
//    "stockEn": "WING LEE PPT",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 865,
//    "stockCn": "第一電訊",
//    "stockEn": "FIRST MOBILE",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 866,
//    "stockCn": "中國秦發",
//    "stockEn": "CHINA QINFA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 867,
//    "stockCn": "康哲藥業",
//    "stockEn": "CMS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 868,
//    "stockCn": "信義玻璃",
//    "stockEn": "XINYI GLASS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 869,
//    "stockCn": "彩星玩具",
//    "stockEn": "PLAYMATES TOYS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 871,
//    "stockCn": "中國疏浚環保",
//    "stockEn": "CH DREDG ENV",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 872,
//    "stockCn": "啟迪國際",
//    "stockEn": "TUS INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 873,
//    "stockCn": "中國泰豐床品",
//    "stockEn": "C TAIFENG BED",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 874,
//    "stockCn": "白雲山",
//    "stockEn": "BAIYUNSHAN PH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 875,
//    "stockCn": "中國金控",
//    "stockEn": "CHINA FIN INV",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 876,
//    "stockCn": "美加醫學",
//    "stockEn": "MEGA MEDICAL",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 877,
//    "stockCn": "昂納科技集團",
//    "stockEn": "O-NET TECH GP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 878,
//    "stockCn": "金朝陽集團",
//    "stockEn": "SOUNDWILL HOLD",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 880,
//    "stockCn": "澳博控股",
//    "stockEn": "SJM HOLDINGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 881,
//    "stockCn": "中升控股",
//    "stockEn": "ZHONGSHENG HLDG",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 882,
//    "stockCn": "天津發展",
//    "stockEn": "TIANJIN DEV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 883,
//    "stockCn": "中國海洋石油",
//    "stockEn": "CNOOC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 884,
//    "stockCn": "旭輝控股集團",
//    "stockEn": "CIFI HOLD GP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 885,
//    "stockCn": "仁天科技控股",
//    "stockEn": "RENTIAN TECH",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 886,
//    "stockCn": "銀基集團",
//    "stockEn": "SILVER BASE",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 887,
//    "stockCn": "英皇鐘錶珠寶",
//    "stockEn": "EMPEROR WATCH&J",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 888,
//    "stockCn": "路訊通",
//    "stockEn": "ROADSHOW",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 889,
//    "stockCn": "連達科技控股",
//    "stockEn": "DATRONIX HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 891,
//    "stockCn": "利邦",
//    "stockEn": "TRINITY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 893,
//    "stockCn": "中國鐵鈦",
//    "stockEn": "CHINAVTM MINING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 894,
//    "stockCn": "萬裕科技",
//    "stockEn": "MAN YUE TECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 895,
//    "stockCn": "東江環保",
//    "stockEn": "DONGJIANG ENV",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 896,
//    "stockCn": "興勝創建",
//    "stockEn": "HANISON",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 897,
//    "stockCn": "位元堂",
//    "stockEn": "WAI YUEN TONG",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 898,
//    "stockCn": "萬事昌國際",
//    "stockEn": "MULTIFIELD INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 899,
//    "stockCn": "亞洲資源",
//    "stockEn": "ASIA RESOURCES",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 900,
//    "stockCn": "AEON CREDIT",
//    "stockEn": "AEON CREDIT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 902,
//    "stockCn": "華能國際電力股份",
//    "stockEn": "HUANENG POWER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 903,
//    "stockCn": "冠捷科技",
//    "stockEn": "TPV TECHNOLOGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 904,
//    "stockCn": "中綠",
//    "stockEn": "CHINA GREEN",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 906,
//    "stockCn": "中糧包裝",
//    "stockEn": "COFCO PACKAGING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 907,
//    "stockCn": "高雅光學",
//    "stockEn": "ELEGANCEOPTICAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 908,
//    "stockCn": "珠海控股投資",
//    "stockEn": "ZHUHAI H INV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 909,
//    "stockCn": "中大國際",
//    "stockEn": "ZHONGDA INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 910,
//    "stockCn": "中國三迪",
//    "stockEn": "CHINA SANDI",
//    "stockBoardLot": 12000
//  },
//  {
//    "stockCode": 911,
//    "stockCn": "恒發洋參",
//    "stockEn": "HANGFAT GINSENG",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 912,
//    "stockCn": "信佳國際",
//    "stockEn": "SUGA INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 914,
//    "stockCn": "安徽海螺水泥股份",
//    "stockEn": "ANHUI CONCH",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 915,
//    "stockCn": "道和環球",
//    "stockEn": "DAOHE GLOBAL",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 916,
//    "stockCn": "龍源電力",
//    "stockEn": "CHINA LONGYUAN",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 918,
//    "stockCn": "第一德勝控股",
//    "stockEn": "TAKSON HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 919,
//    "stockCn": "現代美容",
//    "stockEn": "MODERN BEAUTY",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 921,
//    "stockCn": "海信科龍",
//    "stockEn": "HISENSE KELON",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 922,
//    "stockCn": "安賢園中國",
//    "stockEn": "ANXIANYUAN CH",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 923,
//    "stockCn": "綜合環保集團",
//    "stockEn": "IWS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 925,
//    "stockCn": "北京建設",
//    "stockEn": "BJ PROPERTIES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 926,
//    "stockCn": "碧生源",
//    "stockEn": "BESUNYEN",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 927,
//    "stockCn": "富士高實業",
//    "stockEn": "FUJIKON IND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 928,
//    "stockCn": "野馬國際",
//    "stockEn": "TACK FIORI",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 929,
//    "stockCn": "國際精密",
//    "stockEn": "IPE GROUP",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 930,
//    "stockCn": "中國森林",
//    "stockEn": "CHINA FORESTRY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 931,
//    "stockCn": "中國天然氣",
//    "stockEn": "CHINA LNG",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 932,
//    "stockCn": "御藥堂",
//    "stockEn": "RM GROUP",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 933,
//    "stockCn": "光匯石油",
//    "stockEn": "BRIGHTOIL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 934,
//    "stockCn": "中石化冠德",
//    "stockEn": "SINOPEC KANTONS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 935,
//    "stockCn": "龍翔集團",
//    "stockEn": "DRAGON CROWN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 936,
//    "stockCn": "鵬程亞洲",
//    "stockEn": "EAGLE LEGEND",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 938,
//    "stockCn": "民生國際",
//    "stockEn": "MAN SANG INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 939,
//    "stockCn": "建設銀行",
//    "stockEn": "CCB",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 940,
//    "stockCn": "中國動物保健品",
//    "stockEn": "C ANIMAL HEALTH",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 941,
//    "stockCn": "中國移動",
//    "stockEn": "CHINA MOBILE",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 943,
//    "stockCn": "意科控股",
//    "stockEn": "EFORCE HOLDINGS",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 945,
//    "stockCn": "宏利金融-S",
//    "stockEn": "MANULIFE-S",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 947,
//    "stockCn": "摩比發展",
//    "stockEn": "MOBI DEV",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 948,
//    "stockCn": "融達控股",
//    "stockEn": "Z-OBEE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 950,
//    "stockCn": "李氏大藥廠",
//    "stockEn": "LEE'S PHARM",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 951,
//    "stockCn": "超威動力",
//    "stockEn": "CHAOWEI POWER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 952,
//    "stockCn": "華富國際",
//    "stockEn": "QUAM",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 953,
//    "stockCn": "邵氏兄弟控股",
//    "stockEn": "SHAW BROTHERS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 954,
//    "stockCn": "常茂生物",
//    "stockEn": "CHANGMAO BIO",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 956,
//    "stockCn": "新天綠色能源",
//    "stockEn": "CHINA SUNTIEN",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 958,
//    "stockCn": "華能新能源",
//    "stockEn": "HN RENEWABLES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 959,
//    "stockCn": "奧瑪仕國際",
//    "stockEn": "AMAX INT HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 960,
//    "stockCn": "龍湖地產",
//    "stockEn": "LONGFOR PPT",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 963,
//    "stockCn": "華熙生物科技",
//    "stockEn": "BLOOMAGE BIOTEC",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 966,
//    "stockCn": "中國太平",
//    "stockEn": "CHINA TAIPING",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 967,
//    "stockCn": "桑德國際",
//    "stockEn": "SOUND GLOBAL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 968,
//    "stockCn": "信義光能",
//    "stockEn": "XINYI SOLAR",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 969,
//    "stockCn": "華聯國際",
//    "stockEn": "HUA LIEN INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 970,
//    "stockCn": "耀萊集團",
//    "stockEn": "SPARKLE ROLL",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 973,
//    "stockCn": "L'OCCITANE",
//    "stockEn": "L'OCCITANE",
//    "stockBoardLot": 250
//  },
//  {
//    "stockCode": 974,
//    "stockCn": "中國順客隆",
//    "stockEn": "SKL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 975,
//    "stockCn": "MONGOL MINING",
//    "stockEn": "MONGOL MINING",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 976,
//    "stockCn": "齊合天地",
//    "stockEn": "CHIHO-TIANDE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 978,
//    "stockCn": "招商局置地",
//    "stockEn": "CHI MER LAND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 979,
//    "stockCn": "綠色能源科技集團",
//    "stockEn": "GREEN ENERGY GP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 980,
//    "stockCn": "聯華超市",
//    "stockEn": "LIANHUA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 981,
//    "stockCn": "中芯國際",
//    "stockEn": "SMIC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 982,
//    "stockCn": "卓智控股",
//    "stockEn": "IONE HOLDINGS",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 983,
//    "stockCn": "瑞安建業",
//    "stockEn": "SOCAM DEV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 984,
//    "stockCn": "永旺",
//    "stockEn": "AEON STORES",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 985,
//    "stockCn": "網智金控",
//    "stockEn": "NETMIND FIN",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 986,
//    "stockCn": "中國環保能源",
//    "stockEn": "CH ENV ENERGY",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 987,
//    "stockCn": "中國再生能源投資",
//    "stockEn": "CH RENEW EN INV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 988,
//    "stockCn": "樓東俊安資源",
//    "stockEn": "LOUDONG GN RES",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 989,
//    "stockCn": "廣澤地產",
//    "stockEn": "GROUND PPT",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 990,
//    "stockCn": "榮暉國際",
//    "stockEn": "THEME INT'L",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 991,
//    "stockCn": "大唐發電",
//    "stockEn": "DATANG POWER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 992,
//    "stockCn": "聯想集團",
//    "stockEn": "LENOVO GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 993,
//    "stockCn": "華融金控",
//    "stockEn": "HUARONG INT FIN",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 995,
//    "stockCn": "安徽皖通高速公路",
//    "stockEn": "ANHUIEXPRESSWAY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 996,
//    "stockCn": "嘉年華國際",
//    "stockEn": "CARNIVAL GROUP",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 997,
//    "stockCn": "普匯中金國際",
//    "stockEn": "CHINLINK INTL",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 998,
//    "stockCn": "中信銀行",
//    "stockEn": "CITIC BANK",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 999,
//    "stockCn": "I.T",
//    "stockEn": "I.T",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1000,
//    "stockCn": "北青傳媒",
//    "stockEn": "BEIJING MEDIA",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1001,
//    "stockCn": "滬港聯合",
//    "stockEn": "HK SH ALLIANCE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1002,
//    "stockCn": "威鋮國際",
//    "stockEn": "V.S. INT'L",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1003,
//    "stockCn": "歡喜傳媒",
//    "stockEn": "HUANXI MEDIA",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1004,
//    "stockCn": "中國智慧能源",
//    "stockEn": "C SMARTERENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1005,
//    "stockCn": "MATRIX HOLDINGS",
//    "stockEn": "MATRIX HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1006,
//    "stockCn": "長壽花食品",
//    "stockEn": "CHANGSHOUHUA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1007,
//    "stockCn": "大慶乳業",
//    "stockEn": "DAQING DAIRY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1008,
//    "stockCn": "貴聯控股",
//    "stockEn": "BRILLIANT CIR",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1009,
//    "stockCn": "國際娛樂",
//    "stockEn": "INT'L ENT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1010,
//    "stockCn": "太睿國際控股",
//    "stockEn": "PACRAY INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1011,
//    "stockCn": "泰凌醫藥",
//    "stockEn": "NT PHARMA",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1013,
//    "stockCn": "偉俊集團控股",
//    "stockEn": "WAI CHUN GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1019,
//    "stockCn": "康宏環球",
//    "stockEn": "CONVOY",
//    "stockBoardLot": 6000
//  },
//  {
//    "stockCode": 1020,
//    "stockCn": "華耐控股",
//    "stockEn": "SINOREF HLDGS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1021,
//    "stockCn": "麥達斯控股─Ｓ",
//    "stockEn": "MIDAS HLDGS-S",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1022,
//    "stockCn": "飛魚科技",
//    "stockEn": "FEIYU",
//    "stockBoardLot": 1500
//  },
//  {
//    "stockCode": 1023,
//    "stockCn": "時代集團控股",
//    "stockEn": "SITOY GROUP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1026,
//    "stockCn": "環球實業科技",
//    "stockEn": "UNIVERSAL TECH",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1027,
//    "stockCn": "中國集成控股",
//    "stockEn": "CHINA JICHENG",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1028,
//    "stockCn": "千百度",
//    "stockEn": "C.BANNER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1029,
//    "stockCn": "鐵貨",
//    "stockEn": "IRC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1030,
//    "stockCn": "新城發展控股",
//    "stockEn": "FUTURE LAND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1031,
//    "stockCn": "金利豐金融",
//    "stockEn": "KINGSTON FIN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1033,
//    "stockCn": "中石化油服",
//    "stockEn": "SINOPEC SSC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1035,
//    "stockCn": "ＢＢＩ生命科學",
//    "stockEn": "BBI LIFE SCI",
//    "stockBoardLot": 1500
//  },
//  {
//    "stockCode": 1036,
//    "stockCn": "萬科置業海外",
//    "stockEn": "VANKE PPT OVS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1037,
//    "stockCn": "雲智匯科技",
//    "stockEn": "MAXNERVA TECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1038,
//    "stockCn": "長江基建集團",
//    "stockEn": "CKI HOLDINGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1039,
//    "stockCn": "鑫網易商",
//    "stockEn": "FORTUNET E-COMM",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1041,
//    "stockCn": "林達控股",
//    "stockEn": "LAMTEX HLDGS",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1043,
//    "stockCn": "光宇國際集團科技",
//    "stockEn": "COSLIGHT TECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1044,
//    "stockCn": "恒安國際",
//    "stockEn": "HENGAN INT'L",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1045,
//    "stockCn": "亞太衛星",
//    "stockEn": "APT SATELLITE",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1046,
//    "stockCn": "寰宇國際金融",
//    "stockEn": "UNI INTL FIN",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1047,
//    "stockCn": "毅興行",
//    "stockEn": "NGAI HING HONG",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1048,
//    "stockCn": "新源控股",
//    "stockEn": "NOVO GROUP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1049,
//    "stockCn": "時富投資",
//    "stockEn": "CELESTIAL ASIA",
//    "stockBoardLot": 6000
//  },
//  {
//    "stockCode": 1050,
//    "stockCn": "嘉利國際",
//    "stockEn": "KARRIE INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1051,
//    "stockCn": "國際資源",
//    "stockEn": "G-RESOURCES",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 1052,
//    "stockCn": "越秀交通基建",
//    "stockEn": "YUEXIUTRANSPORT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1053,
//    "stockCn": "重慶鋼鐵股份",
//    "stockEn": "CHONGQING IRON",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1055,
//    "stockCn": "中國南方航空股份",
//    "stockEn": "CHINA SOUTH AIR",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1057,
//    "stockCn": "浙江世寶",
//    "stockEn": "ZHEJIANG SHIBAO",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1058,
//    "stockCn": "粵海制革",
//    "stockEn": "GUANGDONG TANN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1059,
//    "stockCn": "看通集團",
//    "stockEn": "KANTONE HOLDING",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 1060,
//    "stockCn": "阿里影業",
//    "stockEn": "ALI PICTURES",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1061,
//    "stockCn": "億勝生物科技",
//    "stockEn": "ESSEX BIO-TECH",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1063,
//    "stockCn": "新確科技",
//    "stockEn": "SUNCORP TECH",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1064,
//    "stockCn": "中華國際",
//    "stockEn": "ZHONG HUA INT'L",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1065,
//    "stockCn": "天津創業環保股份",
//    "stockEn": "TIANJIN CAPITAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1066,
//    "stockCn": "威高股份",
//    "stockEn": "WEIGAO GROUP",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1068,
//    "stockCn": "雨潤食品",
//    "stockEn": "YURUN FOOD",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1069,
//    "stockCn": "中國農林低碳",
//    "stockEn": "CA LOW-CARBON",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1070,
//    "stockCn": "ＴＣＬ多媒體",
//    "stockEn": "TCL MULTIMEDIA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1071,
//    "stockCn": "華電國際電力股份",
//    "stockEn": "HUADIAN POWER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1072,
//    "stockCn": "東方電氣",
//    "stockEn": "DONGFANG ELEC",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 1073,
//    "stockCn": "浩倫農科",
//    "stockEn": "CHINA AGROTECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1075,
//    "stockCn": "首都信息",
//    "stockEn": "CAPINFO",
//    "stockBoardLot": 6000
//  },
//  {
//    "stockCode": 1076,
//    "stockCn": "博華太平洋",
//    "stockEn": "IMPERIAL PAC",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1079,
//    "stockCn": "松景科技",
//    "stockEn": "PINE TECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1080,
//    "stockCn": "勝利管道",
//    "stockEn": "SHENGLI PIPE",
//    "stockBoardLot": 1500
//  },
//  {
//    "stockCode": 1082,
//    "stockCn": "香港教育國際",
//    "stockEn": "HK EDU INTL",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 1083,
//    "stockCn": "港華燃氣",
//    "stockEn": "TOWNGAS CHINA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1085,
//    "stockCn": "亨鑫科技",
//    "stockEn": "HXTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1086,
//    "stockCn": "好孩子國際",
//    "stockEn": "GOODBABY INTL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1087,
//    "stockCn": "威訊控股",
//    "stockEn": "INVESTECH HLDGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1088,
//    "stockCn": "中國神華",
//    "stockEn": "CHINA SHENHUA",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1089,
//    "stockCn": "樂遊科技控股",
//    "stockEn": "LEYOU TECH H",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1090,
//    "stockCn": "大明國際",
//    "stockEn": "DA MING INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1091,
//    "stockCn": "中信大錳",
//    "stockEn": "CITIC DAMENG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1093,
//    "stockCn": "石藥集團",
//    "stockEn": "CSPC PHARMA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1094,
//    "stockCn": "中國公共採購",
//    "stockEn": "C P PROCUREMENT",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1096,
//    "stockCn": "中能國際控股",
//    "stockEn": "SINO ENERGY INT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1097,
//    "stockCn": "有線寬頻",
//    "stockEn": "I-CABLE COMM",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1098,
//    "stockCn": "ROAD KING INFRA",
//    "stockEn": "ROAD KING INFRA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1099,
//    "stockCn": "國藥控股",
//    "stockEn": "SINOPHARM",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 1100,
//    "stockCn": "飛達控股",
//    "stockEn": "MAINLAND HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1101,
//    "stockCn": "華榮能源",
//    "stockEn": "HUARONG ENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1102,
//    "stockCn": "環能國際",
//    "stockEn": "ENVIRO ENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1103,
//    "stockCn": "大生農業金融",
//    "stockEn": "DASHENG AGR FIN",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 1104,
//    "stockCn": "亞太資源",
//    "stockEn": "APAC RESOURCES",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1105,
//    "stockCn": "星島",
//    "stockEn": "SING TAO",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1106,
//    "stockCn": "中國海景",
//    "stockEn": "SINO HAIJING",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1107,
//    "stockCn": "當代置業",
//    "stockEn": "MODERN LAND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1108,
//    "stockCn": "洛陽玻璃股份",
//    "stockEn": "LUOYANG GLASS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1109,
//    "stockCn": "華潤置地",
//    "stockEn": "CHINA RES LAND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1110,
//    "stockCn": "金活醫藥集團",
//    "stockEn": "KINGWORLD",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1111,
//    "stockCn": "創興銀行",
//    "stockEn": "CHONG HING BANK",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1112,
//    "stockCn": "合生元",
//    "stockEn": "BIOSTIME",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1113,
//    "stockCn": "長實地產",
//    "stockEn": "CK PROPERTY",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1114,
//    "stockCn": "BRILLIANCE CHI",
//    "stockEn": "BRILLIANCE CHI",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1115,
//    "stockCn": "西藏水資源",
//    "stockEn": "TIBET WATER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1116,
//    "stockCn": "MAYER HOLDINGS",
//    "stockEn": "MAYER HOLDINGS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1117,
//    "stockCn": "現代牧業",
//    "stockEn": "CH MODERN D",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1118,
//    "stockCn": "高力集團",
//    "stockEn": "GOLIK HOLDINGS",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1120,
//    "stockCn": "雅視光學",
//    "stockEn": "ARTS OPTICAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1121,
//    "stockCn": "寶峰時尚",
//    "stockEn": "BAOFENGMODERN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1122,
//    "stockCn": "慶鈴汽車股份",
//    "stockEn": "QINGLING MOTORS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1123,
//    "stockCn": "中港照相",
//    "stockEn": "CHINA-HK PHOTO",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1124,
//    "stockCn": "沿海家園",
//    "stockEn": "COASTAL GL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1125,
//    "stockCn": "麗豐控股",
//    "stockEn": "LAI FUNG HOLD",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1126,
//    "stockCn": "德林國際",
//    "stockEn": "DREAM INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1127,
//    "stockCn": "匯星印刷",
//    "stockEn": "1010 PRINTING",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1128,
//    "stockCn": "永利澳門",
//    "stockEn": "WYNN MACAU",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 1129,
//    "stockCn": "中國水業集團",
//    "stockEn": "WATER INDUSTRY",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1130,
//    "stockCn": "中國環境資源",
//    "stockEn": "CHINA ENV RES",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1131,
//    "stockCn": "鴻寶資源",
//    "stockEn": "AGRITRADE RES",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1132,
//    "stockCn": "橙天嘉禾",
//    "stockEn": "ORANGE SKY G H",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1133,
//    "stockCn": "哈爾濱電氣",
//    "stockEn": "HARBIN ELECTRIC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1135,
//    "stockCn": "ASIA SATELLITE",
//    "stockEn": "ASIA SATELLITE",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1136,
//    "stockCn": "台泥國際集團",
//    "stockEn": "TCC INT'L HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1137,
//    "stockCn": "香港電視",
//    "stockEn": "HKTV",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1138,
//    "stockCn": "中海發展股份",
//    "stockEn": "CHINA SHIP DEV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1139,
//    "stockCn": "華多利集團",
//    "stockEn": "VICTORY GROUP",
//    "stockBoardLot": 16000
//  },
//  {
//    "stockCode": 1141,
//    "stockCn": "天順證券",
//    "stockEn": "SKYWAY SEC",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1142,
//    "stockCn": "西伯利亞礦業",
//    "stockEn": "SIBERIAN MINING",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1143,
//    "stockCn": "華夏健康產業",
//    "stockEn": "CH HCARE ENT",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1145,
//    "stockCn": "勇利航業",
//    "stockEn": "COURAGEMARINE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1146,
//    "stockCn": "中國服飾控股",
//    "stockEn": "CH OUTFITTERS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1148,
//    "stockCn": "新晨動力",
//    "stockEn": "POWER XINCHEN",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1149,
//    "stockCn": "中國安芯",
//    "stockEn": "ANXIN-CHINA",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1150,
//    "stockCn": "米蘭站",
//    "stockEn": "MILAN STATION",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1151,
//    "stockCn": "依利安達",
//    "stockEn": "ELEC & ELTEK",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1152,
//    "stockCn": "新融宇集團",
//    "stockEn": "INFINITY FIN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1155,
//    "stockCn": "星辰通信",
//    "stockEn": "CENTRON TELECOM",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1157,
//    "stockCn": "中聯重科",
//    "stockEn": "ZOOMLION",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 1159,
//    "stockCn": "集美國際娛樂",
//    "stockEn": "JIMEI INT ENT",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1161,
//    "stockCn": "奧思集團",
//    "stockEn": "WATER OASIS GP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1163,
//    "stockCn": "德金資源",
//    "stockEn": "DEJIN RES",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1164,
//    "stockCn": "中廣核礦業",
//    "stockEn": "CGN MINING",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1165,
//    "stockCn": "順風清潔能源",
//    "stockEn": "SFCE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1166,
//    "stockCn": "星凱控股",
//    "stockEn": "SOLARTECH INT'L",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1168,
//    "stockCn": "百仕達控股",
//    "stockEn": "SINOLINK HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1169,
//    "stockCn": "海爾電器",
//    "stockEn": "HAIER ELEC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1170,
//    "stockCn": "信星集團",
//    "stockEn": "KINGMAKER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1171,
//    "stockCn": "兗州煤業股份",
//    "stockEn": "YANZHOU COAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1172,
//    "stockCn": "勤達集團國際",
//    "stockEn": "MIDAS INT'L",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1173,
//    "stockCn": "威高國際",
//    "stockEn": "VEEKO INT'L",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1174,
//    "stockCn": "太平洋恩利",
//    "stockEn": "PACIFIC ANDES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1175,
//    "stockCn": "鮮馳達控股",
//    "stockEn": "FRESH EXP",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1176,
//    "stockCn": "珠光控股",
//    "stockEn": "ZHUGUANG HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1177,
//    "stockCn": "中國生物製藥",
//    "stockEn": "SINO BIOPHARM",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1178,
//    "stockCn": "天年集團",
//    "stockEn": "VITOP GROUP",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1180,
//    "stockCn": "匯彩控股",
//    "stockEn": "PARADISE ENT",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1181,
//    "stockCn": "唐宮中國",
//    "stockEn": "TANG PALACE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1182,
//    "stockCn": "勝龍國際",
//    "stockEn": "SUCCESS DRAGON",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1184,
//    "stockCn": "S.A.S. DRAGON",
//    "stockEn": "S.A.S. DRAGON",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1185,
//    "stockCn": "中國航天萬源",
//    "stockEn": "CHINA ENERGINE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1186,
//    "stockCn": "中國鐵建",
//    "stockEn": "CHINA RAIL CONS",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1187,
//    "stockCn": "漢唐國際控股",
//    "stockEn": "HAN TANG INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1188,
//    "stockCn": "正道集團",
//    "stockEn": "HYBRID KINETIC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1189,
//    "stockCn": "珀麗酒店",
//    "stockEn": "ROSEDALE HOTEL",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1190,
//    "stockCn": "航標控股",
//    "stockEn": "BOLINA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1191,
//    "stockCn": "粵首環保",
//    "stockEn": "YUESHOU ENV",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1192,
//    "stockCn": "泰山石化",
//    "stockEn": "TITAN PETROCHEM",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1193,
//    "stockCn": "華潤燃氣",
//    "stockEn": "CHINA RES GAS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1194,
//    "stockCn": "中國貴金屬",
//    "stockEn": "C PRECIOUSMETAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1195,
//    "stockCn": "京維集團",
//    "stockEn": "KINGWELL GROUP",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1196,
//    "stockCn": "偉祿集團",
//    "stockEn": "REALORD GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1197,
//    "stockCn": "中國恒石",
//    "stockEn": "CHINA HENGSHI",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1198,
//    "stockCn": "皇朝傢俬",
//    "stockEn": "ROYALE FURN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1199,
//    "stockCn": "中遠海運港口",
//    "stockEn": "COSCO SHIP PORT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1200,
//    "stockCn": "美聯集團",
//    "stockEn": "MIDLAND HOLDING",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1201,
//    "stockCn": "天臣控股",
//    "stockEn": "TESSON HOLDINGS",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 1202,
//    "stockCn": "成都普天電纜股份",
//    "stockEn": "CHENGDU PUTIAN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1203,
//    "stockCn": "廣南（集團）",
//    "stockEn": "GUANGNAN (HOLD)",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1205,
//    "stockCn": "中信資源",
//    "stockEn": "CITIC RESOURCES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1206,
//    "stockCn": "同方泰德",
//    "stockEn": "TECHNOVATOR",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1207,
//    "stockCn": "上置集團",
//    "stockEn": "SRE GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1208,
//    "stockCn": "五礦資源",
//    "stockEn": "MMG",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1210,
//    "stockCn": "克莉絲汀",
//    "stockEn": "CHRISTINE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1211,
//    "stockCn": "比亞迪股份",
//    "stockEn": "BYD COMPANY",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1212,
//    "stockCn": "利福國際",
//    "stockEn": "LIFESTYLE INT'L",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1213,
//    "stockCn": "萬保剛集團",
//    "stockEn": "MOBICON GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1215,
//    "stockCn": "開源控股",
//    "stockEn": "KAI YUAN HLDGS",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1218,
//    "stockCn": "永義國際",
//    "stockEn": "EASYKNIT INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1219,
//    "stockCn": "天喔國際",
//    "stockEn": "TENWOW INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1220,
//    "stockCn": "志道國際",
//    "stockEn": "ZHIDAO INT'L",
//    "stockBoardLot": 30000
//  },
//  {
//    "stockCode": 1221,
//    "stockCn": "SINO HOTELS",
//    "stockEn": "SINO HOTELS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1222,
//    "stockCn": "WANG ON GROUP",
//    "stockEn": "WANG ON GROUP",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1223,
//    "stockCn": "新灃集團",
//    "stockEn": "SYMPHONY HOLD",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1224,
//    "stockCn": "中渝置地",
//    "stockEn": "C C LAND",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1225,
//    "stockCn": "隆成金融",
//    "stockEn": "LERADO FIN-NEW",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1228,
//    "stockCn": "奇峰國際",
//    "stockEn": "SUPERB SUMMIT",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1229,
//    "stockCn": "南南資源",
//    "stockEn": "NAN NAN RES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1230,
//    "stockCn": "雅士利國際",
//    "stockEn": "YASHILI INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1231,
//    "stockCn": "新礦資源",
//    "stockEn": "NEWTON RES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1232,
//    "stockCn": "金輪天地控股",
//    "stockEn": "GW TIANDI",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1233,
//    "stockCn": "時代地產",
//    "stockEn": "TIMES PPT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1234,
//    "stockCn": "中國利郎",
//    "stockEn": "CHINA LILANG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1235,
//    "stockCn": "專業旅運",
//    "stockEn": "TRAVEL EXPERT",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1236,
//    "stockCn": "國農控股",
//    "stockEn": "NATIONAL AGRI",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1237,
//    "stockCn": "中科生物",
//    "stockEn": "CH ENV TECH&BIO",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1238,
//    "stockCn": "寶龍地產",
//    "stockEn": "POWERLONG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1239,
//    "stockCn": "金寶寶控股",
//    "stockEn": "JIN BAO BAO H",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1240,
//    "stockCn": "青建國際",
//    "stockEn": "CNQC INT'L",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 1241,
//    "stockCn": "雙樺控股",
//    "stockEn": "SHUANGHUA H",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1243,
//    "stockCn": "宏安地產",
//    "stockEn": "WANG ON PPT",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1245,
//    "stockCn": "NIRAKU",
//    "stockEn": "NIRAKU",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1246,
//    "stockCn": "毅信控股",
//    "stockEn": "NGAISHUN HOLD",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1247,
//    "stockCn": "米格國際控股",
//    "stockEn": "MIKO INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1249,
//    "stockCn": "通力電子",
//    "stockEn": "TONLY ELEC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1250,
//    "stockCn": "北控清潔能源集團",
//    "stockEn": "BE CLEAN ENERGY",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1251,
//    "stockCn": "華油能源",
//    "stockEn": "SPT ENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1252,
//    "stockCn": "中國天瑞水泥",
//    "stockEn": "CHINA TIANRUI",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1253,
//    "stockCn": "博大綠澤",
//    "stockEn": "BROADGREENSTATE",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1255,
//    "stockCn": "港大零售",
//    "stockEn": "S. CULTURE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1258,
//    "stockCn": "中國有色礦業",
//    "stockEn": "CHINFMINING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1259,
//    "stockCn": "中國兒童護理",
//    "stockEn": "CH CHILD CARE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1260,
//    "stockCn": "皓天財經集團",
//    "stockEn": "WONDERFUL SKY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1262,
//    "stockCn": "蠟筆小新食品",
//    "stockEn": "LABIXIAOXIN",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1263,
//    "stockCn": "栢能集團",
//    "stockEn": "PC PARTNER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1265,
//    "stockCn": "天津津燃公用",
//    "stockEn": "TIANJINJINRAN",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1266,
//    "stockCn": "西王特鋼",
//    "stockEn": "XIWANG STEEL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1268,
//    "stockCn": "美東汽車",
//    "stockEn": "MEIDONG AUTO",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1269,
//    "stockCn": "首控集團",
//    "stockEn": "FIRST CAP GP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1270,
//    "stockCn": "朗廷-SS",
//    "stockEn": "LANGHAM-SS",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1271,
//    "stockCn": "佳明集團控股",
//    "stockEn": "GRAND MING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1273,
//    "stockCn": "香港信貸",
//    "stockEn": "HK FINANCE GP",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1277,
//    "stockCn": "力量能源",
//    "stockEn": "KINETIC M&E",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1278,
//    "stockCn": "中國新城鎮",
//    "stockEn": "CHINANEWTOWN",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 1280,
//    "stockCn": "匯銀智慧社區",
//    "stockEn": "HUIYIN SMARTCOM",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1281,
//    "stockCn": "隆基泰和智慧能源",
//    "stockEn": "LT SMART ENERGY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1282,
//    "stockCn": "中國金洋",
//    "stockEn": "CHINA GOLDJOY",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1285,
//    "stockCn": "嘉士利集團",
//    "stockEn": "JIASHILI GP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1288,
//    "stockCn": "農業銀行",
//    "stockEn": "ABC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1289,
//    "stockCn": "盛力達科技",
//    "stockEn": "SUNLIT SCI",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1290,
//    "stockCn": "中國匯融",
//    "stockEn": "CHINA HUIRONG",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1292,
//    "stockCn": "長安民生物流",
//    "stockEn": "CMA LOGISTICS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1293,
//    "stockCn": "寶信汽車",
//    "stockEn": "BAOXIN AUTO",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1296,
//    "stockCn": "國電科環",
//    "stockEn": "GUODIAN TECH",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1297,
//    "stockCn": "中國擎天軟件",
//    "stockEn": "SINOSOFT TECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1298,
//    "stockCn": "天美(控股)",
//    "stockEn": "TECHCOMP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1299,
//    "stockCn": "友邦保險",
//    "stockEn": "AIA",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 1300,
//    "stockCn": "俊知集團",
//    "stockEn": "TRIGIANT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1301,
//    "stockCn": "德基科技控股",
//    "stockEn": "D&G TECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1302,
//    "stockCn": "先健科技",
//    "stockEn": "LIFETECH SCI",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1303,
//    "stockCn": "滙力資源",
//    "stockEn": "HUILI RES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1305,
//    "stockCn": "偉志控股",
//    "stockEn": "WAI CHI HOLD",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1308,
//    "stockCn": "海豐國際",
//    "stockEn": "SITC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1310,
//    "stockCn": "香港寬頻",
//    "stockEn": "HKBN",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1312,
//    "stockCn": "同方康泰",
//    "stockEn": "TONGFANG KONTA",
//    "stockBoardLot": 6000
//  },
//  {
//    "stockCode": 1313,
//    "stockCn": "華潤水泥控股",
//    "stockEn": "CHINARES CEMENT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1314,
//    "stockCn": "翠華控股",
//    "stockEn": "TSUI WAH HLDG",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1315,
//    "stockCn": "允升國際",
//    "stockEn": "VISION FAME",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1316,
//    "stockCn": "耐世特",
//    "stockEn": "NEXTEER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1317,
//    "stockCn": "楓葉教育",
//    "stockEn": "MAPLELEAF EDU",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1318,
//    "stockCn": "格菱控股",
//    "stockEn": "GREENS HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1319,
//    "stockCn": "靄華押業信貸",
//    "stockEn": "OIWAHPAWN",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 1321,
//    "stockCn": "中國新城市",
//    "stockEn": "CHINA NEWCITY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1322,
//    "stockCn": "創達科技控股",
//    "stockEn": "CW GROUP HOLD",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1323,
//    "stockCn": "NEWTREE GROUP",
//    "stockEn": "NEWTREE GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1326,
//    "stockCn": "天馬影視",
//    "stockEn": "PEGASUS ENT",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 1327,
//    "stockCn": "時間由你",
//    "stockEn": "TIME2U",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1328,
//    "stockCn": "精英國際",
//    "stockEn": "INT'L ELITE",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1329,
//    "stockCn": "首創鉅大",
//    "stockEn": "CAPITAL JUDA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1330,
//    "stockCn": "綠色動力環保",
//    "stockEn": "DYNAGREEN ENV",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1332,
//    "stockCn": "中國新進",
//    "stockEn": "CHINA OPTO",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1333,
//    "stockCn": "中國忠旺",
//    "stockEn": "CHINA ZHONGWANG",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 1335,
//    "stockCn": "順泰控股",
//    "stockEn": "SHEEN TAI",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1336,
//    "stockCn": "新華保險",
//    "stockEn": "NCI",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 1338,
//    "stockCn": "霸王集團",
//    "stockEn": "BAWANG GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1339,
//    "stockCn": "中國人民保險集團",
//    "stockEn": "PICC GROUP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1340,
//    "stockCn": "惠生國際",
//    "stockEn": "HUISHENG INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1341,
//    "stockCn": "焯陞企業",
//    "stockEn": "CLEAR LIFT",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 1345,
//    "stockCn": "中國先鋒醫藥",
//    "stockEn": "PIONEER PHARM",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1347,
//    "stockCn": "華虹半導體",
//    "stockEn": "HUA HONG SEMI",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1348,
//    "stockCn": "滉達富控股",
//    "stockEn": "QUALI-SMART",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1349,
//    "stockCn": "復旦張江",
//    "stockEn": "FUDANZHANGJIANG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1353,
//    "stockCn": "諾奇",
//    "stockEn": "NUOQI",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1355,
//    "stockCn": "朸濬國際",
//    "stockEn": "LEGEND STRAT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1358,
//    "stockCn": "普華和順",
//    "stockEn": "PW MEDTECH",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1359,
//    "stockCn": "中國信達",
//    "stockEn": "CHINA CINDA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1360,
//    "stockCn": "MEGAEXPO HLDG",
//    "stockEn": "MEGAEXPO HLDG",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1361,
//    "stockCn": "361度",
//    "stockEn": "361 DEGREES",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1362,
//    "stockCn": "新龍移動",
//    "stockEn": "SIS MOBILE",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1363,
//    "stockCn": "中滔環保",
//    "stockEn": "CTEG",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1365,
//    "stockCn": "綠地潤東",
//    "stockEn": "GREENLAND RD",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1366,
//    "stockCn": "江南集團",
//    "stockEn": "JIANGNAN GP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1367,
//    "stockCn": "恒寶企業控股",
//    "stockEn": "HANBO ENT HLDGS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1368,
//    "stockCn": "特步國際",
//    "stockEn": "XTEP INT'L",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1369,
//    "stockCn": "五洲國際",
//    "stockEn": "WUZHOU INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1370,
//    "stockCn": "恒實礦業",
//    "stockEn": "HENGSHIMINING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1371,
//    "stockCn": "華彩控股",
//    "stockEn": "CHINA LOTSYN",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 1372,
//    "stockCn": "怡益控股",
//    "stockEn": "EXCEL DEV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1373,
//    "stockCn": "國際家居零售",
//    "stockEn": "IH RETAIL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1375,
//    "stockCn": "中州證券",
//    "stockEn": "CC SECURITIES",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1378,
//    "stockCn": "中國宏橋",
//    "stockEn": "CHINAHONGQIAO",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1380,
//    "stockCn": "中國金石",
//    "stockEn": "CHI KINGSTONE",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1381,
//    "stockCn": "粵豐環保",
//    "stockEn": "CANVEST ENV",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1382,
//    "stockCn": "互太紡織",
//    "stockEn": "PACIFICTEXTILES",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1383,
//    "stockCn": "太陽世紀集團",
//    "stockEn": "SUNCENTURY GP",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1385,
//    "stockCn": "上海復旦",
//    "stockEn": "SHANGHAI FUDAN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1386,
//    "stockCn": "盈進集團",
//    "stockEn": "WALKER GROUP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1387,
//    "stockCn": "人和商業",
//    "stockEn": "RENHE COMM",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1388,
//    "stockCn": "安莉芳控股",
//    "stockEn": "EMBRY HOLDINGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1389,
//    "stockCn": "美捷控股",
//    "stockEn": "MAJOR HLDGS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1393,
//    "stockCn": "恒鼎實業",
//    "stockEn": "HIDILI INDUSTRY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1395,
//    "stockCn": "強泰環保",
//    "stockEn": "ELL ENV",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1396,
//    "stockCn": "毅德國際",
//    "stockEn": "HYDOO INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1397,
//    "stockCn": "碧瑤綠色集團",
//    "stockEn": "BAGUIO GREEN",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1398,
//    "stockCn": "工商銀行",
//    "stockEn": "ICBC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1399,
//    "stockCn": "飛毛腿",
//    "stockEn": "SCUD GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1400,
//    "stockCn": "宏太控股",
//    "stockEn": "WANG TAI HLDG",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1415,
//    "stockCn": "高偉電子",
//    "stockEn": "COWELL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1418,
//    "stockCn": "盛諾集團",
//    "stockEn": "SINOMAX GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1419,
//    "stockCn": "盈健醫療",
//    "stockEn": "HUMAN HEALTH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1420,
//    "stockCn": "川控股",
//    "stockEn": "CHUAN HOLDING",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1421,
//    "stockCn": "工蓋有限公司",
//    "stockEn": "KINGBO STRIKE",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1428,
//    "stockCn": "耀才證券金融",
//    "stockEn": "BRIGHT SMART",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1430,
//    "stockCn": "蘇創燃氣",
//    "stockEn": "SUCHUANG GAS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1431,
//    "stockCn": "原生態牧業",
//    "stockEn": "YST DAIRY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1432,
//    "stockCn": "中國聖牧",
//    "stockEn": "CHINA SHENGMU",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1438,
//    "stockCn": "富貴生命",
//    "stockEn": "NIRVANA ASIA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1439,
//    "stockCn": "中華包裝控股",
//    "stockEn": "CH PACK DEV",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1443,
//    "stockCn": "富臨集團控股",
//    "stockEn": "FULUM GP HLDG",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1446,
//    "stockCn": "鴻福堂",
//    "stockEn": "HUNGFOOKTONG",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1447,
//    "stockCn": "新福港",
//    "stockEn": "SFK",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1448,
//    "stockCn": "福壽園",
//    "stockEn": "FU SHOU YUAN",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1450,
//    "stockCn": "世紀睿科",
//    "stockEn": "CENTURY SAGE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1452,
//    "stockCn": "迪諾斯環保",
//    "stockEn": "DENOX ENV",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1456,
//    "stockCn": "國聯證券",
//    "stockEn": "GUOLIAN SEC",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1459,
//    "stockCn": "巨匠建設",
//    "stockEn": "JUJIANG CONS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1461,
//    "stockCn": "魯証期貨",
//    "stockEn": "LUZHENG FUTURES",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1462,
//    "stockCn": "金誠控股",
//    "stockEn": "GOLD-FIN HLDG",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1466,
//    "stockCn": "民生珠寶",
//    "stockEn": "MAN SANG JEWEL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1468,
//    "stockCn": "英裘控股",
//    "stockEn": "UKF",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1469,
//    "stockCn": "結好金融",
//    "stockEn": "GET NICE FIN",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1470,
//    "stockCn": "滴達國際",
//    "stockEn": "TIC TAC INT'L",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1476,
//    "stockCn": "恒投證券",
//    "stockEn": "HENGTOU SEC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1478,
//    "stockCn": "丘鈦科技",
//    "stockEn": "Q TECH",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1480,
//    "stockCn": "恩達集團控股",
//    "stockEn": "YAN TAT GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1483,
//    "stockCn": "譽宴集團",
//    "stockEn": "U BANQUET GP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1486,
//    "stockCn": "思城控股",
//    "stockEn": "C CHENG HLDGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1488,
//    "stockCn": "理文手袋",
//    "stockEn": "L&M HANDBAGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1492,
//    "stockCn": "中地乳業",
//    "stockEn": "ZHONGDI DAIRY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1495,
//    "stockCn": "集一家居",
//    "stockEn": "JIYIHOUSEHOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1496,
//    "stockCn": "亞積邦租賃",
//    "stockEn": "AP RENTALS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1498,
//    "stockCn": "培力控股",
//    "stockEn": "PURAPHARM",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1499,
//    "stockCn": "前進控股集團",
//    "stockEn": "LEAP HLDGS GP",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1500,
//    "stockCn": "現恆建築",
//    "stockEn": "INCON",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1508,
//    "stockCn": "中國再保險",
//    "stockEn": "CHINA RE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1509,
//    "stockCn": "和美醫療",
//    "stockEn": "HARMONICARE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1513,
//    "stockCn": "麗珠醫藥",
//    "stockEn": "LIVZON PHARMA",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 1515,
//    "stockCn": "鳳凰醫療",
//    "stockEn": "PHOENIXHEALTH",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1520,
//    "stockCn": "時尚環球",
//    "stockEn": "RUNWAY GLOBAL",
//    "stockBoardLot": 6000
//  },
//  {
//    "stockCode": 1522,
//    "stockCn": "中國城市軌道科技",
//    "stockEn": "C CITYRAILTEC",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1523,
//    "stockCn": "珩灣科技",
//    "stockEn": "PLOVER BAY TECH",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 1527,
//    "stockCn": "天潔環境",
//    "stockEn": "TENGY ENV",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 1528,
//    "stockCn": "紅星美凱龍",
//    "stockEn": "RS MACALLINE",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 1530,
//    "stockCn": "三生製藥",
//    "stockEn": "3SBIO",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1532,
//    "stockCn": "中國派對文化",
//    "stockEn": "CHINA PARTYTIME",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 1533,
//    "stockCn": "莊園牧場",
//    "stockEn": "ZHUANGYUAN PA",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1538,
//    "stockCn": "中奧到家",
//    "stockEn": "ZHONG AO HOME",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1543,
//    "stockCn": "中盈盛達融資擔保",
//    "stockEn": "JOIN-SHARE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1548,
//    "stockCn": "金斯瑞生物科技",
//    "stockEn": "GENSCRIPT BIO",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1549,
//    "stockCn": "永豐集團控股",
//    "stockEn": "EVER HARVEST GP",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 1555,
//    "stockCn": "ＭＩ能源",
//    "stockEn": "MIE HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1556,
//    "stockCn": "建業建榮",
//    "stockEn": "CHINNEY KW",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1557,
//    "stockCn": "劍虹集團控股",
//    "stockEn": "K.H. GP HLDGS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1558,
//    "stockCn": "東陽光藥",
//    "stockEn": "HEC PHARM",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 1559,
//    "stockCn": "均安控股",
//    "stockEn": "KWAN ON HLDGS",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1560,
//    "stockCn": "星星地產",
//    "stockEn": "STAR PROPERTIES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1561,
//    "stockCn": "萬輝化工",
//    "stockEn": "MANFIELD CHEM",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1565,
//    "stockCn": "成實外教育",
//    "stockEn": "VIRSCEND EDU",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1566,
//    "stockCn": "華夏動漫",
//    "stockEn": "CHINA ANIMATION",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1568,
//    "stockCn": "承達集團",
//    "stockEn": "SUNDART HLDGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1570,
//    "stockCn": "偉業控股",
//    "stockEn": "WEIYE HOLDINGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1573,
//    "stockCn": "中國優質能源",
//    "stockEn": "CH UNIENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1578,
//    "stockCn": "天津銀行",
//    "stockEn": "BANK OF TIANJIN",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1579,
//    "stockCn": "頤海國際",
//    "stockEn": "YIHAI INTL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1583,
//    "stockCn": "親親食品",
//    "stockEn": "QINQIN FOODS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1585,
//    "stockCn": "雅迪控股",
//    "stockEn": "YADEA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1586,
//    "stockCn": "中國力鴻",
//    "stockEn": "CHINA LEON",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1588,
//    "stockCn": "暢捷通",
//    "stockEn": "CHANJET",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 1589,
//    "stockCn": "中國物流資產",
//    "stockEn": "CNLP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1599,
//    "stockCn": "城建設計",
//    "stockEn": "UCD",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1600,
//    "stockCn": "天倫燃氣",
//    "stockEn": "TIAN LUN GAS",
//    "stockBoardLot": 1500
//  },
//  {
//    "stockCode": 1606,
//    "stockCn": "國銀租賃",
//    "stockEn": "CDB LEASING",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1612,
//    "stockCn": "永勝醫療",
//    "stockEn": "VINCENT MED",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1613,
//    "stockCn": "協同通信",
//    "stockEn": "SYNERTONE",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 1616,
//    "stockCn": "銀仕來控股",
//    "stockEn": "SILVERMAN HL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1618,
//    "stockCn": "中國中冶",
//    "stockEn": "MCC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1619,
//    "stockCn": "天合化工",
//    "stockEn": "TIANHE CHEM",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1622,
//    "stockCn": "力高地產",
//    "stockEn": "REDCO PPT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1623,
//    "stockCn": "海隆控股",
//    "stockEn": "HILONG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1626,
//    "stockCn": "嘉耀控股",
//    "stockEn": "JIA YAO HLDGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1628,
//    "stockCn": "禹洲地產",
//    "stockEn": "YUZHOU PPT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1636,
//    "stockCn": "中國金屬利用",
//    "stockEn": "CMRU",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1638,
//    "stockCn": "佳兆業集團",
//    "stockEn": "KAISA GROUP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1639,
//    "stockCn": "安捷利實業",
//    "stockEn": "AKM INDUSTRIAL",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 1661,
//    "stockCn": "智美體育",
//    "stockEn": "WISDOM SPORTS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1662,
//    "stockCn": "義合控股",
//    "stockEn": "YEE HOP HLDGS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1663,
//    "stockCn": "漢港控股",
//    "stockEn": "S HARBOURHOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1666,
//    "stockCn": "同仁堂科技",
//    "stockEn": "TONG REN TANG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1668,
//    "stockCn": "華南城",
//    "stockEn": "CHINASOUTHCITY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1669,
//    "stockCn": "環球信貸集團",
//    "stockEn": "GIC GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1673,
//    "stockCn": "華章科技",
//    "stockEn": "HUAZHANG TECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1678,
//    "stockCn": "中創環球",
//    "stockEn": "CREATIVE GLOBAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1680,
//    "stockCn": "澳門勵駿",
//    "stockEn": "MACAU LEGEND",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1681,
//    "stockCn": "康臣葯業",
//    "stockEn": "CONSUN PHARMA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1682,
//    "stockCn": "高銳中國物聯",
//    "stockEn": "HIGHLIGHT IOT",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1683,
//    "stockCn": "良斯集團",
//    "stockEn": "LC GROUP",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1685,
//    "stockCn": "博耳電力",
//    "stockEn": "BOER POWER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1689,
//    "stockCn": "華禧控股",
//    "stockEn": "HUAXIHOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1698,
//    "stockCn": "博士蛙國際",
//    "stockEn": "BOSHIWA INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1699,
//    "stockCn": "普甜食品",
//    "stockEn": "PUTIAN FOOD",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1700,
//    "stockCn": "華地國際控股",
//    "stockEn": "SPRINGLAND",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1708,
//    "stockCn": "三寶科技",
//    "stockEn": "SAMPLE TECH",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1717,
//    "stockCn": "澳優",
//    "stockEn": "AUSNUTRIA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1718,
//    "stockCn": "宏基集團控股",
//    "stockEn": "WAN KEI GROUP",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 1728,
//    "stockCn": "正通汽車",
//    "stockEn": "ZHENGTONGAUTO",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1733,
//    "stockCn": "永暉控股",
//    "stockEn": "WINSWAY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1738,
//    "stockCn": "飛尚無煙煤",
//    "stockEn": "FS ANTHRACITE",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 1766,
//    "stockCn": "中國中車",
//    "stockEn": "CRRC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1768,
//    "stockCn": "BRACELL",
//    "stockEn": "BRACELL",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1771,
//    "stockCn": "新豐泰集團",
//    "stockEn": "SUNFONDA GP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1776,
//    "stockCn": "廣發証券",
//    "stockEn": "GF SEC",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 1777,
//    "stockCn": "花樣年控股",
//    "stockEn": "FANTASIA",
//    "stockBoardLot": 1500
//  },
//  {
//    "stockCode": 1778,
//    "stockCn": "彩生活",
//    "stockEn": "COLOUR LIFE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1786,
//    "stockCn": "鐵建裝備",
//    "stockEn": "CRCCE",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1788,
//    "stockCn": "國泰君安國際",
//    "stockEn": "GUOTAI JUNAN I",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1798,
//    "stockCn": "大唐新能源",
//    "stockEn": "DATANG RENEW",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1799,
//    "stockCn": "新特能源",
//    "stockEn": "XINTE ENERGY",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 1800,
//    "stockCn": "中國交通建設",
//    "stockEn": "CHINA COMM CONS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1803,
//    "stockCn": "北京體育文化",
//    "stockEn": "BJ SPORTS & ENT",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 1808,
//    "stockCn": "企展控股",
//    "stockEn": "ENTERPRISE DEV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1811,
//    "stockCn": "中廣核新能源",
//    "stockEn": "CGN NEW ENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1812,
//    "stockCn": "晨鳴紙業",
//    "stockEn": "CHENMING PAPER",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1813,
//    "stockCn": "合景泰富",
//    "stockEn": "KWG PROPERTY",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1816,
//    "stockCn": "中廣核電力",
//    "stockEn": "CGN POWER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1818,
//    "stockCn": "招金礦業",
//    "stockEn": "ZHAOJIN MINING",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1819,
//    "stockCn": "富貴鳥",
//    "stockEn": "FUGUINIAO",
//    "stockBoardLot": 600
//  },
//  {
//    "stockCode": 1822,
//    "stockCn": "弘達金融控股",
//    "stockEn": "HONGDA FIN",
//    "stockBoardLot": 30000
//  },
//  {
//    "stockCode": 1823,
//    "stockCn": "華昱高速",
//    "stockEn": "HUAYUEXPRESSWAY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1828,
//    "stockCn": "大昌行集團",
//    "stockEn": "DCH HOLDINGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1829,
//    "stockCn": "中國機械工程",
//    "stockEn": "CMEC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1830,
//    "stockCn": "必瘦站",
//    "stockEn": "PERFECT SHAPE",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1831,
//    "stockCn": "十方控股",
//    "stockEn": "SHIFANG HLDG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1833,
//    "stockCn": "銀泰商業",
//    "stockEn": "INTIME",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1836,
//    "stockCn": "九興控股",
//    "stockEn": "STELLA HOLDINGS",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1838,
//    "stockCn": "CHINAPROPERTIES",
//    "stockEn": "CHINAPROPERTIES",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1848,
//    "stockCn": "中國飛機租賃",
//    "stockEn": "CALC",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1856,
//    "stockCn": "依波路",
//    "stockEn": "ERNEST BOREL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1858,
//    "stockCn": "春立醫療",
//    "stockEn": "CHUNLI MEDICAL",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 1862,
//    "stockCn": "景瑞控股",
//    "stockEn": "JINGRUI HLDGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1863,
//    "stockCn": "中國龍天集團",
//    "stockEn": "CHI LONGEVITY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1866,
//    "stockCn": "中國心連心化肥",
//    "stockEn": "CHINA XLX FERT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1868,
//    "stockCn": "同方友友",
//    "stockEn": "NEO-NEON",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1878,
//    "stockCn": "南戈壁-S",
//    "stockEn": "SOUTHGOBI-S",
//    "stockBoardLot": 50
//  },
//  {
//    "stockCode": 1880,
//    "stockCn": "百麗國際",
//    "stockEn": "BELLE INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1882,
//    "stockCn": "海天國際",
//    "stockEn": "HAITIAN INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1883,
//    "stockCn": "中信國際電訊",
//    "stockEn": "CITIC TELECOM",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1884,
//    "stockCn": "ＥＰＲＩＮＴ集團",
//    "stockEn": "EPRINT GROUP",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1885,
//    "stockCn": "中國優材",
//    "stockEn": "CH WOOD OPT",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1886,
//    "stockCn": "匯源果汁",
//    "stockEn": "HUIYUAN JUICE",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1888,
//    "stockCn": "建滔積層板",
//    "stockEn": "KB LAMINATES",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1889,
//    "stockCn": "武夷藥業",
//    "stockEn": "WUYI PHARMA",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 1893,
//    "stockCn": "中材股份",
//    "stockEn": "SINOMA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1898,
//    "stockCn": "中煤能源",
//    "stockEn": "CHINA COAL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1899,
//    "stockCn": "興達國際",
//    "stockEn": "XINGDA INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1900,
//    "stockCn": "中國智能交通",
//    "stockEn": "CHINA ITS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1908,
//    "stockCn": "建發國際集團",
//    "stockEn": "C&D INTL GROUP",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1910,
//    "stockCn": "新秀麗",
//    "stockEn": "SAMSONITE",
//    "stockBoardLot": 300
//  },
//  {
//    "stockCode": 1913,
//    "stockCn": "普拉達",
//    "stockEn": "PRADA",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 1918,
//    "stockCn": "融創中國",
//    "stockEn": "SUNAC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1919,
//    "stockCn": "中國遠洋",
//    "stockEn": "CHINA COSCO",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1928,
//    "stockCn": "金沙中國有限公司",
//    "stockEn": "SANDS CHINA LTD",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 1929,
//    "stockCn": "周大福",
//    "stockEn": "CHOW TAI FOOK",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 1938,
//    "stockCn": "珠江鋼管",
//    "stockEn": "CHU KONG PIPE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1958,
//    "stockCn": "北京汽車",
//    "stockEn": "BAIC MOTOR",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1963,
//    "stockCn": "重慶銀行",
//    "stockEn": "BCQ",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1966,
//    "stockCn": "中駿置業",
//    "stockEn": "CHINA SCE PPT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1968,
//    "stockCn": "匹克體育",
//    "stockEn": "PEAK SPORT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1970,
//    "stockCn": "IMAX CHINA",
//    "stockEn": "IMAX CHINA",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 1972,
//    "stockCn": "太古地產",
//    "stockEn": "SWIREPROPERTIES",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 1979,
//    "stockCn": "天寶集團",
//    "stockEn": "TEN PAO GROUP",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 1980,
//    "stockCn": "天鴿互動",
//    "stockEn": "TIANGE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 1982,
//    "stockCn": "南旋控股",
//    "stockEn": "NAMESON HLDGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1986,
//    "stockCn": "彩客化學",
//    "stockEn": "TSAKER CHEM",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1988,
//    "stockCn": "民生銀行",
//    "stockEn": "MINSHENG BANK",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1991,
//    "stockCn": "大洋集團",
//    "stockEn": "TA YANG GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1993,
//    "stockCn": "雅仕維",
//    "stockEn": "ASIARAY",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 1998,
//    "stockCn": "飛克國際",
//    "stockEn": "FLYKE INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 1999,
//    "stockCn": "敏華控股",
//    "stockEn": "MAN WAH HLDGS",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 2000,
//    "stockCn": "晨訊科技",
//    "stockEn": "SIM TECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2002,
//    "stockCn": "陽光紙業",
//    "stockEn": "SUNSHINE PAPER",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2005,
//    "stockCn": "石四藥集團",
//    "stockEn": "SSY GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2006,
//    "stockCn": "錦江酒店",
//    "stockEn": "JINJIANG HOTELS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2007,
//    "stockCn": "碧桂園",
//    "stockEn": "COUNTRY GARDEN",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2008,
//    "stockCn": "鳳凰衛視",
//    "stockEn": "PHOENIX TV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2009,
//    "stockCn": "金隅股份",
//    "stockEn": "BBMG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2010,
//    "stockCn": "瑞年國際",
//    "stockEn": "REAL NUTRI",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2011,
//    "stockCn": "KEE",
//    "stockEn": "KEE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2012,
//    "stockCn": "陽光油砂",
//    "stockEn": "SUNSHINE OIL",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2014,
//    "stockCn": "浩澤淨水",
//    "stockEn": "OZNER WATER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2016,
//    "stockCn": "浙商銀行",
//    "stockEn": "CZBANK",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2018,
//    "stockCn": "瑞聲科技",
//    "stockEn": "AAC TECH",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2020,
//    "stockCn": "安踏體育",
//    "stockEn": "ANTA SPORTS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2023,
//    "stockCn": "中國綠島科技",
//    "stockEn": "CHINA LUDAO",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2028,
//    "stockCn": "映美控股",
//    "stockEn": "JOLIMARK",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2030,
//    "stockCn": "卡賓",
//    "stockEn": "CABBEEN",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2031,
//    "stockCn": "澳至尊",
//    "stockEn": "AUSUPREME",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 2033,
//    "stockCn": "時計寶",
//    "stockEn": "TIME WATCH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2038,
//    "stockCn": "富智康集團",
//    "stockEn": "FIH",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2039,
//    "stockCn": "中集集團",
//    "stockEn": "CIMC",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 2066,
//    "stockCn": "盛京銀行",
//    "stockEn": "SHENGJINGBANK",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2068,
//    "stockCn": "中鋁國際",
//    "stockEn": "CHALIECO",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2078,
//    "stockCn": "榮陽實業",
//    "stockEn": "PANASIALUM",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2080,
//    "stockCn": "奧克斯國際",
//    "stockEn": "AUX INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2083,
//    "stockCn": "大自然家居",
//    "stockEn": "NATURE HOME",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2086,
//    "stockCn": "龍傑智能卡",
//    "stockEn": "ADVANCED CARD",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 2088,
//    "stockCn": "西王置業",
//    "stockEn": "XIWANG PROPERTY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2098,
//    "stockCn": "卓爾集團",
//    "stockEn": "ZALL GROUP",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 2099,
//    "stockCn": "中國黃金國際",
//    "stockEn": "CHINAGOLDINTL",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 2100,
//    "stockCn": "百奧家庭互動",
//    "stockEn": "BAIOO",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2111,
//    "stockCn": "超盈國際控股",
//    "stockEn": "BEST PACIFIC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2112,
//    "stockCn": "優庫資源",
//    "stockEn": "CAA RESOURCES",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2118,
//    "stockCn": "天山發展控股",
//    "stockEn": "TIAN SHAN DEV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2120,
//    "stockCn": "康寧醫院",
//    "stockEn": "KN HOSPITAL",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 2121,
//    "stockCn": "一化控股",
//    "stockEn": "FIRST CHEM",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2123,
//    "stockCn": "金盾控股",
//    "stockEn": "GOLDEN SHIELD",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2128,
//    "stockCn": "中國聯塑",
//    "stockEn": "CHINA LESSO",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2133,
//    "stockCn": "中國多金屬",
//    "stockEn": "CH POLYMETAL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2136,
//    "stockCn": "利福中國",
//    "stockEn": "LIFESTYLE CHI",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2138,
//    "stockCn": "香港醫思醫療集團",
//    "stockEn": "UM HEALTHCARE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2168,
//    "stockCn": "盈德氣體",
//    "stockEn": "YINGDE GASES",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2178,
//    "stockCn": "百勤油服",
//    "stockEn": "PETRO-KING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2183,
//    "stockCn": "利福地產",
//    "stockEn": "LIFESTYLE PPT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2186,
//    "stockCn": "綠葉製藥",
//    "stockEn": "LUYE PHARMA",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2188,
//    "stockCn": "泰坦能源技術",
//    "stockEn": "TITANS ENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2193,
//    "stockCn": "萬景控股",
//    "stockEn": "MAN KING HOLD",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2196,
//    "stockCn": "復星醫藥",
//    "stockEn": "FOSUN PHARMA",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2198,
//    "stockCn": "中國三江化工",
//    "stockEn": "CHINA SANJIANG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2199,
//    "stockCn": "維珍妮",
//    "stockEn": "REGINA MIRACLE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2200,
//    "stockCn": "浩沙國際",
//    "stockEn": "HOSA INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2202,
//    "stockCn": "萬科企業",
//    "stockEn": "CHINA VANKE",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 2208,
//    "stockCn": "金風科技",
//    "stockEn": "GOLDWIND",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 2211,
//    "stockCn": "大健康國際",
//    "stockEn": "UNI HEALTH",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2212,
//    "stockCn": "高鵬礦業",
//    "stockEn": "FB MINING",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 2213,
//    "stockCn": "益華控股",
//    "stockEn": "YI HUA HLDG",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2218,
//    "stockCn": "安德利果汁",
//    "stockEn": "ANDRE JUICE",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2221,
//    "stockCn": "創業集團控股",
//    "stockEn": "NEW CONCEPTS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2222,
//    "stockCn": "雷士照明",
//    "stockEn": "NVC LIGHTING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2223,
//    "stockCn": "卡撒天嬌",
//    "stockEn": "CASABLANCA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2226,
//    "stockCn": "老恒和釀造",
//    "stockEn": "HONWORLD GP",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2228,
//    "stockCn": "中國節能海東青",
//    "stockEn": "CECEP COSTIN",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 2229,
//    "stockCn": "長港敦信",
//    "stockEn": "CG DUNXIN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2233,
//    "stockCn": "西部水泥",
//    "stockEn": "WESTCHINACEMENT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2236,
//    "stockCn": "惠生工程",
//    "stockEn": "WISON ENGRG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2238,
//    "stockCn": "廣汽集團",
//    "stockEn": "GAC GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2239,
//    "stockCn": "國微技術",
//    "stockEn": "SMIT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2255,
//    "stockCn": "海昌海洋公園",
//    "stockEn": "HAICHANG HLDG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2268,
//    "stockCn": "優源控股",
//    "stockEn": "YOUYUAN HLDGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2277,
//    "stockCn": "震昇工程",
//    "stockEn": "CHUN SING ENG",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 2278,
//    "stockCn": "海藍控股",
//    "stockEn": "HAILAN HLDGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2280,
//    "stockCn": "慧聰網",
//    "stockEn": "HC INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2282,
//    "stockCn": "美高梅中國",
//    "stockEn": "MGM CHINA",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 2283,
//    "stockCn": "東江集團控股",
//    "stockEn": "TK GROUP HLDG",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2286,
//    "stockCn": "辰興發展",
//    "stockEn": "CHEN XING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2288,
//    "stockCn": "宏基資本",
//    "stockEn": "RYKADAN CAPITAL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2289,
//    "stockCn": "創美藥業",
//    "stockEn": "CHARMACY PHAR",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2298,
//    "stockCn": "都市麗人",
//    "stockEn": "COSMO LADY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2299,
//    "stockCn": "百宏實業",
//    "stockEn": "BILLION IND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2300,
//    "stockCn": "澳科控股",
//    "stockEn": "AMVIG HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2302,
//    "stockCn": "中核國際",
//    "stockEn": "CNNC INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2303,
//    "stockCn": "恒興黃金",
//    "stockEn": "HENGXING GOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2307,
//    "stockCn": "錦興國際控股",
//    "stockEn": "KAM HING INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2308,
//    "stockCn": "研祥智能",
//    "stockEn": "EVOC",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2309,
//    "stockCn": "伯明翰環球",
//    "stockEn": "BIRMINGHAM INTL",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 2310,
//    "stockCn": "申基國際",
//    "stockEn": "FOREBASE INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2313,
//    "stockCn": "申洲國際",
//    "stockEn": "SHENZHOU INTL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2314,
//    "stockCn": "理文造紙",
//    "stockEn": "LEE & MAN PAPER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2317,
//    "stockCn": "味丹國際",
//    "stockEn": "VEDAN INT'L",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2318,
//    "stockCn": "中國平安",
//    "stockEn": "PING AN",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2319,
//    "stockCn": "蒙牛乳業",
//    "stockEn": "MENGNIU DAIRY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2320,
//    "stockCn": "合豐集團",
//    "stockEn": "HOP FUNG GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2322,
//    "stockCn": "仁瑞投資",
//    "stockEn": "NOBLE CENTURY",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 2323,
//    "stockCn": "至卓國際",
//    "stockEn": "TOPSEARCH INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2326,
//    "stockCn": "百靈達國際控股",
//    "stockEn": "BEP INT'L HOLD",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 2327,
//    "stockCn": "宇業控股",
//    "stockEn": "U-HOME HOLDINGS",
//    "stockBoardLot": 6000
//  },
//  {
//    "stockCode": 2328,
//    "stockCn": "中國財險",
//    "stockEn": "PICC P&C",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2329,
//    "stockCn": "國瑞置業",
//    "stockEn": "GUORUI PPT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2330,
//    "stockCn": "中國上城",
//    "stockEn": "CHINA UPTOWN",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2331,
//    "stockCn": "李寧",
//    "stockEn": "LI NING",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2333,
//    "stockCn": "長城汽車",
//    "stockEn": "GREATWALL MOTOR",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2336,
//    "stockCn": "海亮國際",
//    "stockEn": "HAILIANG INTL",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 2338,
//    "stockCn": "濰柴動力",
//    "stockEn": "WEICHAI POWER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2339,
//    "stockCn": "京西國際",
//    "stockEn": "BWI INT'L",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2340,
//    "stockCn": "新昌管理集團",
//    "stockEn": "SYNERGIS HOLD",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2341,
//    "stockCn": "中怡國際",
//    "stockEn": "ECOGREEN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2342,
//    "stockCn": "京信通信",
//    "stockEn": "COMBA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2343,
//    "stockCn": "太平洋航運",
//    "stockEn": "PACIFIC BASIN",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2345,
//    "stockCn": "上海集優",
//    "stockEn": "SHANGHAI PRIME",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2348,
//    "stockCn": "東瑞製葯",
//    "stockEn": "DAWNRAYS PHARMA",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2349,
//    "stockCn": "中國城市基礎設施",
//    "stockEn": "CH CITY INFRA",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2355,
//    "stockCn": "寶業集團",
//    "stockEn": "BAOYE GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2356,
//    "stockCn": "大新銀行集團",
//    "stockEn": "DAHSING BANKING",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 2357,
//    "stockCn": "中航科工",
//    "stockEn": "AVICHINA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2358,
//    "stockCn": "久融控股",
//    "stockEn": "JIU RONG HOLD",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 2362,
//    "stockCn": "金川國際",
//    "stockEn": "JINCHUAN INTL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2366,
//    "stockCn": "星美文化旅遊",
//    "stockEn": "SMI CULTURE",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 2368,
//    "stockCn": "鷹美",
//    "stockEn": "EAGLE NICE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2369,
//    "stockCn": "酷派集團",
//    "stockEn": "COOLPAD GROUP",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2371,
//    "stockCn": "中國創聯教育",
//    "stockEn": "C CHUANGLIAN ED",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2378,
//    "stockCn": "保誠",
//    "stockEn": "PRU",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2379,
//    "stockCn": "中天國際",
//    "stockEn": "ZHONGTIAN INT'L",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 2380,
//    "stockCn": "中國電力",
//    "stockEn": "CHINA POWER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2382,
//    "stockCn": "舜宇光學科技",
//    "stockEn": "SUNNY OPTICAL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2383,
//    "stockCn": "TOM集團",
//    "stockEn": "TOM GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2386,
//    "stockCn": "中石化煉化工程",
//    "stockEn": "SINOPEC SEG",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2388,
//    "stockCn": "中銀香港",
//    "stockEn": "BOC HONG KONG",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2389,
//    "stockCn": "北控醫療健康",
//    "stockEn": "BJ ENT M&H",
//    "stockBoardLot": 6000
//  },
//  {
//    "stockCode": 2393,
//    "stockCn": "巨星國際控股",
//    "stockEn": "YESTAR INTL",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 2398,
//    "stockCn": "友佳國際",
//    "stockEn": "GOOD FRIEND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2399,
//    "stockCn": "虎都",
//    "stockEn": "FORDOO",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2468,
//    "stockCn": "創益太陽能",
//    "stockEn": "TRONY SOLAR",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2488,
//    "stockCn": "元征科技",
//    "stockEn": "LAUNCH TECH",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2588,
//    "stockCn": "中銀航空租賃",
//    "stockEn": "BOC AVIATION",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 2600,
//    "stockCn": "中國鋁業",
//    "stockEn": "CHALCO",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2601,
//    "stockCn": "中國太保",
//    "stockEn": "CPIC",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 2607,
//    "stockCn": "上海醫藥",
//    "stockEn": "SH PHARMA",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 2608,
//    "stockCn": "陽光１００中國",
//    "stockEn": "SUNSHINE 100",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2618,
//    "stockCn": "ＴＣＬ 通訊",
//    "stockEn": "TCL COMM",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2623,
//    "stockCn": "愛德新能源",
//    "stockEn": "ADD NEW ENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2628,
//    "stockCn": "中國人壽",
//    "stockEn": "CHINA LIFE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2638,
//    "stockCn": "港燈－ＳＳ",
//    "stockEn": "HKELECTRIC-SS",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2662,
//    "stockCn": "奕達",
//    "stockEn": "FITTEC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2666,
//    "stockCn": "環球醫療",
//    "stockEn": "UNI MEDICAL",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2668,
//    "stockCn": "百德國際",
//    "stockEn": "PAK TAK INT'L",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 2669,
//    "stockCn": "中海物業",
//    "stockEn": "CHINA OVS PPT",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 2678,
//    "stockCn": "天虹紡織",
//    "stockEn": "TEXHONG TEXTILE",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2686,
//    "stockCn": "亞美能源",
//    "stockEn": "AAG ENERGY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2688,
//    "stockCn": "新奧能源",
//    "stockEn": "ENN ENERGY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2689,
//    "stockCn": "玖龍紙業",
//    "stockEn": "ND PAPER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2698,
//    "stockCn": "魏橋紡織",
//    "stockEn": "WEIQIAO TEXTILE",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 2699,
//    "stockCn": "新明中國",
//    "stockEn": "XINMING CHINA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2700,
//    "stockCn": "格林國際控股",
//    "stockEn": "GREEN INTL HLDG",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 2722,
//    "stockCn": "重慶機電",
//    "stockEn": "CHONGQING M&E",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2727,
//    "stockCn": "上海電氣",
//    "stockEn": "SH ELECTRIC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2728,
//    "stockCn": "裕華能源",
//    "stockEn": "YUHUA ENERGY",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2738,
//    "stockCn": "華津國際控股",
//    "stockEn": "HUAJIN INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2768,
//    "stockCn": "佳源國際控股",
//    "stockEn": "JIAYUAN INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2777,
//    "stockCn": "富力地產",
//    "stockEn": "R&F PROPERTIES",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 2788,
//    "stockCn": "精熙國際",
//    "stockEn": "YORKEY OPTICAL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2789,
//    "stockCn": "遠大中國",
//    "stockEn": "YUANDA CHINA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2799,
//    "stockCn": "中國華融",
//    "stockEn": "CHINA HUARONG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2866,
//    "stockCn": "中海集運",
//    "stockEn": "CSCL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2868,
//    "stockCn": "首創置業",
//    "stockEn": "BJ CAPITAL LAND",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2869,
//    "stockCn": "綠城服務",
//    "stockEn": "GREENTOWN SER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2877,
//    "stockCn": "神威藥業",
//    "stockEn": "SHINEWAY PHARM",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2878,
//    "stockCn": "SOLOMON SYSTECH",
//    "stockEn": "SOLOMON SYSTECH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2880,
//    "stockCn": "大連港",
//    "stockEn": "DALIAN PORT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2882,
//    "stockCn": "香港資源控股",
//    "stockEn": "HKRH",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2883,
//    "stockCn": "中海油田服務",
//    "stockEn": "CHINA OILFIELD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2886,
//    "stockCn": "濱海投資",
//    "stockEn": "BINHAI INV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2888,
//    "stockCn": "渣打集團",
//    "stockEn": "STANCHART",
//    "stockBoardLot": 50
//  },
//  {
//    "stockCode": 2889,
//    "stockCn": "鎳資源國際",
//    "stockEn": "NRI HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2898,
//    "stockCn": "龍潤茶",
//    "stockEn": "LONGRUN TEA",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 2899,
//    "stockCn": "紫金礦業",
//    "stockEn": "ZIJIN MINING",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 2900,
//    "stockCn": "仁瑞投資",
//    "stockEn": "NOBLE CENTURY",
//    "stockBoardLot": 40000
//  },
//  {
//    "stockCode": 2902,
//    "stockCn": "中國金石",
//    "stockEn": "CHI KINGSTONE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 2903,
//    "stockCn": "寰宇國際金融股權",
//    "stockEn": "UNI INT FIN RTS",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 2997,
//    "stockCn": "隆成金融",
//    "stockEn": "LERADO FIN-OLD",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 2999,
//    "stockCn": "高富集團控股股權",
//    "stockEn": "GT GROUP RTS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 3300,
//    "stockCn": "中國玻璃",
//    "stockEn": "CHINA GLASS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3301,
//    "stockCn": "融信中國",
//    "stockEn": "RONSHINECHINA",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3303,
//    "stockCn": "巨濤海洋石油服務",
//    "stockEn": "JUTAL OIL SER",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3308,
//    "stockCn": "金鷹商貿集團",
//    "stockEn": "GOLDEN EAGLE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3311,
//    "stockCn": "中國建築國際",
//    "stockEn": "CHINA STATE CON",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3313,
//    "stockCn": "雅高控股",
//    "stockEn": "ARTGO HOLDINGS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3315,
//    "stockCn": "金邦達寶嘉",
//    "stockEn": "GOLDPAC GROUP",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3318,
//    "stockCn": "中國香精香料",
//    "stockEn": "CHINA FLAVORS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3322,
//    "stockCn": "永嘉集團",
//    "stockEn": "WIN HANVERKY",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3323,
//    "stockCn": "中國建材",
//    "stockEn": "CNBM",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3326,
//    "stockCn": "保發集團",
//    "stockEn": "PERFECT GROUP",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 3328,
//    "stockCn": "交通銀行",
//    "stockEn": "BANKCOMM",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3330,
//    "stockCn": "靈寶黃金",
//    "stockEn": "LINGBAO GOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3331,
//    "stockCn": "維達國際",
//    "stockEn": "VINDA INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3332,
//    "stockCn": "中生聯合",
//    "stockEn": "SINOLIFE UTD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3333,
//    "stockCn": "中國恒大",
//    "stockEn": "EVERGRANDE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3335,
//    "stockCn": "ＤＢＡ電訊",
//    "stockEn": "DBA TELECOM",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 3336,
//    "stockCn": "巨騰國際",
//    "stockEn": "JU TENG INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3337,
//    "stockCn": "安東油田服務",
//    "stockEn": "ANTON OILFIELD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3339,
//    "stockCn": "中國龍工",
//    "stockEn": "LONKING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3344,
//    "stockCn": "互益集團",
//    "stockEn": "ADDCHANCE",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3355,
//    "stockCn": "先進半導體",
//    "stockEn": "ASMC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3360,
//    "stockCn": "遠東宏信",
//    "stockEn": "FE HORIZON",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3363,
//    "stockCn": "正業國際",
//    "stockEn": "ZHENGYE INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3366,
//    "stockCn": "華僑城(亞洲)",
//    "stockEn": "OCT (ASIA)",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3368,
//    "stockCn": "百盛集團",
//    "stockEn": "PARKSON GROUP",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3369,
//    "stockCn": "秦港股份",
//    "stockEn": "QHD PORT",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3377,
//    "stockCn": "遠洋集團",
//    "stockEn": "SINO-OCEAN GP",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3378,
//    "stockCn": "廈門港務",
//    "stockEn": "XIAMEN PORT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3380,
//    "stockCn": "龍光地產",
//    "stockEn": "LOGAN PPT",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3382,
//    "stockCn": "天津港發展",
//    "stockEn": "TIANJINPORT DEV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3383,
//    "stockCn": "雅居樂集團",
//    "stockEn": "AGILE GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3389,
//    "stockCn": "亨得利",
//    "stockEn": "HENGDELI",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 3393,
//    "stockCn": "威勝集團",
//    "stockEn": "WASION GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3396,
//    "stockCn": "聯想控股",
//    "stockEn": "LEGENDHOLDING",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 3398,
//    "stockCn": "華鼎控股",
//    "stockEn": "CHINA TING",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3399,
//    "stockCn": "粵運交通",
//    "stockEn": "YUEYUN TRANS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3600,
//    "stockCn": "現代牙科",
//    "stockEn": "MODERN DENTAL",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3606,
//    "stockCn": "福耀玻璃",
//    "stockEn": "FUYAO GLASS",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 3608,
//    "stockCn": "永盛新材料",
//    "stockEn": "YONGSHENG MAT",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 3618,
//    "stockCn": "重慶農村商業銀行",
//    "stockEn": "CQRC BANK",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3623,
//    "stockCn": "集成金融",
//    "stockEn": "C SUCCESS FIN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3626,
//    "stockCn": "HSSP INTL",
//    "stockEn": "HSSP INTL",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3628,
//    "stockCn": "仁恒實業控股",
//    "stockEn": "RENHENG ENT",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 3633,
//    "stockCn": "中裕燃氣",
//    "stockEn": "ZHONGYU GAS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3636,
//    "stockCn": "保利文化",
//    "stockEn": "POLY CULTURE",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 3638,
//    "stockCn": "晶芯科技控股",
//    "stockEn": "GOLDENMARS",
//    "stockBoardLot": 12000
//  },
//  {
//    "stockCode": 3639,
//    "stockCn": "億達中國",
//    "stockEn": "YIDA CHINA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3663,
//    "stockCn": "協眾國際控股",
//    "stockEn": "XIEZHONG INTL",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 3666,
//    "stockCn": "小南國",
//    "stockEn": "XIAO NAN GUO",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3668,
//    "stockCn": "中鋁礦業國際",
//    "stockEn": "CHINALCO-CMC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3669,
//    "stockCn": "永達汽車",
//    "stockEn": "YONGDA AUTO",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3678,
//    "stockCn": "弘業期貨",
//    "stockEn": "HOLLY FUTURES",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3683,
//    "stockCn": "榮豐聯合控股",
//    "stockEn": "GREAT HARVEST",
//    "stockBoardLot": 2500
//  },
//  {
//    "stockCode": 3688,
//    "stockCn": "萊蒙國際",
//    "stockEn": "TOP SPRING",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3698,
//    "stockCn": "徽商銀行",
//    "stockEn": "HUISHANG BANK",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3699,
//    "stockCn": "萬達商業",
//    "stockEn": "WANDA COMM",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 3708,
//    "stockCn": "日成控股",
//    "stockEn": "YAT SING HLDG",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 3709,
//    "stockCn": "珂萊蒂爾",
//    "stockEn": "KORADIOR",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3737,
//    "stockCn": "中智藥業",
//    "stockEn": "ZHONGZHIPHARM",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3773,
//    "stockCn": "年年卡",
//    "stockEn": "NNK",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3777,
//    "stockCn": "中國光纖",
//    "stockEn": "C FIBER OPTIC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3778,
//    "stockCn": "中國織材控股",
//    "stockEn": "CHINA WEAVING",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 3788,
//    "stockCn": "中國罕王",
//    "stockEn": "CHINA HANKING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3799,
//    "stockCn": "達利食品",
//    "stockEn": "DALI FOODS",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3800,
//    "stockCn": "保利協鑫能源",
//    "stockEn": "GCL-POLY ENERGY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3808,
//    "stockCn": "中國重汽",
//    "stockEn": "SINOTRUK",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3813,
//    "stockCn": "寶勝國際",
//    "stockEn": "POU SHENG INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3816,
//    "stockCn": "ＫＦＭ金德",
//    "stockEn": "KFM KINGDOM",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 3818,
//    "stockCn": "中國動向",
//    "stockEn": "CHINA DONGXIANG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3822,
//    "stockCn": "三和建築集團",
//    "stockEn": "SAM WOO CONS",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 3823,
//    "stockCn": "德普科技",
//    "stockEn": "TECH PRO",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3828,
//    "stockCn": "明輝國際",
//    "stockEn": "MING FAI INT'L",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3833,
//    "stockCn": "新疆新鑫礦業",
//    "stockEn": "XINXIN MINING",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3836,
//    "stockCn": "和諧汽車",
//    "stockEn": "HARMONY AUTO",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3838,
//    "stockCn": "中國澱粉",
//    "stockEn": "CHINA STARCH",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 3839,
//    "stockCn": "正大企業國際",
//    "stockEn": "CT ENTERPRISE",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3866,
//    "stockCn": "青島銀行",
//    "stockEn": "BQD",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3868,
//    "stockCn": "群星紙業",
//    "stockEn": "QX PAPER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3882,
//    "stockCn": "天彩控股",
//    "stockEn": "SKYLIGHT HLDG",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3883,
//    "stockCn": "中國奧園",
//    "stockEn": "CHINA AOYUAN",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3886,
//    "stockCn": "康健國際醫療",
//    "stockEn": "TOWN HEALTH",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3888,
//    "stockCn": "金山軟件",
//    "stockEn": "KINGSOFT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3889,
//    "stockCn": "大成糖業",
//    "stockEn": "GLOBAL SWEET",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3893,
//    "stockCn": "易緯集團",
//    "stockEn": "CROSSTEC",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 3898,
//    "stockCn": "中車時代電氣",
//    "stockEn": "CRRC TIMES ELEC",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3899,
//    "stockCn": "中集安瑞科",
//    "stockEn": "CIMC ENRIC",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3900,
//    "stockCn": "綠城中國",
//    "stockEn": "GREENTOWN CHINA",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3903,
//    "stockCn": "瀚華金控",
//    "stockEn": "HANHUA FIN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3908,
//    "stockCn": "中金公司",
//    "stockEn": "CICC",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 3918,
//    "stockCn": "金界控股",
//    "stockEn": "NAGACORP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3933,
//    "stockCn": "聯邦制藥",
//    "stockEn": "UNITED LAB",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3939,
//    "stockCn": "萬國國際礦業",
//    "stockEn": "WANGUO MINING",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3948,
//    "stockCn": "伊泰煤炭",
//    "stockEn": "YITAI COAL",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 3958,
//    "stockCn": "東方證券",
//    "stockEn": "DFZQ",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 3963,
//    "stockCn": "融眾金融",
//    "stockEn": "RONGZHONG FIN",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3966,
//    "stockCn": "中國寶豐國際",
//    "stockEn": "CH BAOFENG INTL",
//    "stockBoardLot": 6000
//  },
//  {
//    "stockCode": 3968,
//    "stockCn": "招商銀行",
//    "stockEn": "CM BANK",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 3969,
//    "stockCn": "中國通號",
//    "stockEn": "CHINA CRSC",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3983,
//    "stockCn": "中海石油化學",
//    "stockEn": "CHINA BLUECHEM",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3988,
//    "stockCn": "中國銀行",
//    "stockEn": "BANK OF CHINA",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 3989,
//    "stockCn": "首創環境",
//    "stockEn": "CAPITAL ENV",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3993,
//    "stockCn": "洛陽鉬業",
//    "stockEn": "CMOC",
//    "stockBoardLot": 3000
//  },
//  {
//    "stockCode": 3996,
//    "stockCn": "中國能源建設",
//    "stockEn": "CH ENERGY ENG",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3998,
//    "stockCn": "波司登",
//    "stockEn": "BOSIDENG",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 3999,
//    "stockCn": "大成食品",
//    "stockEn": "DACHAN FOOD",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 4601,
//    "stockCn": "BOC 2014 PREF",
//    "stockEn": "BOC 2014 PREF",
//    "stockBoardLot": 20000
//  },
//  {
//    "stockCode": 4603,
//    "stockCn": "ICBC USDPREF1",
//    "stockEn": "ICBC USDPREF1",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 4604,
//    "stockCn": "ICBC EURPREF1",
//    "stockEn": "ICBC EURPREF1",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 4605,
//    "stockCn": "BOCOM 15USDPREF",
//    "stockEn": "BOCOM 15USDPREF",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 4606,
//    "stockCn": "CCB 15USDPREF",
//    "stockEn": "CCB 15USDPREF",
//    "stockBoardLot": 10000
//  },
//  {
//    "stockCode": 6030,
//    "stockCn": "中信証券",
//    "stockEn": "CITIC SEC",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 6108,
//    "stockCn": "新銳醫藥",
//    "stockEn": "NEW RAY MEDIC",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 6116,
//    "stockCn": "拉夏貝爾",
//    "stockEn": "LA CHAPELLE",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 6118,
//    "stockCn": "奧星生命科技",
//    "stockEn": "AUSTAR",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6123,
//    "stockCn": "先達國際物流",
//    "stockEn": "ON TIME LOG",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 6128,
//    "stockCn": "泛亞國際",
//    "stockEn": "EARTHASIA",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 6133,
//    "stockCn": "維太移動",
//    "stockEn": "VITAL MOBILE",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6136,
//    "stockCn": "康達環保",
//    "stockEn": "KANGDA ENV",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6138,
//    "stockCn": "哈爾濱銀行",
//    "stockEn": "HARBIN BANK",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6139,
//    "stockCn": "金茂酒店-ＳＳ",
//    "stockEn": "JINMAO HOTEL-SS",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 6161,
//    "stockCn": "泰加保險",
//    "stockEn": "TARGET INS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 6166,
//    "stockCn": "中國宏泰發展",
//    "stockEn": "CHINA VAST",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6168,
//    "stockCn": "中國優通",
//    "stockEn": "CHINA U-TON",
//    "stockBoardLot": 5000
//  },
//  {
//    "stockCode": 6178,
//    "stockCn": "光大證券",
//    "stockEn": "EB SECURITIES",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 6183,
//    "stockCn": "中國綠寶",
//    "stockEn": "CH GREENFRESH",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6188,
//    "stockCn": "迪信通",
//    "stockEn": "BJ DIGITAL",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 6196,
//    "stockCn": "鄭州銀行",
//    "stockEn": "BANKOFZHENGZHOU",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6198,
//    "stockCn": "青島港",
//    "stockEn": "QINGDAO PORT",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6808,
//    "stockCn": "高鑫零售",
//    "stockEn": "SUNART RETAIL",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 6816,
//    "stockCn": "PROSPER CONS",
//    "stockEn": "PROSPER CONS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 6818,
//    "stockCn": "中國光大銀行",
//    "stockEn": "CEB BANK",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6822,
//    "stockCn": "科勁國際",
//    "stockEn": "KING'S FLAIR",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 6823,
//    "stockCn": "香港電訊-SS",
//    "stockEn": "HKT-SS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6826,
//    "stockCn": "昊海生物科技",
//    "stockEn": "HAOHAI BIOTEC",
//    "stockBoardLot": 100
//  },
//  {
//    "stockCode": 6828,
//    "stockCn": "藍天威力",
//    "stockEn": "BLUE SKY PWR",
//    "stockBoardLot": 8000
//  },
//  {
//    "stockCode": 6830,
//    "stockCn": "華眾車載",
//    "stockEn": "HUAZHONG IN-V",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 6833,
//    "stockCn": "興科蓉醫藥",
//    "stockEn": "SINCO PHARMA",
//    "stockBoardLot": 4000
//  },
//  {
//    "stockCode": 6836,
//    "stockCn": "天韻國際控股",
//    "stockEn": "TIANYUN INT'L",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 6837,
//    "stockCn": "海通證券",
//    "stockEn": "HAITONG SEC",
//    "stockBoardLot": 400
//  },
//  {
//    "stockCode": 6838,
//    "stockCn": "盈利時",
//    "stockEn": "WINOX",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 6839,
//    "stockCn": "雲南水務",
//    "stockEn": "YUNNAN WATER",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6863,
//    "stockCn": "輝山乳業",
//    "stockEn": "HUISHAN DAIRY",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6865,
//    "stockCn": "福萊特玻璃",
//    "stockEn": "FLAT GLASS",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6866,
//    "stockCn": "佐力小貸",
//    "stockEn": "ZUOLI M-FIN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 6868,
//    "stockCn": "天福",
//    "stockEn": "TENFU",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6869,
//    "stockCn": "長飛光纖光纜",
//    "stockEn": "YOFC",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 6878,
//    "stockCn": "鼎豐集團控股",
//    "stockEn": "DIFFER GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 6880,
//    "stockCn": "騰邦控股",
//    "stockEn": "TEMPUS HOLD",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 6881,
//    "stockCn": "中國銀河",
//    "stockEn": "CGS",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 6882,
//    "stockCn": "東瀛遊",
//    "stockEn": "EGL HOLDINGS",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 6886,
//    "stockCn": "HTSC",
//    "stockEn": "HTSC",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 6888,
//    "stockCn": "英達公路再生科技",
//    "stockEn": "FREETECH",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 6889,
//    "stockCn": "DYNAM JAPAN",
//    "stockEn": "DYNAM JAPAN",
//    "stockBoardLot": 200
//  },
//  {
//    "stockCode": 6893,
//    "stockCn": "衍生集團",
//    "stockEn": "HINSANG GROUP",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 6896,
//    "stockCn": "金嗓子",
//    "stockEn": "GOLDEN THROAT",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 6898,
//    "stockCn": "中國鋁罐",
//    "stockEn": "CHINA ALUMCAN",
//    "stockBoardLot": 2000
//  },
//  {
//    "stockCode": 6899,
//    "stockCn": "聯眾",
//    "stockEn": "OURGAME",
//    "stockBoardLot": 1000
//  },
//  {
//    "stockCode": 80737,
//    "stockCn": "合和公路基建－Ｒ",
//    "stockEn": "HOPEWELL INFR-R",
//    "stockBoardLot": 500
//  },
//  {
//    "stockCode": 84602,
//    "stockCn": "ICBC CNHPREF1-R",
//    "stockEn": "ICBC CNHPREF1-R",
//    "stockBoardLot": 10000
//  }
// ]
//
// StocksTable.batchInsert(StockData);
// console.log("insert done");
//
//
//
// });
