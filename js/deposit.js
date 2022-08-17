// step-1: add event listener to the diposit bitton
document.getElementById('btn-submite').addEventListener('click', function(){
    // step-2: get the diposit amount from the deposit input field
    // For input field use. value to the value inside the input field 
    const emailUser =document.getElementById('user-email');
    const newdipoAmountString =emailUser.value;
    const newdipoAmount =parseFloat(newdipoAmountString);
    // step-3: get the current deposit total
    // For non-input (element other than input ,textarea) use innerText to get the text
    const depositTotalElement =document.getElementById('deposit-total');
    const previousDipositTotalString =depositTotalElement.innerText;
    const previousDipositTotal =parseFloat(previousDipositTotalString);

    // add numbers to set the totale deposit
    const currentDepositTotal = previousDipositTotal + newdipoAmount;
    // set the deposit total
    depositTotalElement.innerText=currentDepositTotal;

    // step-5: get balance current totale 
    const balanceTotaleElement =document.getElementById('balance-totale');
    const previousBalanceTotalString =balanceTotaleElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);
    // step-6: calculate current totale balance
    const currentBalanceTotal = previousBalanceTotal + newdipoAmount;

    // set the balance totale
    balanceTotaleElement.innerText =currentBalanceTotal;
    // step-7: clear the deposit field
    emailUser.value ='';

});