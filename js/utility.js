



function getInputDonationFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextDonationFieldById(id){
    const inputText = document.getElementById(id).innerText;
    const inputTextNumber =parseFloat(inputText);
    return inputTextNumber
}
 
   
    


function showSectionById(id){

    // hidden section
    document.getElementById('three-parant').classList.add('hidden');
    document.getElementById('continer-history').classList.add('hidden');

    // show seciton
    document.getElementById(id).classList.remove('hidden');

}