import React, {Component} from "react";
import {novel01, novel02, novel03, user01, user02} from './../Objects/Imgs';
import LoremIpsum, { loremIpsum } from "react-lorem-ipsum";

const novelsObject = [
    {
        id: 1 ,
        user:   { 
                    username: 'Zam misser',
                    userprofile: user01
                },
        name: 'Story of Zammon!',
        synopsis: 'เรื่องราวเกี่ยวกับ "แซม" ที่เป็นโปรแกรมเมอร์หนุ่ม...',
        imgs: user01,
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        textnovel: <LoremIpsum p={5}/>
    },
    {   
        id: 2 ,
        user:   { 
                    username: 'Zam misser',
                    userprofile: user01
                },
        name: 'Undertale: Asgore!',
        synopsis: 'เรื่องราวเกี่ยวกับ แอสกรอ! หลังจากเด็กที่ตกมายังพื้น...',
        imgs: user01 ,
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        textnovel: <LoremIpsum p={5}/>
    },
    {
        id: 3 ,
        user:   { 
                    username: 'Zammon V',
                    userprofile: user02
                },
        name: 'Art’Y Story [Special]',
        synopsis: 'เรื่องราวหลังแต่งงานกันของ "อาร์ต" กับ "ตุลย์"...',
        imgs: user02 ,
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        textnovel: <LoremIpsum p={5}/>
    },{
        id: 4 ,
        user:   { 
                    username: 'Zammon V',
                    userprofile: user02
                },
        name: 'Art’Y Story [Special]',
        synopsis: 'เรื่องราวหลังแต่งงานกันของ "อาร์ต" กับ "ตุลย์"...',
        imgs: user02 ,
        rating: {
                    views: 100,
                    follows: 100,
                    likes: 100
                },
        textnovel: <LoremIpsum p={5}/>
    }
];

const novelsObLength = novelsObject.length;

export {novelsObject, novelsObLength};