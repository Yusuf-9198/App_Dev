 // Date is object
  
// let mydate = new Date()
// console.log(mydate) //2025-10-20T17:02:50.488Z
// console.log(mydate.toString()) // Mon Oct 20 2025 22:32:50 GMT+0530 (India Standard Time)
// console.log(mydate.toISOString()) //2025-10-20T17:05:55.104Z
// console.log(mydate.toDateString()) // Mon Oct 20 2025
// console.log(mydate.toLocaleString()) // 20/10/2025, 10:35:55 pm

// let mycreatedDate =new Date(2023,0,23) // (Year, Month Index, Day)
// let mycreatedDate2 =new Date(2023,0,23, 4,2,56) // (year , week Day , month date , hour , min , sec)
// console.log(mycreatedDate.toDateString()) // Mon Jan 23 2023
// console.log(mycreatedDate2.toLocaleString()) // 23/1/2023, 4:02:56 am

// let mycreatedDate =new Date("01-14-2024")
// let myTimeStamp = Date.now()
// console.log(myTimeStamp) // 1760980616445(it is a value(milisec) from 1970 -> now)
// console.log(mycreatedDate.getTime()) // 1705170600000(it is a value(milisec) from 1970 -> 01-14-2024)
//  // convert into sec
// console.log(Math.floor((mycreatedDate.getTime())/1000)) // 1705170600(it is a value(sec) from 1970 -> 01-14-2024)

let mycreatedDate3 =new Date()
// console.log(mycreatedDate3.getMonth())  //9 (starting from 0 )
// console.log(mycreatedDate3.getDay())  //1 (starting from 0 )

mycreatedDate3.toLocaleString('default', {
    weekday:"long"
    // timeZone: ''
})



