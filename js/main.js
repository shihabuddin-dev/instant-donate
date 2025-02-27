// Donated for Flood at Noakhali, Bangladesh
document.getElementById('noakhali-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const noakhaliInput = document.getElementById('noakhali-input').value;
    const convertedInput = parseFloat(noakhaliInput);
    const mainBalance = document.getElementById('balance').innerText;
    const convertedBalance = parseFloat(mainBalance);

    if (convertedInput > 0) {
        const donateMoney = convertedInput + convertedBalance;
        document.getElementById('balance').innerText = donateMoney;
        alert(`You Donated : ${convertedInput} BDT`)
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

    if (convertedInput > 0) {
        const donateMoney = convertedInput + convertedBalance;
        document.getElementById('balance').innerText = donateMoney;
        alert(`You Donated : ${convertedInput} BDT`)
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

    if (convertedInput > 0) {
        const donateMoney = convertedInput + convertedBalance;
        document.getElementById('balance').innerText = donateMoney;
        alert(`You Donated : ${convertedInput} BDT`)
    }
    else {
        alert('Please Provide Valid Money')
    }
    document.getElementById('quota-input').value = ''

})
