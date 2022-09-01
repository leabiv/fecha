/*
96.- Definir una clase "fecha" para guardar fechas. Con un constructor por defecto que
cree la fecha 1-1-1900, otro constructor que cree el objeto con la fecha pasada por
parámetros que debe comprobar la validez de dicha fecha, si es errónea guardará la
fecha por defecto; además debe contar con las siguientes funciones miembro:
• Mostrar, que mostrará la fecha en pantalla.
• int anno( ), que devolverá el valor del año.
• int mes( ), que devolverá el valor del mes.
• int dia( ), que devolverá el valor del día.
Escribe un programa que utilice esta clase para leer varias fechas y las escriba
después en pantalla.
*/

class Fecha {

    constructor(fecha) {
        let RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
        this.fechaf = fecha.split("/");
        if (fecha.match(RegExPattern) && fecha != "") {
            if(this.fechaf[1]> 0 && 
                this.fechaf[1] < 13 && 
                this.fechaf[2] > 0 && 
                this.fechaf[2] < 32768 && 
                this.fechaf[0] > 0 && 
                this.fechaf[0] <= (new Date(this.fechaf[2], this.fechaf[1], 0)).getDate()){
                this.fecha = fecha;
                return true;
            }  
        } else {
            this.fecha = '01-01-1900';
            return false;
        }
    }

    getMostrar() {
        return this.fecha;
    }

    anio() {
        return year;
    }

    mes() {
        return month;
    }

    dia() {
        return diaF;
    }

}

let arrayFechas = [];
let nuevaFecha1 = new Fecha('31/08/2022')
let nuevaFecha2 = new Fecha('31/08/2022')
let nuevaFecha3 = new Fecha('31/08/2022')
let nuevaFecha4 = new Fecha('31/08/2022')
let nuevaFecha6 = new Fecha('29/02/2022')
let nuevaFecha5 = new Fecha('/30/0')
arrayFechas.push(nuevaFecha1, nuevaFecha2, nuevaFecha3, nuevaFecha4,nuevaFecha5,nuevaFecha6);
