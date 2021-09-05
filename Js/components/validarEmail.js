export default function validarEmail() {
  email.addEventListener('change', ({ target }) => {
    let re =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    const valor = re.test(target.value);
    if (valor) {
      email.classList.remove('erro');
      email.classList.add('valido');
      email.nextElementSibling.classList.remove('ativar');
    } else {
      email.classList.remove('valido');
      email.classList.add('erro');
      adicionarErroSpan('Email');
      email.nextElementSibling.classList.add('ativar');
    }
  });
}
function adicionarErroSpan(Email) {
  const erroElement = document.createElement('span');
  erroElement.classList.add('erro-text');
  erroElement.innerText = `${Email} inválido`;
  email.parentElement.insertBefore(erroElement, email.nextElementSibling);
}
