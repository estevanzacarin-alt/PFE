class Bairro{
    nome;
    qtde_habitantes;
    qtde_casas;
    faixa_etaria;
    media_renda_familia;

    mostrarDados(){
        console.log(`Nome: ${bairro.nome}`);
        console.log(`Quantidade de habitantes: ${bairro.qtde_habitantes}`);
        console.log(`Quantidade de casas: ${bairro.qtde_casas}`);
        console.log(`Faixa etária: ${bairro.faixa_etaria}`);
        console.log(`Média de renda familiar: ${bairro.media_renda_familia}`);
    }
}

let bairro = new Bairro();
bairro.nome = 'Centro';
bairro.qtde_habitantes = 5000;
bairro.qtde_casas = 1500;
bairro.faixa_etaria = '18 a 60 anos';
bairro.media_renda_familia = 'R$ 3500';

bairro.mostrarDados();

console.log(bairro);
