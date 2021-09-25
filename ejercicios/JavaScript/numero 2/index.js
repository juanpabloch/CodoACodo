let resultado = ""

        for (let i = 11; i > 8; i--) {
            for (let j = 1; j < 10; j++) {
                switch (i) {
                    case 11:
                        if(j === 1) resultado += "<h2>tabla del 11: </h2>"
                        break;
                    case 10:
                        if(j === 1) resultado += "<h2>tabla del 10: </h2>"
                        break;
                    default:
                        if(j === 1) resultado += "<h2>tabla del 9: </h2>"
                        break;
                }
                
                resultado += `<p>${i} x ${j} = ${i*j}<p>`
                if(j===9)resultado += "\n" 
            }  
        }

        document.write(`
            <div class="container">
                ${resultado}
            </div>
        `);