import Mock from 'mockjs';



//ScrollingAction 数据// AutomaticScrollingData
Mock.mock(new RegExp('/queryCommonCredit.*'),'get',
(options) => { // 自动滚动评论数据 参数typee：婚姻1  配对2 流年3 塔罗4 mbti 5 

    function GetQueryString(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = options.url.split("?")[1].match(reg); //获取url中"?"符后的字符串并正则匹配
        let context = "";
        if (r != null)
            context = decodeURIComponent(r[2]);
        reg = null;
        r = null;
        return context === null || context === "" || context === "undefined" ? "" : context;
    }
    // console.log('options',GetQueryString('type'))
    let params = GetQueryString('type')
    switch (params) {
        case '1':
            return Mock.mock( {
                success:true,
                data:{
                    "comment|10": [
                        {
                            "id|+1":'@increment()',
                            "time_unit|+1": [
                                "56秒前",
                                "3分钟前",
                                "18分钟前",
                                "46秒前",
                                "25分钟前",
                                "47秒前",
                                "8秒前",
                                "52分钟前",
                                "15分钟前",
                                "56秒前"
                            ],
                            "city|+1": [
                                "江西",
                                "贵州",
                                "安徽",
                                "四川",
                                "海南",
                                "陕西",
                                "安徽",
                                "四川",
                                "辽宁",
                                "湖北"
                            ],
                            "uname|+1": [
                                "孙*嘉",
                                "王怡*",
                                "王雪*",
                                "赵*安",
                                "李园*",
                                "李*滢",
                                "周*琳",
                                "王辰*",
                                "孙瑾*",
                                "孙*亚"
                            ],
                            "action|+1": [
                                "正在填写姓名",
                                "成功获取测试结果",
                                "成功获取测试结果",
                                "成功获取测试结果",
                                "成功获取测试结果",
                                "成功获取测试结果",
                                "成功获取测试结果",
                                "正在填写姓名",
                                "成功获取测试结果",
                                "成功获取测试结果"
                            ],
                            
                        }
                    ]
                },
                // id:'@increment()'
            }) 


            // {
            //     "id": 1,
            //     "time_unit": "",
            //     "city": 
            //     "uname": 
            //     "action": 
            // },
            // {
            //     "id": 2,
            //     "time_unit": "",
            //     "city": 
            //     "uname": 
            //     "action": 
            // },
            // {
            //     "id": 3,
            //     "time_unit": "",
            //     "city": 
            //     "uname": 
            //     "action": 
            // },
            // {
            //     "id": 4,
            //     "time_unit": "",
            //     "city": 
            //     "uname": 
            //     "action": 
            // },
            // {
            //     "id": 5,
            //     "time_unit": "",
            //     "city": 
            //     "uname": 
            //     "action": 
            // },
            // {
            //     "id": 6,
            //     "time_unit": "",
            //     "city": 
            //     "uname": 
            //     "action": 
            // },
            // {
            //     "id": 7,
            //     "time_unit": "",
            //     "city": 
            //     "uname": 
            //     "action": 
            // },
            // {
            //     "id": 8,
            //     "time_unit": 
            //     "city": 
            //     "uname": 
            //     "action": 
            // },
            // {
            //     "id": 9,
            //     "time_unit": 
            //     "city": 
            //     "uname": 
            //     "action": 
            // },
            // {
            //     "id": 10,
            //     "time_unit": 
            //     "city": ,
            //     "uname": ,
            //     "action": 
            // }


        case '2':
            return Mock.mock( {
                success:true,
                data:{
                "array|7": [
                    {
                        "name|+1": [
                        "Hello",
                        "Mock.js",
                        "!"
                        ]
                    }
                    ]
                }
            }) 
    
        default:
            return Mock.mock( {
                success:true,
                data:{
                "array|10": [
                    {
                        "name|+1": [
                        "Hello",
                        "Mock.js",
                        "!"
                        ]
                    }
                    ]
                }
            }) 
    }
      
})




//Comment 数据
Mock.mock(new RegExp('/commentDataInfo.*'),'get',
(options) => { // 自动滚动评论数据 参数typee：婚姻1  配对2 流年3 塔罗4 mbti 5 

    function GetQueryString(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = options.url.split("?")[1].match(reg); //获取url中"?"符后的字符串并正则匹配
        let context = "";
        if (r != null)
            context = decodeURIComponent(r[2]);
        reg = null;
        r = null;
        return context === null || context === "" || context === "undefined" ? "" : context;
    }
    // console.log('options',GetQueryString('type'))
    let params = GetQueryString('type')
    switch (params) {
        case '1':
            return Mock.mock( {
                success:true,
                data:{
                    "comment|10": [
                        {
                            "id|+1":'@increment()',
                            "cv_time_unit|+1": [
                                '51分钟前',
                                '46分钟前',
                                '42分钟前',
                                '34分钟前',
                                '19分钟前',
                                '14分钟前',
                                '12分钟前',
                                '7分钟前',
                                '1分钟前',
                                '30秒前',
                            ],
                            "cv_name|+1": [
                                '谭*屏',
                                '小*子',
                                '黄*兰',
                                '龙*臻Leon',
                                '静*',
                                '郭*豪',
                                '伟*',
                                '金*',
                                'wenny',
                                '华*飞',
                            ],
                            "content|+1": [
                                '我测试了一下说我桃花较旺，建议我不要盲目去谈恋爱，要提高我的择偶标准，最终可以找到一个更好更适合的人，谢谢老师，我会的。',
                                '这里的老师都很专业，我发现他们讲的也真的是有理有据，不得不佩服。',
                                '这个婚姻测试是很正规的。',
                                '一定要好评！好评！在这里我测试的对象简直和我现实中刚认识的特别想象，我真是不敢相信，我一定会听信老师的建议，好好的珍惜这段感情，幸福美满的生活下去。',
                                '妈妈催我找朋友，我比较内向不知道该如何做，在婚姻测试里专业老师不仅对我的性格分析的很详细，还给了我很好的建议，非常感谢老师。',
                                '哇塞！没想到我抱着试一试的想法，结果这么精确精准又专业，这个婚姻测试太牛了，感谢感谢！',
                                '给个好评，服务都很好，分析我的性格一些外貌都很准，分析我的另一半时也是很有根据，刚找到的对象简直是和这个完美契合，非常想象，我们两个人相处的也很好，全家人都满意。',
                                '给个好评，服务挺好，分析婚姻非常精确，简直是脱单必备，算得也很准，对我的建议以及一些性格问题都特别专业，非常感谢。',
                                '着急脱单，在婚姻测试里找到了专业的老师进行测试，了解到自己的另一半，希望可以找到阿。',
                                '分析的特别详细，还有专业的老师进行分析。',
                            ],
                            "cv_num|+1": [
                                "28657",
                                "23876",
                                "21876",
                                "19234",
                                "18968",
                                "17800",
                                "8900",
                                "4780",
                                "3856",
                                "3699",
                            ],
                            "cv_rate_num|+1": [
                                16657,
                                14765,
                                12865,
                                8675,
                                7564,
                                5876,
                                3568,
                                2879,
                                2354,
                                2113,                             
                            ],
                            "cv_pic|+1": [
                                "https://img.nnabc.cn/10a.png",
                                "https://img.nnabc.cn/9a.png",
                                "https://img.nnabc.cn/8a.png",
                                "https://img.nnabc.cn/5a.png",
                                "https://img.nnabc.cn/4a.png",
                                "https://img.nnabc.cn/7a.png",
                                "https://img.nnabc.cn/6a.png",
                                "https://img.nnabc.cn/3a.png",
                                "https://img.nnabc.cn/2a.png",
                                "https://img.nnabc.cn/1a.png",             
                            ],
                            
                        }
                    ]
                }
            }) 


        case '2':
            return Mock.mock( {
                success:true,
                data:{
                "array|7": [
                    {
                        "name|+1": [
                        "Hello",
                        "Mock.js",
                        "!"
                        ]
                    }
                    ]
                }
            }) 
    
        default:
            return Mock.mock( {
                success:true,
                data:{
                "array|10": [
                    {
                        "name|+1": [
                        "Hello",
                        "Mock.js",
                        "!"
                        ]
                    }
                    ]
                }
            }) 
    }
      
})

//支付页最新订单信息 ScrollingAction2 数据
Mock.mock(new RegExp('/newestOrderFormInfo.*'),'get',
(options) => { // 自动滚动评论数据 参数typee：婚姻1  配对2 流年3 塔罗4 mbti 5 

    function GetQueryString(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = options.url.split("?")[1].match(reg); //获取url中"?"符后的字符串并正则匹配
        let context = "";
        if (r != null)
            context = decodeURIComponent(r[2]);
        reg = null;
        r = null;
        return context === null || context === "" || context === "undefined" ? "" : context;
    }
    // console.log('options',GetQueryString('type'))
    let params = GetQueryString('type')
    switch (params) {
        case '1':
            return Mock.mock( {
                success:true,
                data:{
                    "comment|15": [
                        {
                            "id|+1":'@increment()',
                            "order_sn|+1": [
                                "2023****5054",
                                "2023****5254",
                                "2023****5353",
                                "2023****5450",
                                "2023****5410",
                                "2023****5648",
                                "2023****5699",
                                "2023****5757",
                                "2023****9753",
                                "2023****9849",
                                "2023****9810",
                                "2023****9997",
                                "2023****1005",
                                "2023****1015", 
                                "2023****1024"
                            ],
                            "price|+1": [
                                "已支付"
                            ],
                            "pay_at|+1": [
                                "昨天23：58",
                                "昨天13：06",
                                "1小时前",
                                "昨天13：06",
                                "5分钟前",
                                "5分钟前",
                                "昨天23：58",
                                "1小时前",
                                "昨天13：06",
                                "1小时前",
                                "5分钟前",
                                "1小时前",
                                "5分钟前",
                                "昨天23：58",
                                "昨天13：06"
                            ],
                            "user|+1": [
                                "杨*宏婚姻测算",
                                "李*欣婚姻测算",
                                "赵*嘉婚姻测算",
                                "杨*柔婚姻测算",
                                "王*翠婚姻测算",
                                "钱*超婚姻测算",
                                "周*蓓婚姻测算",
                                "赵*茜婚姻测算",
                                "周*凡婚姻测算",
                                "钱*河婚姻测算",
                                "王*宁婚姻测算",
                                "孙*坚婚姻测算",
                                "李*黛婚姻测算",
                                "钱*新婚姻测算",
                                "杨*辰婚姻测算"
                            ],
                            
                        }
                    ]
                },
                // id:'@increment()'
            }) 

// {id: 1, order_sn: "2023****5054", price: "已支付", pay_at: "昨天23：58", user: "杨*宏婚姻测算"}
// 1
// : 
// {id: 2, order_sn: "2023****5254", price: "已支付", pay_at: "昨天13：06", user: "李*欣婚姻测算"}
// 2
// : 
// {id: 3, order_sn: "2023****5353", price: "已支付", pay_at: "1小时前", user: "赵*嘉婚姻测算"}
// 3
// : 
// {id: 4, order_sn: "2023****5450", price: "已支付", pay_at: "昨天13：06", user: "杨*柔婚姻测算"}
// 4
// : 
// {id: 5, order_sn: "2023****5410", price: "已支付", pay_at: "5分钟前", user: "王*翠婚姻测算"}
// 5
// : 
// {id: 6, order_sn: "2023****5648", price: "已支付", pay_at: "5分钟前", user: "钱*超婚姻测算"}
// 6
// : 
// {id: 7, order_sn: "2023****5699", price: "已支付", pay_at: "昨天23：58", user: "周*蓓婚姻测算"}
// 7
// : 
// {id: 8, order_sn: "2023****5757", price: "已支付", pay_at: "1小时前", user: "赵*茜婚姻测算"}
// 8
// : 
// {id: 9, order_sn: "2023****9753", price: "已支付", pay_at: "昨天13：06", user: "周*凡婚姻测算"}
// 9
// : 
// {id: 10, order_sn: "2023****9849", price: "已支付", pay_at: "1小时前", user: "钱*河婚姻测算"}
// 10
// : 
// {id: 11, order_sn: "2023****9810", price: "已支付", pay_at: "5分钟前", user: "王*宁婚姻测算"}
// 11
// : 
// {id: 12, order_sn: "2023****9997", price: "已支付", pay_at: "1小时前", user: "孙*坚婚姻测算"}
// 12
// : 
// {id: 13, order_sn: "2023****1005", price: "已支付", pay_at: "5分钟前", user: "李*黛婚姻测算"}
// 13
// : 
// {id: 14, order_sn: "2023****1015", price: "已支付", pay_at: "昨天23：58", user: "钱*新婚姻测算"}
// 14
// : 
// {id: 15, order_sn: "2023****1024", price: "已支付", pay_at: "昨天13：06", user: "杨*辰婚姻测算"}





        case '2':
            return Mock.mock( {
                success:true,
                data:{
                "array|7": [
                    {
                        "name|+1": [
                        "Hello",
                        "Mock.js",
                        "!"
                        ]
                    }
                    ]
                }
            }) 
    
        default:
            return Mock.mock( {
                success:true,
                data:{
                "array|10": [
                    {
                        "name|+1": [
                        "Hello",
                        "Mock.js",
                        "!"
                        ]
                    }
                    ]
                }
            }) 
    }
      
})

