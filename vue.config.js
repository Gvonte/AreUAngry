module.exports = {
  configureWebpack: {
    devServer: {
      // proxy: {
      //   "/api": {
      //       target: "http://127.0.0.1:8080/", 
      //       changOrigin: true
      //   }
      // }, 
      before(app) {
        // 模拟接口，模拟后台服务器express
        app.get("/areuhungry/user-info", function (req, res) {
          res.json({
            code: 1,
            success: 1,
            data: {
              userInfo: {
                id: 1,
                username: "Gvonte",
                money: 10000
              }
            }
          });
        });
        app.post("/areuhungry/user-info/register", function (req, res) {
          res.json({
            code: 1,
            success: 1
          });
        });
        app.post("/areuhungry/user-info/login", function (req, res) {
          res.json({
            code: 1,
            success: 1,
            data: {
              token: "this is a token"
            }
          });
        });
        app.get("/areuhungry/merchant/listForBuyer", function (req, res) {
          res.json({
            code: 1,
            success: 1,
            data: {
              merchants: [{ "id": "1196017480389206018", "userId": "1195885412871065601", "merchantName": "小象便当", "merchantAddress": "广州大学城南亭村南亭村南亭商业街5号", "merchantPhone": "5816855", "img": "https://cube.elemecdn.com/0/52/d4cd8ce8f762169c0a52ef78eacfcjpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" }, { "id": "1196017480389206019", "userId": "1199948157683658754", "merchantName": "贤哥", "merchantAddress": "广州大学城南亭村南亭村南亭商业街5号", "merchantPhone": "5821355", "img": "https://cube.elemecdn.com/f/5a/225d06ebd294becf5854402f6b25cpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" }, { "id": "1196017480389206020", "userId": "1199949891277582337", "merchantName": "重庆麻辣烫", "merchantAddress": "广州大学城南亭村南亭村南亭商业街3号", "merchantPhone": "1876855", "img": "https://cube.elemecdn.com/d/c8/72dc45f36658568b45cf5d6839ecdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" }, { "id": "1196017480389206021", "userId": "1199949891277582334", "merchantName": "一号鸡秘·火锅鸡", "merchantAddress": "广州大学城南亭村南亭村南亭商业街10号", "merchantPhone": "5738855", "img": "https://cube.elemecdn.com/c/91/9eefa5b97af8872a5ffc9ea5fd3a9jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" }, { "id": "1196017480389206022", "userId": "1199949891277582354", "merchantName": "喵喵烤肉饭(大学城店)", "merchantAddress": "广州大学城南亭村南亭村南亭商业街15号", "merchantPhone": "5116235", "img": "https://cube.elemecdn.com/3/02/e06d3036c03d77d0902a7a9369058jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" }, { "id": "1199949891247896547", "userId": "1199949891277582356", "merchantName": "粥品香坊（回龙观）", "merchantAddress": "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340", "merchantPhone": "5147852", "img": "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" }]
            }
          });
        });
        app.get("/areuhungry/order-master/listForBuyer", function (req, res) {
          res.json({
            code: 1,
            success: 1,
            data: {
              list: [
                {
                  orderId: 1,
                  img: 'http://b-ssl.duitang.com/uploads/item/201509/30/20150930140213_ZCFSr.jpeg'
                },
                {
                  orderId: 2,
                  img: 'http://b-ssl.duitang.com/uploads/item/201509/30/20150930140213_ZCFSr.jpeg'
                },
                {
                  orderId: 3,
                  img: 'http://b-ssl.duitang.com/uploads/item/201509/30/20150930140213_ZCFSr.jpeg'
                },
                {
                  orderId: 4,
                  img: 'http://b-ssl.duitang.com/uploads/item/201509/30/20150930140213_ZCFSr.jpeg'
                }
              ]
            }
          });
        });
        app.get("/areuhungry/merchant/getByMerchantId/:id", function (req, res) {
          res.json({
            code: 1,
            success: 1,
            data: {
              "id": 1,
              "name": "粥品香坊",
              "score": 4.2,
              "serviceScore": 4.1,
              "foodScore": 4.3,
              "rankRate": 69.2,
              "minPrice": 20,
              "deliveryPrice": 4,
              "ratingCount": 24,
              "sellCount": 90,
              "bulletin": "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
              "supports": [
                {
                  "type": 0,
                  "description": "在线支付满28减5"
                },
                {
                  "type": 1,
                  "description": "VC无限橙果汁全场8折"
                },
                {
                  "type": 2,
                  "description": "单人精彩套餐"
                },
                {
                  "type": 3,
                  "description": "该商家支持发票,请下单写好发票抬头"
                },
                {
                  "type": 4,
                  "description": "已加入“外卖保”计划,食品安全保障"
                }
              ],
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
              "pics": [
                "http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
                "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
                "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180",
                "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"
              ],
              "infos": [
                "该商家支持发票,请下单写好发票抬头",
                "品类:其他菜系,包子粥店",
                "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340",
                "营业时间:10:00-20:30"
              ]
            }
          });
        });
        app.get("/areuhungry/product-info/listForBuyer", function (req, res) {
          res.json({
            code: 1,
            success: 1,
            data: [
              {
                "name": "热销榜",
                "type": -1,
                "foods": [
                  {
                    "name": "皮蛋瘦肉粥",
                    "price": 10,
                    "oldPrice": "",
                    "description": "咸粥",
                    "sellCount": 229,
                    "rating": 100,
                    "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "很喜欢的粥",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 1,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "扁豆焖面",
                    "price": 14,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 188,
                    "rating": 96,
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 1,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "info": "",
                    "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "葱花饼",
                    "price": 10,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 124,
                    "rating": 85,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 1,
                        "text": "没啥味道",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 1,
                        "text": "很一般啊",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "牛肉馅饼",
                    "price": 14,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 114,
                    "rating": 91,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 1,
                        "text": "难吃不推荐",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "招牌猪肉白菜锅贴/10个",
                    "price": 17,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 101,
                    "rating": 78,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 1,
                        "text": "不脆,不好吃",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "南瓜粥",
                    "price": 9,
                    "oldPrice": "",
                    "description": "甜粥",
                    "sellCount": 91,
                    "rating": 100,
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "红豆薏米美肤粥",
                    "price": 12,
                    "oldPrice": "",
                    "description": "甜粥",
                    "sellCount": 86,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "八宝酱菜",
                    "price": 4,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 84,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "红枣山药糙米粥",
                    "price": 10,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 81,
                    "rating": 91,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "糊塌子",
                    "price": 10,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 80,
                    "rating": 93,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
                  }
                ]
              },
              {
                "name": "单人精彩套餐",
                "type": 2,
                "foods": [
                  {
                    "name": "红枣山药粥套餐",
                    "price": 29,
                    "oldPrice": 36,
                    "description": "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
                    "sellCount": 17,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
                  }
                ]
              },
              {
                "name": "冰爽饮品限时特惠",
                "type": 1,
                "foods": [
                  {
                    "name": "VC无限橙果汁",
                    "price": 8,
                    "oldPrice": 10,
                    "description": "",
                    "sellCount": 15,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "还可以",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                  }
                ]
              },
              {
                "name": "精选热菜",
                "type": -1,
                "foods": [
                  {
                    "name": "娃娃菜炖豆腐",
                    "price": 17,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 43,
                    "rating": 92,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "菜量还可以,味道还可以",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "手撕包菜",
                    "price": 16,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 29,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "香酥黄金鱼/3条",
                    "price": 11,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 15,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"
                  }
                ]
              },
              {
                "name": "爽口凉菜",
                "type": -1,
                "foods": [
                  {
                    "name": "八宝酱菜",
                    "price": 4,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 84,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "拍黄瓜",
                    "price": 9,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 28,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
                  }
                ]
              },
              {
                "name": "精选套餐",
                "type": -1,
                "foods": [
                  {
                    "name": "红豆薏米粥套餐",
                    "price": 37,
                    "oldPrice": "",
                    "description": "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
                    "sellCount": 3,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "皮蛋瘦肉粥套餐",
                    "price": 31,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 12,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
                  }
                ]
              },
              {
                "name": "果拼果汁",
                "type": -1,
                "foods": [
                  {
                    "name": "蜜瓜圣女萝莉杯",
                    "price": 6,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 1,
                    "rating": "",
                    "info": "",
                    "ratings": [],
                    "icon": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "加多宝",
                    "price": 6,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 7,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "VC无限橙果汁",
                    "price": 8,
                    "oldPrice": 10,
                    "description": "",
                    "sellCount": 15,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "还可以",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                  }
                ]
              },
              {
                "name": "小吃主食",
                "type": -1,
                "foods": [
                  {
                    "name": "扁豆焖面",
                    "price": 14,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 188,
                    "rating": 96,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 1,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "葱花饼",
                    "price": 10,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 124,
                    "rating": 85,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 1,
                        "text": "没啥味道",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 1,
                        "text": "很一般啊",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "牛肉馅饼",
                    "price": 14,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 114,
                    "rating": 91,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 1,
                        "text": "难吃不推荐",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "招牌猪肉白菜锅贴/10个",
                    "price": 17,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 101,
                    "rating": 78,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 1,
                        "text": "不脆,不好吃",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "糊塌子",
                    "price": 10,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 80,
                    "rating": 93,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
                  }
                ]
              },
              {
                "name": "特色粥品",
                "type": -1,
                "foods": [
                  {
                    "name": "皮蛋瘦肉粥",
                    "price": 10,
                    "oldPrice": "",
                    "description": "咸粥",
                    "sellCount": 229,
                    "rating": 100,
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "很喜欢的粥",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 1,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "南瓜粥",
                    "price": 9,
                    "oldPrice": "",
                    "description": "甜粥",
                    "sellCount": 91,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "红豆薏米美肤粥",
                    "price": 12,
                    "oldPrice": "",
                    "description": "甜粥",
                    "sellCount": 86,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "红枣山药糙米粥",
                    "price": 10,
                    "oldPrice": "",
                    "description": "",
                    "sellCount": 81,
                    "rating": 91,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "鲜蔬菌菇粥",
                    "price": 11,
                    "oldPrice": "",
                    "description": "咸粥",
                    "sellCount": 56,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": ""
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                    "name": "田园蔬菜粥",
                    "price": 10,
                    "oldPrice": "",
                    "description": "咸粥",
                    "sellCount": 33,
                    "rating": 100,
                    "info": "",
                    "ratings": [
                      {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      },
                      {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                      }
                    ],
                    "icon": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
                    "image": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
                  }
                ]
              }
            ]
          });
        });
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: false,
      theme: false
    }
  }
}
