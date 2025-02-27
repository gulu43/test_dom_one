let inc_btn = document.getElementById('inc');
let dec_btn = document.getElementById('dec');
let clr_btn = document.getElementById('clear');

let count_val = document.getElementById('count');
let message_val = document.getElementById('message');

// inc btn 
inc_btn.addEventListener('click', function () {
    let curCount = parseInt(count_val.innerHTML);
    curCount = curCount + 1;
    count_val.innerHTML = curCount;

    message_val.style.display = "none"; 
    clr_btn.style.display = "block"; 
});

// dec btn
dec_btn.addEventListener('click', function () {
    let curCount = parseInt(count_val.innerHTML);

    if (curCount > 0) {
        curCount = curCount - 1;
        count_val.innerHTML = curCount;
    }

    if (curCount <= 0) {
        message_val.style.display = "block";
        message_val.style.color = "red";
    }

    if (curCount === 0) {
        clr_btn.style.display = "none";
    }
});

// clear btn
clr_btn.addEventListener('click', function () {
    count_val.innerHTML = 0;
    message_val.style.display = "none"; 
    clr_btn.style.display = "none";
});
