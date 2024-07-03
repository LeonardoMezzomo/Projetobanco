export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
    if (this.constructor == Conta) console.log("Nao foi possivel");
  }

  logicaSacar(valor, taxa) {

    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
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
