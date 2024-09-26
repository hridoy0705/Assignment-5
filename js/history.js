

document.getElementById('btn-history').addEventListener('click', function(){
    const historyBtn = getInputDonationFieldById('donation');
    
})



// first  donation histoy histoyt section
document.getElementById('btn-history').addEventListener('click', function(){
    showSectionById('continer-history')
     
    const firstMainBalance = parseFloat(document.getElementById("first-main-balance").innerText);
    const navaccountbalance = parseFloat(document.getElementById("nav-account-balance").innerText);
    const donation = parseFloat(document.getElementById("donation").value)
  
    if(isNaN(donation) || donation < 0 ){
      
    return alert('Your Input is Invalide ! You Should NOt Input Any Nagative Number or String.Please Input Positive Number')    
    } 
    else{

    const balance = firstMainBalance + donation;
    const updataBalance = document.getElementById('first-main-balance').innerText = balance
    const remainnigBalance = navaccountbalance-donation;
    document.getElementById('nav-account-balance').innerText = remainnigBalance;
    const p = document.createElement('p');
        p.innerText = `${donation} Taka is Donated for famine-2024 at Feni, Bangladesh. Your Present Balance: ${remainnigBalance} Tk.`
        
        document.getElementById('continer-history').appendChild(p);

            
    }
    })


    
       
 



document.getElementById('btn-donation').addEventListener('click', function(){
    showSectionById('three-parant')
})



// there card hidden remove evet handler aply
document.getElementById('btn-donation').addEventListener('click', function(){
    const firstdiv = document.getElementById('three-parant');
    firstdiv.classList.remove('hidden')
    
})