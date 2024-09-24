


// first donation button use event handler
document.getElementById('first-donation-btn')
.addEventListener('click', function(){
const firstMainBalance = parseFloat(document.getElementById("first-main-balance").innerText);
const navaccountbalance = parseFloat(document.getElementById("nav-account-balance").innerText);
const donation = parseFloat(document.getElementById("donation").value);
    const balance = firstMainBalance + donation;
   const pudataBalance = document.getElementById('first-main-balance').innerText = balance;
   const remainnigBalance = navaccountbalance-donation;
   document.getElementById('nav-account-balance').innerText = remainnigBalance;
    console.log(remainnigBalance)

    // if( isNaN(donation)){
    //     return;
    // }
    if(navaccountbalance < donation){
    return;
        
    } 
    else{
        alert('congraculations! Your donation is successful')
        
    }

})

// second button use handler
document.getElementById('donation-for-shalterless')
.addEventListener('click', function(){
const secondMainBalance = parseFloat(document.getElementById("second-main-balance").innerText);
const navaccountbalance = parseFloat(document.getElementById("nav-account-balance").innerText);
const secondInputBalance = parseFloat(document.getElementById("second-input-balance").value);
    const newBalance = secondMainBalance + secondInputBalance;
   const pudataBalance = document.getElementById('second-main-balance').innerText = newBalance;
   const remainnigBalance = navaccountbalance-secondMainBalance;
   document.getElementById('nav-account-balance').innerText = remainnigBalance;
    console.log(remainnigBalance)

    if( isNaN(secondInputBalance)){
        return;
    }
    else{
        alert('congraculations! Your donation is successful')
        
    }

})

// thired btn handler use

document.getElementById('btn-donation-for-treatment')
.addEventListener('click', function(){
const thirddMainBalance = parseFloat(document.getElementById("third-main-balance").innerText);
const navaccountbalance = parseFloat(document.getElementById("nav-account-balance").innerText);
const thirdInputBalance = parseFloat(document.getElementById("third-input-balance").value);
    const newBalance = thirddMainBalance + thirdInputBalance;
   const pudataBalance = document.getElementById('third-main-balance').innerText = newBalance;
   const remainnigBalance = navaccountbalance-thirdInputBalance;
   document.getElementById('nav-account-balance').innerText = remainnigBalance;
    console.log(remainnigBalance)

    if( isNaN(thirdInputBalance)){
        return;
    }
    else{
        alert('congraculations! Your donation is successful')
        
    }

})