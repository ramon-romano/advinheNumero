const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const advinheNumero = () => {
    let tentativas = 5;
    let numero = Math.floor(Math.random() * 100) + 1;

const fazerPalpite = (tentativa) => {
    if(tentativa < tentativas) {
        rl.question(`Tentativa ${tentativa + 1}: Advinhe um número entre 1 e 100: `, (input) => {
            let palpite = parseInt(input);

            if(palpite > nunmero) {
                console.log(`O numero é menor que ${palpite}`);
                fazerPalpite(tentativa + 1);
            } else if(palpite < numero) {
                console.log(`O numero é amior que ${palpite}`);
                fazerPalpite(tentativa + 1);
            } else {
                console.log(`Parabéns, você acertou o número!!`)
                rl.close();
            }
        });
    } else {
        console.log(`Você esgotou suas tentativas. O número era ${numero}.`);
    }
  };

  fazerPalpite(0);
};

advinheNumero();