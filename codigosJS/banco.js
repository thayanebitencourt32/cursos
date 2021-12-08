const cliente1 = new Cliente();
cliente1.nome ="Noah";
cliente1.cpf = 299897745;

const cliente2 = new Cliente();
cliente2.nome= "Mamae";
cliente2.cpf= 896121646;

const contaCorrenteNoah =  new ContaCorrente();
contaCorrenteNoah.saldo= 0;
contaCorrenteNoah.agencia=1230;

const contaCorrenteMamae = new ContaCorrente();
contaCorrenteMamae.saldo=10;
contaCorrenteMamae.agencia=1230;

contaCorrenteMamae.depositar(100);
contaCorrenteMamae.sacar(50);

console.log(contaCorrenteMamae);