// Get all the 'Apply Now' buttons
var applyButtons = document.querySelectorAll('.apply-btn');

// Handle button click event
function handleApplyButtonClick() {
    alert('You clicked the Apply Now button!'); // Replace this with your desired functionality
}

// Attach event listener to each button
applyButtons.forEach(function(button) {
    button.addEventListener('click', handleApplyButtonClick);
});
