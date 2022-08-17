/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5  also make sure to convert the input into a number by using parseFloat
3. Get previous withdraw total
4. calculate total withdrow
5. get the previous balance total
6. calculate the new balance totale
6.5  set the new balance totale

7. clear the input field
*/
// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
//step-2:
const withdrawField =document.getElementById('withdraw-field');
const newWithDrawAmountString =withdrawField.value;
const currentWithDrawAmount =parseFloat(newWithDrawAmountString);
// step-3:

const withdrawTotalElement =document.getElementById('withdraw-total');
const withdrawTotalElementString =withdrawTotalElement.innerText;
 const currentWithdrawTotalElement =parseFloat(withdrawTotalElementString);

//  step-5:
const balanceTotaleElement =document.getElementById('balance-totale');
const previousBalanceTotalString =balanceTotaleElement.innerText;
const previousBalanceTotal =parseFloat(previousBalanceTotalString)

// step-7:

withdrawField.value = '';

if(currentWithDrawAmount > previousBalanceTotal){
    alert('Baper Bank e taka nai')
    return;
}

// step-4:
const currentTotaleWithdraw = currentWithDrawAmount + currentWithdrawTotalElement;
withdrawTotalElement.innerText =currentTotaleWithdraw;
// step-6:
const newBalanceTotale =previousBalanceTotal - currentWithDrawAmount;
balanceTotaleElement.innerText =newBalanceTotale;
});