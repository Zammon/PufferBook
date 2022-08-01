import React, {Component} from "react";
import account from './../Objects/Users'
import { novel01,novel02,novel03,novel04,novel05,novel06,novel07,novel08,novel09,novel10,novel11,novel12,novel13 } from "./Imgs";
import LoremIpsum, { loremIpsum } from "react-lorem-ipsum";


const notificationsob = [
    {
        id: 1 ,
        user:   { 
                    username: account[1].userName,
                    userprofile: account[1].userProfile
                },
        name: 'Story of Zammon!',
        synopsis: 'เรื่องราวเกี่ยวกับ "แซม" ที่เป็นโปรแกรมเมอร์หนุ่ม...',
    },
    {   
        id: 2 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        name: 'Undertale: Asgore!',
        synopsis: 'เรื่องราวเกี่ยวกับ แอสกรอ! หลังจากเด็กที่ตกมายังพื้น...',
    },{
        id: 3 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        name: "Art’Y Story [Special]",
        synopsis: 'เรื่องราวหลังแต่งงานกันของ "อาร์ต" กับ "ตุลย์"...',
    },{
        id: 4 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        name: "Art’Y Story [Special]",
        synopsis: 'เรื่องราวหลังแต่งงานกันของ "อาร์ต" กับ "ตุลย์"...',
    }
];

const notificationsLength = notificationsob.length;
// -----------------------------------------------------------------------------------

const novelsob = [
    {
        id: 1 ,
        user:   { 
                    username: account[1].userName,
                    userprofile: account[1].userProfile
                },
        imgs:novel12,
        name: 'Story of Zammon!',
        synopsis: 'เรื่องราวเกี่ยวกับ "แซม" ที่เป็นโปรแกรมเมอร์หนุ่ม...',
        types:  ["รักโรแมนติก", "วัยรุ่น", "ชีวิตทั่วไป"],
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        title:'',
        textnovel: <LoremIpsum p={5}/>
    },
    {   
        id: 2 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        imgs:novel11,
        name: 'Undertale: Asgore!',
        synopsis: 'เรื่องราวเกี่ยวกับ แอสกรอ! หลังจากเด็กที่ตกมายังพื้น...',
        types:  ["รักโรแมนติก", "วัยรุ่น", "ชีวิตทั่วไป"],
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        title:'',
        textnovel: <LoremIpsum p={5}/>
    },
    {
        id: 3 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        imgs:novel13,        
        name: 'Art’Y Story [Special]',
        synopsis: 'เรื่องราวหลังแต่งงานกันของ "อาร์ต" กับ "ตุลย์"...',
        types:  ["รักโรแมนติก", "วัยรุ่น", "ชีวิตทั่วไป"],
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        title:'',
        textnovel: <LoremIpsum p={5}/>
    },{
        id: 4 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        imgs: novel01,        
        name: "ขาดคุณนางฟ้าข้างห้องไป...",
        synopsis: 'เรื่องราวเกี่ยวกับ...5',
        types:  ["รักโรแมนติก", "วัยรุ่น", "ชีวิตทั่วไป"],
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        title:'',
        textnovel: <LoremIpsum p={5}/>
    },{
        id: 5 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        imgs: novel02,        
        name: 'ซ่อนคมเวท เจ็ดดาบมาร',
        synopsis: 'เรื่องราวเกี่ยวกับ...6',
        types:  ["รักโรแมนติก", "วัยรุ่น", "ชีวิตทั่วไป"],
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        title:'',
        textnovel: <LoremIpsum p={5}/>
    },{
        id: 6 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        imgs: novel03,        
        name: 'Work booking 2019',
        synopsis: 'เรื่องราวเกี่ยวกับ...7',
        types:  ["รักโรแมนติก", "วัยรุ่น", "ชีวิตทั่วไป"],
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        title:'',
        textnovel: <LoremIpsum p={5}/>
    },{
        id: 7 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        imgs: novel04,        
        name: 'ผมเนี่ยนะ ชายแปด!',
        synopsis: 'เรื่องราวเกี่ยวกับ...8',
        types:  ["รักโรแมนติก", "วัยรุ่น", "ชีวิตทั่วไป"],
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        title:'',
        textnovel: <LoremIpsum p={5}/>
    },{
        id: 8 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        imgs: novel05,        
        name: 'หอมกลิ่นความรัก',
        synopsis: 'เรื่องราวเกี่ยวกับ...9',
        types:  ["รักโรแมนติก", "วัยรุ่น", "ชีวิตทั่วไป"],
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        title:'',
        textnovel: <LoremIpsum p={5}/>
    },{
        id: 9 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        imgs:novel06,        
        name: 'หุบปากซะถ้าไม่อยากโดนจูบ',
        synopsis: 'เรื่องราวเกี่ยวกับ...10',
        types:  ["รักโรแมนติก", "วัยรุ่น", "ชีวิตทั่วไป"],
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        title:'',
        textnovel: <LoremIpsum p={5}/>
    },{
        id: 10 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        imgs: novel07,        
        name: 'กลรักรุ่นพี่',
        synopsis: 'เรื่องราวเกี่ยวกับ...11',
        types:  ["รักโรแมนติก", "วัยรุ่น", "ชีวิตทั่วไป"],
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        title:'',
        textnovel: <LoremIpsum p={5}/>
    },{
        id: 11 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        imgs: novel08,        
        name: 'ทฤษฏี จีบเธอ',
        synopsis: 'เรื่องราวเกี่ยวกับ...12',
        types:  ["รักโรแมนติก", "วัยรุ่น", "ชีวิตทั่วไป"],
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        title:'',
        textnovel: <LoremIpsum p={5}/>
    },{
        id: 12 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        imgs: novel09,        
        name: 'ภพเธอ',
        synopsis: 'เรื่องราวเกี่ยวกับ...13',
        types:  ["รักโรแมนติก", "วัยรุ่น", "ชีวิตทั่วไป"],
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        title:'',
        textnovel: <LoremIpsum p={5}/>
    },{
        id: 13 ,
        user:   { 
                    username: account[0].userName,
                    userprofile: account[0].userProfile
                },
        imgs: novel10,        
        name: 'บาร์ชอบ(ของ)ใหญ่...',
        synopsis: 'เมื่อลูกชายเจ้านายชื่อใหญ่ และน้องมันก็ดันใหญ่จริงๆ "บาร์" พนังงานออฟฟิศที่วันๆไม่สนใจอะไรนอกจากเรื่องงานจนทำให้โสดขึ้นคานจนอายุเกือบขึ้นเลขสี่ จู่ๆดันถูกจับผลูได้มาเป้นพี่เลี้ยยงฝึกงานให้กับลูกชายของเจ้าของบริษัทอย่าง "คุณชญานิน หรือคุณใหญ่" เด็กหนุ่มเชื้อฝรั่งหุ่นนายแบบที่สเปคเกินเอื้อมถึง เรื่องราวระหว่างนายกับลูกจ้างได้เริ่มเปลี่ยนไป เมื่อทั้งคู่ตัดสินใจที่จะก้าวข้ามเส้นนั้น ความสัมพันธ์ลับๆได้ถูกสร้างขึ้นมาเขาจะทำอย่างไร... เมื่อสอนงานกลับไม่ใช้ห้องทำงานแต่ดันเป็นเตียงของลูกชายเจ้านายคนนี้',
        types:  ["รักโรแมนติก", "วัยรุ่น", "ชีวิตทั่วไป"],
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        title:'',
        textnovel: <LoremIpsum p={5}/>
    }
];



export { notificationsob, notificationsLength, novelsob};