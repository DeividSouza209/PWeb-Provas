
if (true) {
	var exemploVar = 'sou var (escopo de função/global)';
	let exemploLet = 'sou let (escopo de bloco)';
	const exemploConst = 'sou const (escopo de bloco)';

	console.log('Dentro do bloco:');
	console.log('exemploVar =', exemploVar);
	console.log('exemploLet =', exemploLet);
	console.log('exemploConst =', exemploConst);
}

console.log('\nFora do bloco:');
console.log('exemploVar =', exemploVar);

// As linhas abaixo causariam erro se descomentadas, pois let/const têm escopo de bloco
// console.log('exemploLet =', exemploLet);
// console.log('exemploConst =', exemploConst);

/*
Explicação:
- var tem escopo de função (ou global se não estiver dentro de uma função). Por
	isso, uma variável declarada com var dentro de um bloco if ainda fica acessível
	fora do bloco.
- let e const têm escopo de bloco: só existem dentro das chaves { } onde foram
	declaradas. Tentar acessá-las fora do bloco resulta em ReferenceError.
- Além disso, const cria uma referência imutável (não permite reatribuição),
	enquanto let permite reatribuição.
*/

