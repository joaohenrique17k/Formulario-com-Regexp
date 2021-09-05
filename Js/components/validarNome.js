export default function validarNome() {
  nome.addEventListener('change', ({ target }) => {
    let regexNome = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/g;
    const valorNome = regexNome.test(target.value);
    if (valorNome) {
      nome.classList.remove('erro');
      nome.classList.add('valido');
      nome.nextElementSibling.classList.remove('ativar');
    } else {
      nome.classList.add('erro');
      nome.classList.remove('valido');
      adicionarErroSpan1();
      nome.nextElementSibling.classList.add('ativar');
    }
  });
}
function adicionarErroSpan1() {
  const erroElement = document.createElement('span');
  erroElement.classList.add('erro-text');
  erroElement.innerText = `O nome contém caracteres inválidos`;
  nome.parentElement.insertBefore(erroElement, nome.nextElementSibling);
}
