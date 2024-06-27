import { Cliente } from "./Cliente.js";
export class ContaCorrente {
  static numeroDeContas = 0;
  agencia;
  cliente;
  #saldo = 0;

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this.cliente = novoValor;
    }
  }

  get cliente() {
    return this.cliente;
  }

  constructor(cliente, agencia) {
    this.cliente = cliente;
    this.agencia = agencia;
    ContaCorrente.numeroDeContas += 1;
  }

  get saldo() {
    return this.#saldo;
  }

  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
      //console.log(this._saldo) // saldo privado só mostra se colocar console dentro da classe
    }
    this.#saldo += valor; // this.saldo = this saldo + valor
    return valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
