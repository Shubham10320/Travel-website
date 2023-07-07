let hotelInfo = (data) =>{
    let {id,Country,name,url,cost,guestDetails,ratings} = data 
    let stars = ratings
    let code = ""
    for(let x=0; x<stars; x++){
        code+='<ion-icon name="star"></ion-icon>'
    }
    for(let x=stars; x<5; x++){
        code+='<ion-icon name="star-outline"></ion-icon>'
    }
    let random = Math.round(Math.random()*100)+1
    return `
        <div class="himgDiv">
            <img src="${url}" alt="">
        </div>
        <div class="hinfoDiv">
            <div class="hstars">${code}</div>
            <div class="htitle">${name}</div>
            <div class="haddress"><ion-icon name="location-sharp"></ion-icon>${Country}</div>
            <div class="hreview"><span class="bggreen">${stars}/5</span>${random} Verified Ratings</div>
            <div class="hdeal"><span><ion-icon name="alarm-outline"></ion-icon>Daily Steal Deal</span> <div>Ends in <span id="time"></span></div></div>
        </div>
    `
}
export default hotelInfo