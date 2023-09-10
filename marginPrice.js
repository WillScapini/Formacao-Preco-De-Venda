
document.querySelector('button').addEventListener('click', () => {
            
    let cost = document.querySelector('#custo');
    let desiredMargin = document.querySelector('#percentual-desejado')
    
    cost = Number(custo.value);
    desiredMargin = Number(desiredMargin.value)

    if(cost == ' ' || desiredMargin == ' ') {
        
        document.querySelector('.result').innerHTML = `Informe preço e a margem desejada`
    } else if (cost < 0 || desiredMargin < 0) {
        
        document.querySelector('.result').innerHTML = `Informe preço e a margem desejada`
    } else if (desiredMargin >= 100) {
        
        document.querySelector('.result').innerHTML = `Não é possível obter margem maior ou igual a 100%`
    }

    else {
        
        let salePrice = cost / (1 - (desiredMargin / 100));
        let profitMargin = (salePrice - cost) / (salePrice) * 100;
        let profit = salePrice - cost
        
        document.querySelector('.result').innerHTML = ` Preço Venda &#128180;: ${salePrice.toFixed(2)} R$. <br> Lucro % &#128176; : ${profitMargin.toFixed(2)}% <br> Custo &#128184; : ${cost.toFixed(2)} R$ <br> Lucro &#128200;: ${profit.toFixed(2)} R$.`


    }

})
