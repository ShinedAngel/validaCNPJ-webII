export class Fornecedores {
  NomeFantasia: string;
  RazaoSocial: string;
  CNPJ: string;

  Valido(): boolean {
    let tamanho: number;
    let numeros: string;
    let digitos: string;
    let soma: number;
    let pos: number;
    let i: number;
    let resultado: string;

    this.CNPJ = this.CNPJ.replace(/[^\d]+/g, '');

    if (this.CNPJ == '') return false;

    if (this.CNPJ.length != 14)
      return false;

    if (this.CNPJ == "00000000000000" ||
      this.CNPJ == "11111111111111" ||
      this.CNPJ == "22222222222222" ||
      this.CNPJ == "33333333333333" ||
      this.CNPJ == "44444444444444" ||
      this.CNPJ == "55555555555555" ||
      this.CNPJ == "66666666666666" ||
      this.CNPJ == "77777777777777" ||
      this.CNPJ == "88888888888888" ||
      this.CNPJ == "99999999999999")
      return false;

    // Valida DVs
    tamanho = this.CNPJ.length - 2
    numeros = this.CNPJ.substring(0, tamanho);
    digitos = this.CNPJ.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += Number(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2)
        pos = 9;
    }
    resultado = String(soma % 11 < 2 ? 0 : 11 - soma % 11);
    if (resultado != digitos.charAt(0))
      return false;

    tamanho = tamanho + 1;
    numeros = this.CNPJ.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += Number(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2)
        pos = 9;
    }
    resultado = String(soma % 11 < 2 ? 0 : 11 - soma % 11);
    if (resultado != digitos.charAt(1))
      return false;

    return true;
  }
}
