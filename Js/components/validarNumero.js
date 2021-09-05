export default class ValidarNumero {
  constructor(NumeroPuro) {
    this.NumeroPuro = NumeroPuro;
  }
  limpar(numero) {
    return numero.replace(/\D/g, '');
  }
  construir(numero) {
    return numero.replace(
      /((\(\d{2}\)\s)|(\(?\d{2}\)?\s)|(\d{2}\s)|(\d{2})|[-.\s]?)(\d{4,5}\-?)(\d{4})/g,
      '($1$2$3) $6-$7 ',
    );
  }
  formatar(numero) {
    const NumeroLimpo = this.limpar(numero);
    return this.construir(NumeroLimpo);
  }
  validar(numero) {
    const matchNumero = numero.match(
      /(?:[^\.\s]?\d{2}[^\.\s]?\s?)(\d{4,5}\-?)(\d{4})/g,
      '($1) $6-$7 ',
    );
    return matchNumero && matchNumero[0] === numero;
  }
  validarNaMudanca(numeroElemento) {
    if (this.validar(numeroElemento.value)) {
      numeroElemento.value = this.formatar(numeroElemento.value);
      numeroElemento.classList.remove('erro');
      numeroElemento.classList.add('valido');
      numeroElemento.nextElementSibling.classList.remove('ativar');
    } else {
      numeroElemento.classList.add('erro');
      numeroElemento.classList.remove('valido');
      numeroElemento.nextElementSibling.classList.add('ativar');
    }
  }

  adicionarEvento() {
    this.NumeroPuro.addEventListener('change', () => {
      this.validarNaMudanca(this.NumeroPuro);
    });
  }
  adicionarErroSpan() {
    const erroElement = document.createElement('span');
    erroElement.classList.add('erro-text');
    erroElement.innerText = 'Número inválido';
    this.NumeroPuro.parentElement.insertBefore(
      erroElement,
      this.NumeroPuro.nextElementSibling,
    );
  }
  iniciar() {
    this.adicionarEvento();
    this.adicionarErroSpan();
    return this;
  }
}
