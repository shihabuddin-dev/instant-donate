// Donated for Flood at Noakhali, Bangladesh
document.getElementById('noakhali-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const noakhaliInput = document.getElementById('noakhali-input').value;
    const convertedInput = parseFloat(noakhaliInput);
    const mainBalance = document.getElementById('balance').innerText;
    const convertedBalance = parseFloat(mainBalance);

    const noakhaliAmount = document.getElementById('noakhali-amount').innerText;
    const convertedDonates = parseFloat(noakhaliAmount);



    const modal = document.querySelector('.modal');

    if (convertedInput > 0) {

        const donateMoney = convertedBalance - convertedInput;
        document.getElementById('balance').innerText = donateMoney;

        const noakhaliDonate = convertedDonates + convertedInput;
        document.getElementById('noakhali-amount').innerText = noakhaliDonate;
        document.getElementById('modal-amount').innerText = convertedInput;
        modal.showModal();

    }
    else {
        alert('Please Provide Valid Money')
    }
    document.getElementById('noakhali-input').value = ''

})

// Donated for Flood Relief in Feni,Bangladesh

document.getElementById('feni-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const feniInput = document.getElementById('feni-input').value;
    const convertedInput = parseFloat(feniInput);
    const mainBalance = document.getElementById('balance').innerText;
    const convertedBalance = parseFloat(mainBalance);
    const modal = document.querySelector('.modal');

    const feniAmount = document.getElementById('feni-amount').innerText;
    const convertedDonates = parseFloat(feniAmount);

    if (convertedInput > 0) {
        const donateMoney = convertedBalance - convertedInput;
        document.getElementById('balance').innerText = donateMoney;
        const feniDonate = convertedDonates + convertedInput;
        document.getElementById('feni-amount').innerText = feniDonate;
        document.getElementById('modal-amount').innerText = convertedInput;

        modal.showModal();
    }
    else {
        alert('Please Provide Valid Money')
    }
    document.getElementById('feni-input').value = ''

})
// Donated for Aid for Injured in the Quota Movement , Bangladesh


document.getElementById('quota-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const quotaInput = document.getElementById('quota-input').value;
    const convertedInput = parseFloat(quotaInput);
    const mainBalance = document.getElementById('balance').innerText;
    const convertedBalance = parseFloat(mainBalance);

    const quotaAmount = document.getElementById('quota-amount').innerText;
    const convertedDonates = parseFloat(quotaAmount);

    const modal = document.querySelector('.modal');

    if (convertedInput > 0) {
        const donateMoney = convertedBalance - convertedInput;
        document.getElementById('balance').innerText = donateMoney;
        const quotaDonate = convertedDonates + convertedInput;
        document.getElementById('quota-amount').innerText = quotaDonate;
        document.getElementById('modal-amount').innerText = convertedInput;

        modal.showModal();

    }
    else {
        alert('Please Provide Valid Money')
    }
    document.getElementById('quota-input').value = ''

})
document.getElementById('my_modal_1').addEventListener(' click', function () {
    console.log('aa');
})




// history section 
document.getElementById('history-btn').addEventListener('click', function (event) {
    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('main').classList.add('hidden');

})

document.getElementById('donation-btn').addEventListener('click', function (event) {
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('main').classList.remove('hidden')
})