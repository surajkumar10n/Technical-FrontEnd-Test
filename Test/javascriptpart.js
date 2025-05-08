const quantityRadios = document.querySelectorAll('input[name="quantity"]');
const totalElement = document.querySelector('.total');
const allOptions = document.querySelectorAll('.option');


document.querySelector('.option2-options').style.display = 'block';
allOptions[1].classList.add('selected'); 

quantityRadios.forEach((radio, index) => {
    radio.addEventListener('change', function() {
        const selectedPrice = parseFloat(this.dataset.price);
        totalElement.textContent = `Total : $${selectedPrice.toFixed(2)} USD`;
        
       
        document.querySelectorAll('.two-units-options').forEach(option => {
            option.style.display = 'none';
        });
        allOptions.forEach(option => {
            option.classList.remove('selected');
        });
        
        
        document.querySelector(`.option${index+1}-options`).style.display = 'block';
        this.closest('.option').classList.add('selected');
    });
});