document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('table-container');
    container.addEventListener('click', function(event) {
        // すでにハイライトされているセルがあれば、ハイライトを解除
        const highlighted = document.querySelector('.highlight');
        if (highlighted) {
            highlighted.classList.remove('highlight');
        }

        // クリックされた要素がtd要素の場合、ハイライトを適用
        if (event.target.tagName === 'TD') {
            event.target.classList.add('highlight');
        }
    });

    fetch('/api/multiplication?size=12')
        .then(response => response.json())
        .then(data => {
            const table = document.createElement('table');
            data.table.forEach(row => {
                const tr = document.createElement('tr');
                row.forEach(cell => {
                    const td = document.createElement('td');
                    td.textContent = cell;
                    tr.appendChild(td);
                });
                table.appendChild(tr);
            });
            container.appendChild(table);
        })
        .catch(error => console.error('Error fetching data: ', error));
});
