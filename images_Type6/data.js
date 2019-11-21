const data = [
    {
        sang:[
            {
                menu: ["Một quả táo","1 ly nước"], 
                image1: '1quatao.jpg', image2: '1lynuoc.jpg', calo : '120',
            },

        ],

        trua: [
            {
                menu: ["Nửa bát dưa lưới thái miếng","1 ly nước"], 
                image1: 'dualuoi.jpg', image2: '1lynuoc.jpg', calo : '150',
            },
            {
                menuphu: ["Nửa quả dưa hấu thái miếng", "2 ly nước"], 
                image1: 'duahau.jpg', image2: '1lynuoc.jpg', calo : '120',
            },
        ],

        toi: [
            {
                menu: ["Một quả táo", "1 ly nước"], 
                image1: '1quatao.jpg', image2: '1lynuoc.jpg', calo : '120'
            },
            {
                menuphu: ["Dưa lưới thái miếng", "1 quả ổi", "2 ly nước"], 
                image1: 'dualuoi.jpg', image2: 'quaoi.jpg', image3: "1lynuoc.jpg", calo : '120',
            },
        ],
    },
    {
        sang:[  
            {
                menu: ["Một củ khoai tây hoặc khoai lang luộc"], 
                image1: 'khoailangvakhoaitay.jpg', calo : '100',
            },

        ],

        trua: [
            {
                menu: ["Salad bắp cải với rau diếp xoắn","1 ly nước"], 
                image1: 'Saladraudiepxoan.jpg', image2: '1lynuoc.jpg', calo : '120',
            },
            {
                menuphu: ["Salad rau trộn với dưa chuột hành tây và cà rốt", "2 ly nước"], 
                image1: 'Saladcarot.png', image2: '1lynuoc.jpg', calo : '150',
            },
        ],

        toi: [
            {
                menu: ["Súp lơ luộc", "1 ly nước"], 
                image1: 'suplo.jpg', image2: '1lynuoc.jpg', calo : '110'
            },
            {
                menuphu: ["Salad cà rốt", "súp lơ và đậu cô ve luộc", "2 ly nước"], 
                image1: 'Saladcarot.png', image2: 'suplovadaucove.jpg', image3: "1lynuoc.jpg", calo : '190',
            },
        ],
    },
    {
        sang:[
            {
                menu: ["Một bát dưa lưới thái miếng", "1 quả táo", "2 ly nước"], 
                image1: 'dualuoi.jpg', image2: '1quatao.jpg', image3: '1lynuoc.jpg', calo : '150',
            },

        ],

        trua: [
            {
                menu: ["Một nửa quả dứa", "1 quả lê","2 ly nước"], 
                image1: '1quadua.jpg', image2: '1quale.jpg', image3: "1lynuoc.jpg", calo : '130',
            },
            {
                menuphu: ["Salad dưa chuột, cà rốt, rau diếp xoăn", "2 ly nước"], 
                image1: 'Saladraudiepxoan.jpg', image2: '1lynuoc.jpg', calo : '150',
            },
        ],

        toi: [
            {
                menu: ["Một quả lê", "1 ly nước"], 
                image1: '1quale.jpg', image2: '1lynuoc.jpg', calo : '100'
            },
            {
                menuphu: ["Súp lơ luộc", "củ cải luộc", "2 ly nước"], 
                image1: 'suplo.jpg', image2: 'cucailuoc.jpg', calo : '150',
            },
        ],
    },
    {
        sang:[
            {
                menu: ["Hai quả chuối", "1 cốc sữa"], 
                image1: '2quachuoi.jpg', image2: '1cocsua.jpg', calo : '100',
            },

        ],

        trua: [
            {
                menu: ["Một quả chuối lắc với nửa thìa mật ong"], 
                image1: 'chuoivoimatong.jpg', calo : '120',
            },
            {
                menuphu: ["Một bát súp canh rau củ GM"], 
                image1: '1batsupcanhraucu.jpg', calo : '120',
            },
        ],

        toi: [
            {
                menu: ["Hai quả chuối"], 
                image1: '2quachuoi.jpg', calo : '100'
            },
            {
                menuphu: ["Hai quả chuối", "1 cốc sữa"], 
                image1: '2quachuoi.jpg', image2: '1cocsua.jpg', calo : '150',
            },
        ],
    },
    {
        sang:[
            {
                menu: ["Một vài quả cà chua nhỏ", "1 bát đậu cô ve luộc", "2 ly nước"], 
                image1: 'vaiquacachua.jpg', image2: '1batdaucove.jpg', image3: '1lynuoc.jpg', calo : '150',
            },

        ],

        trua: [
            {
                menu: ["Một cốc sữa chua", "2 ly nước"], 
                image1: '1cocsuachua.jpg', image2: '1lynuoc.jpg', calo : '100',
            },
            {
                menuphu: ["Một bát cơm gạo lứt hoặc ức gà", "2 quả cà chua", "2 ly nước"], 
                image1: 'gaoluthoacucga.jpg', image2: 'vaiquacachua.jpg', image3: '1lynuoc.jpg', calo : '180',
            },
        ],

        toi: [
            {
                menu: ["Salad cà chua hành tây và rau mầm", "2 ly nước"], 
                image1: 'saladraumam.jpg', image2: '1lynuoc.jpg', calo : '140'
            },
            {
                menuphu: ["Canh súp rau củ GM"], 
                image1: '1batsupcanhraucu.jpg', calo : '80',
            },
        ],
    }, 
    {
        sang:[
            {
                menu: ["Một bát rau luộc", "2 ly nước"], 
                image1: '1batcanhrauluoc.jpg', image2: '1lynuoc.jpg', calo : '120',
            },

        ],

        trua: [
            {
                menu: ["Một bát đậu tây luộc trộn với cà chua thái hạt lựu", "2 ly nước"], 
                image1: 'dauluocvoicachua.jpg', image2: '1lynuoc.jpg', calo : '150',
            },
            {
                menuphu: ["Một bát cơm gạo lứt hoặc ức gà", "cá", "2 ly nước"], 
                image1: 'gaoluthoacucga.jpg', image2: 'ca.jpg', image3: '1lynuoc.jpg', calo : '200',
            },
        ],

        toi: [
            {
                menu: ["Một bát cơm gạo lứt", "1 ly nước"], 
                image1: '1batcomgaolut.jpg', image2: '1lynuoc.jpg', calo : '130'
            },
            {
                menuphu: ["Một bát rau luộc", "1 ly nước"], 
                image1: '1batcanhrauluoc.jpg', image2: '1lynuoc.jpg', calo : '100',
            },
        ],
    },
    {
        sang:[
            {
                menu: ["Salad rau trộn", "1 ly nước ép táo"], 
                image1: 'saladrautron.jpg', image2: '1lynuoceptao.jpg', calo : '100',
            },

        ],

        trua: [
            {
                menu: ["Một bát canh rau củ GM", "1 củ cà rốt luộc", "1 ly nước"], 
                image1: '1batsupcanhraucu.jpg', image2: 'carotluoc.jpg', calo : '150',
            },
            {
                menuphu: ["Một bát cơm gạo lứt", "1 bát rau luộc", "2 ly nước"], 
                image1: '1batcomgaolut.jpg', image2: '1batcanhrauluoc.jpg', image3: '1lynuoc.jpg', calo : '190',
            },
        ],

        toi: [
            {
                menu: ["Salad rau trộn", "2 ly nước"], 
                image1: 'saladrautron.jpg', image2: '1lynuoc.jpg', calo : '110'
            },
            {
                menuphu: ["Một bát canh rau củ GM", "2 ly nước"], 
                image1: '1batsupcanhraucu.jpg', image2: '1lynuoc.jpg', calo : '110',
            },
        ],
    }
]