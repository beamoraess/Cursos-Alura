var campos = [
        document.querySelector('#data'),
        document.querySelector('#quantidade'),
        document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();

    // varrer cada item do array
    var tr = document.createElement('tr');
    campos.forEach(function(campo){
        // Vai passar por todos elementos,e criar uma td para cada campo
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value + campos[2].value; // soma os valores pra fazer o campo volume

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
});

