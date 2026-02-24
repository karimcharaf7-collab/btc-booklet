const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentPage = 0;

function updateBooklet() {
    pages.forEach((page, index) => {
        page.classList.toggle('active', index === currentPage);
    });

    // Handle Button States
    prevBtn.disabled = (currentPage === 0);
    
    if (currentPage === pages.length - 1) {
        nextBtn.innerText = "Finish";
    } else {
        nextBtn.innerText = "Next";
    }
}

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updateBooklet();
    } else {
        alert("Thanks for reading the manual!");
        currentPage = 0;
        updateBooklet();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateBooklet();
    }
});

// Quiz Logic - Attached to window so HTML can find it
window.checkQuiz = function() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const result = document.getElementById('result');
    
    if (!q1) {
        result.innerText = "Please select an answer!";
        return;
    }

    if (q1.value === '2009') {
        result.innerText = 'Correct! Bitcoin was created in 2009.';
        result.style.color = "#FFD700";
    } else {
        result.innerText = 'Oops! The correct answer is 2009.';
        result.style.color = "#ff4444";
    }
};

// Menu Listeners
document.getElementById('menu1').onclick = () => alert('Calculator coming soon!');
document.getElementById('menu2').onclick = () => alert('News feature coming soon!');
document.getElementById('menu3').onclick = () => alert('Forum coming soon!');

// Run once on load
updateBooklet();
