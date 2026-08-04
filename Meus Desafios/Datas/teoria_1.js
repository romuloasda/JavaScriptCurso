/*
1. Criando e Instanciando DatasMomento Atual: const agora = new Date();Data Específica por Texto: const data = new Date('2026-12-25T00:00:00');Data Específica por Argumentos: const data = new Date(2026, 11, 25);⚠️ A Pegadinha do Mês: Os meses vão de 0 a 11(Janeiro = 0, Dezembro = 11).Os dias e o ano seguem a numeração normal.

2. Extratores(get) e Modificadores(set)Extratores: 
.getFullYear()(ano), 
.getMonth()(mês 0 - 11), 
.getDate()(dia do mês 1 - 31), 
.getDay()(dia da semana 0 - 6), 
.getHours(), .getMinutes(), 
.getSeconds().

Modificadores: .setDate(), .setMonth(), .setFullYear(), .setHours().Exemplo para somar dias: hoje.setDate(hoje.getDate() + 15)

3. Cálculos de Tempo(Timestamp)O Método.getTime(): Devolve o tempo exato decorrido desde 1º de Jan de 1970 em milissegundos.
Conversão de Dias: $1\text{ dia } = 1000 \times 60 \times 60 \times 24 = 86.400.000\text{ ms } $.Subtração de Datas: const diferencaDias = Math.ceil((dataFutura.getTime() - dataAtual.getTime()) / (1000 * 60 * 60 * 24));

4. Formatação e ApresentaçãoPadrão Brasileiro: data.toLocaleDateString('pt-BR')Dia por Extenso: data.toLocaleDateString('pt-BR', { weekday: 'long' })Zeros à Esquerda(Relógios): String(agora.getHours()).padStart(2, '0')

*/