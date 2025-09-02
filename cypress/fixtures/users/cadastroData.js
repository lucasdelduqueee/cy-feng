function gerarCPF() {
  const rnd = n => Math.floor(Math.random() * n);
  const calcDV = nums => {
    const soma = nums.reduce((acc, num, i) => acc + num * (nums.length + 1 - i), 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const nums = Array.from({ length: 9 }, () => rnd(10));
  nums.push(calcDV(nums));
  nums.push(calcDV(nums));

  return nums.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

//function gerarEmail() {
//return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
//}

const email = Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000;


const cadastroSuccess = {
    userSuccess: {
        cpf: gerarCPF(),
        nome: "Lucas teste 001",
        email: "lucas.delduque+teste"+ email +"@fengbrasil.com.br",
        sexo: "Masculino",
        datanascimento: "12/03/1991",
        celular: "19989743306",
      //  senha: "@Lucas7246"

         //cy.get('.ng-star-inserted > .feng-btn')

    }
    
  };

  //return cadastroSuccess;

export default cadastroSuccess

/*

/////
const cadastroFalha = {
    userFalha: {
        cpf: "@Lucas7246"

         //cy.get('.ng-star-inserted > .feng-btn')

    }
    
  };

  export { cadastroSuccess, cadastroFalha };
  */