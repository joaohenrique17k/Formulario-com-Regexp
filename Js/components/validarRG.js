export default class ValidarRg {
  constructor(rg) {
    this.rg = rg;
  }
  limpar(rg) {
    return rg.replace(/\D/g, '');
  }
  construir(rg) {
    //**.***.***-*
    return rg.replace(
      /(\d{2}[-.\s]?)(\d{3}[-.\s]?)(\d{3}[-.\s]?)(\d{1})/g,
      '$1.$2.$3-$4',
    );
  }
  formatar(rg) {
    let rgLimpo = this.limpar(rg);
    return this.construir(rgLimpo);
  }
  validar(rg) {
    const matchRG = rg.match(
      /(\d{2}[-.\s]?)(\d{3}[-.\s]?)(\d{3}[-.\s]?)(\d{1})/g,
      '$1.$2.$3-$4',
    );
    console.log(matchRG);
    return matchRG && matchRG[0] === rg;
  }

  validarMudanca(rgElemento) {
    if (this.validar(rgElemento.value)) {
      console.log(rgElemento.value);
      rgElemento.value = this.formatar(rgElemento.value);
      rgElemento.classList.remove('erro');
      rgElemento.classList.add('valido');
      rgElemento.nextElementSibling.classList.remove('ativar');
    } else {
      rgElemento.classList.add('erro');
      rgElemento.classList.remove('valido');
      rgElemento.nextElementSibling.classList.add('ativar');
    }
  }
  adicionarEvento() {
    this.rg.addEventListener('change', () => {
      this.validarMudanca(this.rg);
    });
  }
  adicionarErroSpan() {
    const erroElement = document.createElement('span');
    erroElement.classList.add('erro-text');
    erroElement.innerText = 'RG inválido';
    this.rg.parentElement.insertBefore(erroElement, this.rg.nextElementSibling);
  }
  iniciar() {
    this.adicionarEvento();
    this.adicionarErroSpan();
    return this;
  }
}
