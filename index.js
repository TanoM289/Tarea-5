// Cargar los datos del menú desde el archivo JSON
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const productosContainer = document.getElementById('productos');

        // Iterar sobre los items del menú y mostrarlos en el HTML
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('col-md-4', 'mb-4');

            itemElement.innerHTML = `
                <div class="card shadow-sm">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="price">$${item.cost.toFixed(2)}</p>
                    </div>
                </div>
            `;

            productosContainer.appendChild(itemElement);
        });
    })
    .catch(error => console.error('Error al cargar el menú:', error));

