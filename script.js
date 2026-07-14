
// Hour Hand 
//12h=360, 1h =30 degree
//n hour = 30n degree
// 60 min=30 deg, 1min =0.5 deg Rotate,, n min= 1/2n deg
// 30n+n/2 hour hand formula --1


// for min-hand
//360 deg in 1 hour (60 min), 1 min= 6 deg rotate
// n min= 6n degree rotate --2


// for  sec hand 
// 60 sec= 360 deg, 1 sec = 6 deg, n sec= 6n deg --3
let hour_hand=document.querySelector(".hour-hand")
let min_hand=document.querySelector(".min-hand")
let sec_hand=document.querySelector(".sec-hand")
let dh=document.querySelector(".dh")  // agar class do to .dh, agr id do to #dh
let dm=document.querySelector(".dm")
let ds=document.querySelector(".ds")

setInterval(()=>{
    let time=new Date();  // to access current time
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    let hrotation=30*h+h/2;
    let mrotation=6*m;
    let srotation=6*s;
    hour_hand.style.transform = `rotate(${hrotation}deg)`;
    min_hand.style.transform = `rotate(${mrotation}deg)`;
    sec_hand.style.transform = `rotate(${srotation}deg)`;
    h = h > 12 ? h - 12 : h;
    dh.innerHTML = h < 10 ? '0' + h : h;
    dm.innerHTML=m<10? '0'+m:m;
    ds.innerHTML=s<10?'0'+s:s;  // for  making 1 , 2 ,3 into 01,02, 03
})
