const imp = 0.21;
export default class Cliente{
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto || {};
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    calcularImpuesto(){
        let montoBruto = this._impuesto.monto_bruto_anual;
        let deducciones = this._impuesto.deducciones;
        return ((montoBruto - deducciones) * imp);
    }
}