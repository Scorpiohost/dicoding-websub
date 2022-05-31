const paginate = document.querySelector('.paginate');
let html = '';

for (let i = 1; i <= 3; i++) {
    console.log
    html += `
        <div class="box">
            <span> ${i} </span>
        </div>
    `;
}
paginate.innerHTML = `
        <div class="box">
            <span> < </span>
        </div>
        ${html}
        <div class="box">
            <span> ... </span>
        </div>
        <div class="box">
            <span> > </span>
        </div>
        <div class="box">
            <span> >> </span>
        </div>
    `;