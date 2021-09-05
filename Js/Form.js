import ValidarCpf from './components/validarCpf.js';
import ValidarNumero from './components/validarNumero.js';
import validarEmail from './components/validarEmail.js';
import validarNome from './components/validarNome.js';
import ValidarCep from './components/validarCep.js';
import ValidarRg from './components/validarRG.js';

const nome = document.querySelector('.nome');
const email = document.querySelector('.email');
const rg = document.querySelector('.rg');
const cpf = document.querySelector('.cpf');
const cep = document.querySelector('.cep');
const numero = document.querySelector('.numero');

validarNome();
validarEmail();
const validarNumero = new ValidarNumero(numero).iniciar();
const validarCPF = new ValidarCpf(cpf).iniciar();
const validarRg = new ValidarRg(rg).iniciar();
const validarCep = new ValidarCep(cep).iniciar();
