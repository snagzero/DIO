function compareNumbers(num1, num2) {
    const firstfrase = createfirstfrase(num1, num2);
    const secondfrase = createsecondfrase(num1, num2);

    return `${firstfrase} ${secondfrase}`
}


function createfirstfrase(num1, num2) {
    let same = '';

    if (num1 !=== num2) {
        same = 'Não';
    }

    return `Os numeros ${num1} e ${num2} ${same} são iguais.`
}

function createsecondfrase(num1, num2) {
    const sum = num1 + num2;


    let result10 = 'menor';
    let result20 = 'menor';

    const compare10 = sum > 10;
    const compare20 = sum > 20;

    if(compare10) {
        result = 'maior';
    }

    if(compare20) {
        result = 'maior';
    }

    return `Sua soma é ${sum} que é ${result10} que 10 e ${result20} que 20.`;
}

console.log(comareNumbers(1, 2));









    const same = num1 === num2;
    const sum = num1 + num2;

    return same ? num1 + num2;

}