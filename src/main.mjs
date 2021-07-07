import Impuesto from './Impuesto.mjs';
import Cliente from './Cliente.mjs';

let impuesto1 = new Impuesto(20000,10000);


let cliente1 = new Cliente("Karen", impuesto1);

console.log(cliente1.calcularImpuesto());

