class Sueldo{
    constructor(categoria, establecimiento,antiguedad, mes){
        this.categoria = categoria;
        this.establecimiento = establecimiento;
        this.antiguedad = antiguedad;
        this.mes = mes;
    }
    /* RECIBE POR PARAMETROS LA ANTIGUEDAD INGRESADA Y RETORNA EL PORCENTAJE CORRESPONDIENTE */
    adicionalAntiguedad(antiguedad){
        let retorno = 0;
        switch(antiguedad){
            case 0:
                retorno;
                break;
            case 1:
            case 2:
                retorno = 1;
                break;
            case 3:
            case 4:
                retorno = 2;
                break;
            case 5:
            case 6:
                retorno = 4;
                break;
            case 7:
            case 8:
                retorno = 5;
                break;
            case 9:
            case 10:
                retorno = 6;
                break;
            case 11:
            case 12:
                retorno = 7;
                break;
            case 13:
            case 14:
                retorno = 8;
                break;
            case 15:
            case 16:
                retorno = 10;
                break;
            case 17:
            case 18:
                retorno = 12;
                break;
            default:
                retorno = 14;
                break;       
        }
        return retorno;
    }
    /* RECIBE LA CATEGORIA DEL EMPLEADO Y LA CATEGORIA DEL ESTABELCIMIENTO POR PARAMETROS, RETORNA EL SUELDO BASICO*/ 
    calcularBasico(categoria, establecimiento, mes){
        let basico = 0;
        if(categoria == 5 && establecimiento == 2){
            switch(mes){
                case 5:
                    basico = 140222;
                    break;
                case 6:
                    basico = 56541;
                    break;
                case 7:
                    basico = 70394;
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    basico = 87639;
                    break;
                default:
                    basico;
                    break;
            }
        }
        else if(categoria == 3 && establecimiento == 2){
            switch(mes){
                case 5:
                    basico = 129523;
                    break;
                case 6:
                    basico = 52227;
                    break;
                case 7:
                    basico = 65023;
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    basico = 80952;
                    break;
            }
        }
        return basico; 
    }
    noRemunerativo(categoria, establecimiento, mes){
        let noRemunerativo = 0;
        if(categoria == 5 && establecimiento == 2){
            switch(mes){
                case 6:
                    noRemunerativo = 27705;
                    break;
                case 7:
                    noRemunerativo = 17245;
                    break;
                case 1:
                case 2:
                    noRemunerativo = 49077;
                    break;
                case 3:
                case 4:
                    noRemunerativo = 118312;
                    break;
                case 9:
                case 10:
                case 11:
                    noRemunerativo = 15775;
                    break;
                case 12:
                    noRemunerativo = 28044;
                    break;
                default:
                    noRemunerativo;
                    break;
            }
        }
        else if(categoria == 3 && establecimiento == 2){
            switch(mes){
                case 6:
                    noRemunerativo = 25591;
                    break;
                case 7:
                    noRemunerativo = 15930;
                    break;
                case 1:
                case 2:
                    noRemunerativo = 45333;
                    break;
                case 3:
                case 4:
                    noRemunerativo = 48571;
                    break;
                case 9:
                case 10:
                case 11:
                    noRemunerativo = 14571;
                    break;
                case 12:
                    noRemunerativo = 25904;
                    break;
                default:
                    noRemunerativo;
                    break;
            }
        }
        return noRemunerativo; 
    }
    
    /* RETRONA EL PROPORCIONAL POR ANTIGUEDAD */
    sumarAntiguedad(){
        let retorno = (this.calcularBasico(this.categoria, this.establecimiento, this.mes) * this.adicionalAntiguedad(this.antiguedad)) /100;
        return retorno;
    }
    /* RETORNA EL PLUS POR TRABAJAR EN CABA */
    plusCABA(){
        let retorno = (this.calcularBasico(this.categoria, this.establecimiento, this.mes) * 6) /100;
        return retorno;
    }
    /* RETRONA EL PRESENTISMO */
    presentismo(){
        let retorno = (this.calcularBasico(this.categoria, this.establecimiento, this.mes) * 10) /100;
        return retorno;
    }
    adicionalCumplimientoServ(){
        let retorno = (this.calcularBasico(this.categoria, this.establecimiento, this.mes) * 12) /100;
        return retorno;
    }
    /* RETORNA EL SUELDO BRUTO */
    calcularBruto(){
        let acumBasico = this.calcularBasico(this.categoria, this.establecimiento, this.mes);
        let acumAntiguedad = this.sumarAntiguedad();
        let acumPlus = this.plusCABA();
        let acumPresentismo = this.presentismo();
        let acumAdicional = this.adicionalCumplimientoServ();
        
        return (acumBasico + acumAntiguedad + acumPlus + acumPresentismo + acumAdicional);
    }
    /* RETORNA EL IMPORTE DE LA JUBILACION */
    jubilacion(){
        let retorno = (this.calcularBruto() * 11) / 100;
        return retorno;
    }
    /* RETORNA EL IMPORTE DE LA OBRA SOCIAL */
    leyObra(){
        let retorno = (this.calcularBruto() * 3) / 100;
        return retorno;
    }
    /* RETORNA LA CONTRIBUCION SOLIDARIA */
    contribucionSolidaria(noRemunerativo){
        let retorno = ((this.calcularBruto() * 2) / 100) + ((noRemunerativo * 2) /100);
        return retorno;
    }
    /* RETORNA EL SEPELIO, RECIBE POR PARAMETRO EL NO REMUNERATIVO */
    sepelioSeguro(noRemunerativo){
        let retorno = ((this.calcularBruto() + noRemunerativo)*1)/100;
        return retorno;
    }
    /* RETORNA EL NETO A COBRAR, RECIBE POR PARAMETRO EL NO REMUNERATIVO */
    calcularNeto(noRemunerativo){
        let bruto = this.calcularBruto();
        let descuentos = this.jubilacion() + (this.leyObra() * 2) + this.contribucionSolidaria(noRemunerativo) + this.sepelioSeguro(noRemunerativo);
        return bruto - descuentos + noRemunerativo;
    }
}

const BUTTON = document.getElementById('button');

button.addEventListener("click", ()=>{
    const CATEGORIA = document.getElementById('categoria').value;
    const ANTIGUEDAD = document.getElementById('antiguedad').value;
    const ESTABELCIMIENTO = document.getElementById('establecimiento').value;
    const MES = document.getElementById('mes').value;

    if(CATEGORIA != null && ESTABELCIMIENTO!= null && ANTIGUEDAD!= null && MES!= null){

        sueldo = new Sueldo(parseInt(CATEGORIA),parseInt(ESTABELCIMIENTO),parseInt(ANTIGUEDAD),parseInt(MES));
        
        let noRemunerativo = sueldo.noRemunerativo(parseInt(CATEGORIA),parseInt(ESTABELCIMIENTO),parseInt(MES));

        document.getElementById('basico').innerHTML = `$ ${sueldo.calcularBasico(parseInt(CATEGORIA),parseInt(ESTABELCIMIENTO),parseInt(MES))}`;
        document.getElementById('bruto').innerHTML = `$ ${Math.round(sueldo.calcularBruto())}`;
        document.getElementById('no-remunerativo').innerHTML = `$ ${noRemunerativo}`;
        document.getElementById('neto').innerHTML = `$ ${Math.round(sueldo.calcularNeto(noRemunerativo))}`;
    }
    else{
        console.log('No se registraron datos');
    }   
});
