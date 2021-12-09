import { cliente } from "./Cliente.js"
import { contaCorrente } from "./contaCorrente.js"

const cliente1 = new cliente("Ricardo", 11122233309);
const cliente2 = new cliente("Alice", 88822233309);
/*
const cliente1 = new cliente();
cliente1.nome = "Ricardo" ;
cliente1.cpf = 11122233309;


const cliente2 = new cliente();
cliente2.nome = "Alice"
cliente2.cpf = 88822233309;
*/

const contaCorrenteRicardo = new contaCorrente(1001, cliente1);
//contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar (500);

/*contaCorrenteRicardo.depositar(50);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);*/

const conta2 = new contaCorrente(102, cliente2);
/*conta2.cliente = cliente2;
conta2.agencia = 102;*/

contaCorrenteRicardo.transferir(200, conta2);
contaCorrenteRicardo.transferir(200, conta2);

console.log(conta2);
console.log(contaCorrenteRicardo);
