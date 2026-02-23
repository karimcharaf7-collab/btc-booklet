const pages = document.querySelectorAll('.page');

const prevBtn = document.getElementById('prevBtn');const pages = document.querySelectorAll('.page');

const prevBtn = document.getElementById('prevBtn');

const nextBtn = document.getElementById('nextBtn');

let currentPage = 0;

function updateBooklet() {

    // Remove 'active' class from all pages

    pages.forEach((page, index) => {

        page.classList.toggle('active', index === currentPage);

    });

    // Handle button states

    prevBtn.disabled = (currentPage === 0);

    nextBtn.innerText = (currentPage === pages.length - 1) ? "Finish" : "Next";

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

function checkQuiz() {

    const q1 = document.querySelector('input[name="q1"]:checked');

    if (q1 && q1.value === '2009') {

        document.getElementById('result').innerText = 'Correct! Bitcoin was created in 2009.';

    } else {

        document.getElementById('result').innerText = 'Oops! The correct answer is 2009.';

    }

}

// Menu event listeners
document.getElementById('menu1').addEventListener('click', () => {
    alert('Crypto Calculator coming soon! Thank you for your interest.');
});

document.getElementById('menu2').addEventListener('click', () => {
    alert('Latest News feature in development! Stay tuned.');
});

document.getElementById('menu3').addEventListener('click', () => {
    alert('Community Forum launching soon! Thank you for now.');
});
 
let currentPage = 0;

function updateBooklet() {

    // Remove 'active' class from all pages

    pages.forEach((page, index) => {

        page.classList.toggle('active', index === currentPage);

    });

    // Handle button states

    prevBtn.disabled = (currentPage === 0);

    nextBtn.innerText = (currentPage === pages.length - 1) ? "Finish" : "Next";

}

nextBtn.addEventListener('click', () => {

    if (currentPage < pages.length - 1) {

        currentPage++;

        updateBooklet();

    } else {

        alert("Thanks for reading the manual!");

    }

});

prevBtn.addEventListener('click', () => {

    if (currentPage > 0) {

        currentPage--;

        updateBooklet();

    }

});

function checkQuiz() {

    const q1 = document.querySelector('input[name="q1"]:checked');

    if (q1 && q1.value === '2009') {

        document.getElementById('result').innerText = 'Correct! Bitcoin was created in 2009.';

    } else {

        document.getElementById('result').innerText = 'Oops! The correct answer is 2009.';

    }

}

 
