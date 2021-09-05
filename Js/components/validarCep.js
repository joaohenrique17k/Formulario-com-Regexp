export default class ValidarCep {
  constructor(cepPuro) {
    this.cep = cepPuro;
  }
  limpar(cep) {
    return cep.replace(/\D/g, '');
  }
  construir(cep) {
    return cep.replace(/^(\d{5})[\s]?[-./]?(\d{3}$)/g, '$1-$2');
  }
  formatar(cep) {
    let cepLimpo = this.limpar(cep);
    return this.construir(cepLimpo);
  }
  validar(cep) {
    const matchCep = cep.match(/^(\d{5})[\s]?[-./]?(\d{3}$)/g, '$1-$2');
    return matchCep && matchCep[0] === cep;
  }
  validarNaMudanca(cepElemento) {
    if (this.validar(cepElemento.value)) {
      cepElemento.value = this.formatar(cepElemento.value);
      cepElemento.classList.remove('erro');
      cepElemento.classList.add('valido');
      cepElemento.nextElementSibling.classList.remove('ativar');
    } else {
      cepElemento.classList.add('erro');
      cepElemento.classList.remove('valido');
      cepElemento.nextElementSibling.classList.add('ativar');
    }
  }
  adicionarEvento() {
    this.cep.addEventListener('change', () => {
      this.validarNaMudanca(this.cep);
    });
  }
  adicionarErroSpan() {
    const erroElement = document.createElement('span');
    erroElement.classList.add('erro-text');
    erroElement.innerText = 'Cep inválido';
    this.cep.parentElement.insertBefore(
      erroElement,
      this.cep.nextElementSibling,
    );
  }

  iniciar() {
    this.adicionarEvento();
    this.adicionarErroSpan();
    return this;
  }
}
