
            var a, b, c;
            
            function pegarNumeros() {
                //pegar as variáveis:
                a = document.getElementById("n1").value;
                b = document.getElementById("n2").value;
            }
            function mostrarResultado() {
                var elementoResultado = document.getElementById("resultado");
                //mostrar o resultado:
                if ( c < 0 ) {
                    elementoResultado.style = "color: red;";
                } else if ( c > 0 ) {
                    elementoResultado.style = "color: green;";
                } else {
                    elementoResultado.style = "color: black;";
                }
                elementoResultado.innerHTML = "Resultado: " + c;
            }
            function somar(){
                pegarNumeros();
                c = parseFloat( a ) + parseFloat( b );
                mostrarResultado();
            }
            function subtrair() {
                pegarNumeros();
                c = parseFloat( a ) - parseFloat( b );
                mostrarResultado();
            }
            function multiplicar() {
                pegarNumeros();
                c = parseFloat( a ) * parseFloat( b );
                mostrarResultado();
            }
            function dividir() {
                pegarNumeros();
                c = parseFloat( a ) / parseFloat( b );
                mostrarResultado();
            }