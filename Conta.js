export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  sacar(valor) {
    let taxa = 1;
    if (this._tipo == "corrente") {
      taxa = 1.1;
    }

    const valorSacado = taxa * valor;

    if (this.saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
  }
  
  depositar(valor) {
    if (valor <= 0) {
      return;
      //console.log(this._saldo) // saldo privado só mostra se colocar console dentro da classe
    }
    this._saldo += valor; // this.saldo = this saldo + valor
    return valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this.cliente = novoValor;
    }
  }

  get cliente() {
    return this.cliente;
  }

  get saldo() {
    return this._saldo;
  }
}
