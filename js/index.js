
    // first donation button use event handler.....
    document.getElementById('first-donation-btn')
    .addEventListener('click', function(){
    const firstMainBalance = parseFloat(document.getElementById("first-main-balance").innerText);
    const navaccountbalance = parseFloat(document.getElementById("nav-account-balance").innerText);
    const donation = parseFloat(document.getElementById("donation").value)
  
    if(isNaN(donation) || donation < 0 ){
      
    return alert('Your Input is Invalide ! You Should NOt Input Any Nagative Number or String.Please Input Positive Number')    
    } 
    else{
    alert('congraculations! Your donation is successful')
    const balance = firstMainBalance + donation;
    const updataBalance = document.getElementById('first-main-balance').innerText = balance
    const remainnigBalance = navaccountbalance-donation;
    document.getElementById('nav-account-balance').innerText = remainnigBalance;
            
    }
    })



    //// second donation button use event handler.....
    document.getElementById('donation-for-shalterless')
    .addEventListener('click', function(){
    const secondMainBalance = parseFloat(document.getElementById("second-main-balance").innerText);
    const navaccountbalance = parseFloat(document.getElementById("nav-account-balance").innerText);
    const secondInputBalance = parseFloat(document.getElementById("second-input-balance").value);

     if(isNaN(secondInputBalance) || secondInputBalance < 0 ){
    return alert('Your Input is Invalide ! You Should NOt Input Any Nagative Number or String.Please Input Positive Number')    
    } 
    else{
    alert('congraculations! Your donation is successful')
    const newBalance = secondMainBalance + secondInputBalance;
    const updataBalance = document.getElementById('second-main-balance').innerText = newBalance
    const remainnigBalance = navaccountbalance-secondInputBalance;
    document.getElementById('nav-account-balance').innerText = remainnigBalance;       
    }
    })

     // third donation button use event handler.....

    document.getElementById('btn-donation-for-treatment')
    .addEventListener('click', function(){
    const thirdMainBalance = parseFloat(document.getElementById("third-main-balance").innerText);
    const navaccountbalance = parseFloat(document.getElementById("nav-account-balance").innerText);
    const thirdInputBalance = parseFloat(document.getElementById("third-input-balance").value);

    if(isNaN(thirdInputBalance) || thirdInputBalance < 0 ){
      
    return alert('Your Input is Invalide ! You Should NOt Input Any Nagative Number or String.Please Input Positive Number');   
    } 
    else{
    alert('congraculations! Your donation is successful')
    const newBalance = thirdMainBalance + thirdInputBalance;
    const updataBalance = document.getElementById('third-main-balance').innerText = newBalance
    const remainnigBalance = navaccountbalance-thirdInputBalance;
    document.getElementById('nav-account-balance').innerText = remainnigBalance;
            
    }

})