(function() {
    // Crear el contenedor de la calculadora
    var calculatorContainer = document.createElement('div');
    calculatorContainer.id = 'calculator-widget';
    document.body.appendChild(calculatorContainer);

    // Crear el botón de minimizar
    var toggleButton = document.createElement('button');
    toggleButton.innerHTML = '◁'; // El icono de la flecha para reducir
    toggleButton.id = 'toggle-button';
    toggleButton.style.position = 'absolute';
    toggleButton.style.top = '10px';
    toggleButton.style.right = '10px';
    toggleButton.style.fontSize = '18px';
    toggleButton.style.cursor = 'pointer';
    calculatorContainer.appendChild(toggleButton);

    // Cargar los estilos CSS necesarios para el widget
    var style = document.createElement('style');
    style.innerHTML = `
        #calculator-widget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            padding: 10px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            max-width: 250px;
            transition: all 0.3s ease;
        }
        #calculator-widget.collapsed {
            width: 50px;
            height: 50px;
            padding: 0;
        }
        #toggle-button {
            background: none;
            border: none;
            color: #333;
            font-size: 20px;
            cursor: pointer;
        }
        .calculator-content {
            display: block;
        }
        #display {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            text-align: right;
            border: none;
        }
        button {
            width: 40px;
            height: 40px;
            font-size: 18px;
            margin: 5px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // Cargar el HTML del widget (calculadora)
    var calculatorHTML = `
        <div class="calculator-content">
            <input type="text" id="display" readonly>
            <div>
                <button onclick="appendToDisplay('1')">1</button>
                <button onclick="appendToDisplay('2')">2</button>
                <button onclick="appendToDisplay('3')">3</button>
                <button onclick="appendToDisplay('+')">+</button>
            </div>
            <div>
                <button onclick="appendToDisplay('4')">4</button>
                <button onclick="appendToDisplay('5')">5</button>
                <button onclick="appendToDisplay('6')">6</button>
                <button onclick="appendToDisplay('-')">-</button>
            </div>
            <div>
                <button onclick="appendToDisplay('7')">7</button>
                <button onclick="appendToDisplay('8')">8</button>
                <button onclick="appendToDisplay('9')">9</button>
                <button onclick="appendToDisplay('*')">*</button>
            </div>
            <div>
                <button onclick="appendToDisplay('0')">0</button>
                <button onclick="clearDisplay()">C</button>
                <button onclick="appendToDisplay('.')">.</button>
                <button onclick="appendToDisplay('/')">/</button>
            </div>
            <div>
                <button onclick="calculate()">=</button>
            </div>
        </div>
    `;
    calculatorContainer.innerHTML += calculatorHTML;

    // Funciones de la calculadora
    window.appendToDisplay = function(value) {
        document.getElementById('display').value += value;
    };

    window.clearDisplay = function() {
        document.getElementById('display').value = '';
    };

    window.calculate = function() {
        try {
            document.getElementById('display').value = eval(document.getElementById('display').value);
        } catch (e) {
            document.getElementById('display').value = 'Error';
        }
    };

    // Función para minimizar/ocultar el widget
    toggleButton.addEventListener('click', function() {
        if (calculatorContainer.classList.contains('collapsed')) {
            calculatorContainer.classList.remove('collapsed');
            toggleButton.innerHTML = '◁'; // Icono de flecha hacia abajo
        } else {
            calculatorContainer.classList.add('collapsed');
            toggleButton.innerHTML = '▷'; // Icono de flecha hacia arriba
        }
    });
})();
