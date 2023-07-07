let priceInfo = (data) => {
    let {
        roomStr,
        basePrice,
        disc,
        promo,
        extra,
        person
    } = data
    console.log(data)
    let discP = Math.round((disc / 100) * basePrice)
    let pad = basePrice - discP
    let tax = Math.round(0.15 * pad)
    let payable = pad - tax
    basePrice = "₹"+basePrice
    localStorage.setItem("payable",payable)
    console.log(extra)
    if(extra!=0){
        extra = "<div>Insurance opt-in</div> &#8377 "+(19*person)
        payable+=19*person
    }
    else extra = ""
    return `
    <div>
        <div>Room Charges (<span class="roomstr">${roomStr}</span>)</div>
        <div>${basePrice}</div>
    </div>
    <div>
        <div>
            Total Discounts 
            <span id="disc">${disc}% off</span>
        </div>
        <div style="color:green">- &#8377 ${discP}</div>
    </div>
    <div id="applied">
        ${promo} Applied
    </div>
    <hr>
    <div>
        Price after discounts <span>&#8377 ${pad}</span>
    </div>
    <div>Taxes & Fees <span>&#8377 ${tax}</span></div>
    <div>${extra}</div>
    <hr>
    <div>
        <h4>Payable Now</h4>
        <h4>&#8377 ${payable}</h4>
    </div>
    <sub style="color:#1ca0e3">Emi starts at &#8377 1000/month</sub>
    `
}
export default priceInfo