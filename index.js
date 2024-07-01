import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

//CLIENTES

const cliente1 = new Cliente("Leonardo", 1238481051);
const conta1 = new ContaCorrente(cliente1, 101);

const cliente2 = new Cliente("Giovanni", 666666666);
const conta2 = new ContaCorrente(cliente2, 202);

const cliente3 = new Cliente("Roberto", 999999999);
const conta3 = new ContaCorrente(cliente3, 303);

const cliente4 = new Cliente("Patricia", 888888888);
const conta4 = new ContaPoupanca(100, cliente4, 404);

const cliente5 = new Conta(0, cliente1, 505)


conta1.depositar(100)
conta1.sacar(20)
conta4.depositar(100)
conta4.sacar(10)
console.log(conta1)