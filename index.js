import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";
import { ContaSalario } from "./contaSalario.js";

//CLIENTES

const cliente1 = new Cliente("Leonardo", 1238481051);
const conta1 = new ContaCorrente(cliente1, 101);

const cliente2 = new Cliente("Patricia", 888888888);
const conta2 = new ContaPoupanca(100, cliente2, 202);

const cliente3 = new Cliente("Roberto", 99999999999);
const conta3 = new ContaSalario(cliente3, 303)

conta1.depositar(100)
conta2.depositar(100)
conta3.depositar(100)

console.log(conta3);