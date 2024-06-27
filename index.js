import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//clientes
//conta corrente

const cliente1 = new Cliente("Leonardo", 1238481051);
const contaCliente1 = new ContaCorrente(cliente1, 101);

const cliente2 = new Cliente("Giovanni", 666666666);
const contaCliente2 = new ContaCorrente(cliente2, 202);

const cliente3 = new Cliente("Roberto", 999999999);
const contaCorrente3 = new ContaCorrente(cliente3, 303);

//depositos

contaCliente1.depositar(100);
contaCliente2.depositar(100);

//saques

//transferencias

contaCliente2.transferir(50, contaCliente1);
//console.log(ContaCorrente.numeroDeContas);  //Comando para ver o nuemro de contas
console.log(cliente1);
