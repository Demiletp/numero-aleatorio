//Tipos de Variaveis Primitivas
let valor: number = 3000;
let nome: string = "meu nome é Julia"
let isPago: boolean = false;
let qualquer: any = "";

qualquer = 22;

//Arrays
const lista: number[] = [];
lista.push(12,13,14,15,1.54);

//Tipos personalizados 
type Transacao = {
    tipoTransacao: string;
    data:Date;
    valor:number;
}

//Enum 
enum tipoTransacao{
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const  novaTransacao: Transacao = {
    tipoTransacao: "",
    data: new Date(),
    valor: 0 
}