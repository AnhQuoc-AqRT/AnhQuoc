document.getElementById('editButton').addEventListener('click', function() {
    let partyAName = prompt('Enter Party A Name:', document.getElementById('partyAName').innerText);
    let partyAAddress = prompt('Enter Party A Address:', document.getElementById('partyAAddress').innerText);
    let partyBName = prompt('Enter Party B Name:', document.getElementById('partyBName').innerText);
    let partyBAddress = prompt('Enter Party B Address:', document.getElementById('partyBAddress').innerText);
    let terms = prompt('Enter Terms and Conditions:', document.getElementById('terms').innerText);

    document.getElementById('partyAName').innerText = partyAName;
    document.getElementById('partyAAddress').innerText = partyAAddress;
    document.getElementById('partyBName').innerText = partyBName;
    document.getElementById('partyBAddress').innerText = partyBAddress;
    document.getElementById('terms').innerText = terms;
});

document.getElementById('saveButton').addEventListener('click', function() {
    // Save functionality here
    alert('Changes saved!');
});
