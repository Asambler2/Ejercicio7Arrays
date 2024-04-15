"use strict";
/*Teniendo este programa, ya hecho.*/
class Bicho {
    constructor(nombre, edad, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }
}
class OrdenaPorNombre {
    ordena(BichoA, BichoB) {
        return BichoA.nombre.localeCompare(BichoB.nombre);
    }
}
class MuestraTipo01 {
    muestraBicho(BichoA) {
        console.log(`${BichoA.nombre} con una edad de ${BichoA.edad}, pesa
${BichoA.peso}`);
    }
}
class Jaula {
    constructor(Ordenacion, Mostrador) {
        this.bichos = [];
        this.Ordenacion = Ordenacion;
        this.Mostrador = Mostrador;
    }
    add(BichoAPoner) {
        this.bichos.push(BichoAPoner);
    }
    pesoTotal() {
        let total = 0;
        for (let bicho of this.bichos) {
            total += bicho.peso;
        }
        return total;
    }
    edadTotal() {
        let total = 0;
        for (let bicho of this.bichos) {
            total += bicho.edad;
        }
        return total;
    }
    edadMedia() {
        let edadTotal = this.edadTotal();
        return edadTotal / this.bichos.length;
    }
    ordena() {
        this.bichos.sort(this.Ordenacion.ordena);
    }
    muestra() {
        this.bichos.forEach(this.Mostrador.muestraBicho);
    }
}
let Elefante = new Bicho("Jumbo", 45, 898);
let Rinoceronte = new Bicho("Willie", 1, 1);
let Koala = new Bicho("Kolinger", 56, 67);
let Ordenacion = new OrdenaPorNombre();
let Mostrado = new MuestraTipo01();
let MiJaulaABC = new Jaula(Ordenacion, Mostrado);
MiJaulaABC.add(Elefante);
MiJaulaABC.add(Rinoceronte);
MiJaulaABC.add(Koala);
MiJaulaABC.muestra();
MiJaulaABC.ordena();
MiJaulaABC.muestra();
/*Queremos ahora ordenar nuestra colecci�n por la edad de m�s joven a m�s viejo.*/
console.log('Queremos ahora ordenar nuestra colecci�n por la edad de m�s joven a m�s viejo.');
class OrdenaPorEdad {
    ordena(BichoA, BichoB) {
        return BichoA.edad > BichoB.edad ? 1 : -1;
    }
}
let OrdenacionEdad = new OrdenaPorEdad();
let MiJaula2 = new Jaula(OrdenacionEdad, Mostrado);
MiJaula2.add(Elefante);
MiJaula2.add(Rinoceronte);
MiJaula2.add(Koala);
MiJaula2.ordena();
MiJaula2.muestra();
/*Tambi�n queremos ordenarlos por peso, de m�s flaco a m�s gordo*/
console.log('Tambi�n queremos ordenarlos por peso, de m�s flaco a m�s gordo');
class OrdenaPorPeso {
    ordena(BichoA, BichoB) {
        return BichoA.peso > BichoB.peso ? 1 : -1;
    }
}
let OrdenacionPeso = new OrdenaPorPeso();
let MiJaula3 = new Jaula(OrdenacionPeso, Mostrado);
MiJaula3.add(Elefante);
MiJaula3.add(Rinoceronte);
MiJaula3.add(Koala);
MiJaula3.ordena();
MiJaula3.muestra();
//Queremos mostrarlo ahora de forma distinta(el animalito { jumbo } tiene una edad
//de { edad } y un { peso } estimado en peso
console.log('Queremos mostrarlo ahora de forma distinta (el animalito {jumbo} tiene una edad de { edad } y un { peso } estimado en peso');
class MuestraTipo02 {
    muestraBicho(BichoA) {
        console.log(`el animalito ${BichoA.nombre} tiene una edad de ${BichoA.edad}, y un 
${BichoA.peso} estimado en peso`);
    }
}
let MostradoNuevo = new MuestraTipo02();
let MiJaula4 = new Jaula(Ordenacion, MostradoNuevo);
MiJaula4.add(Elefante);
MiJaula4.add(Rinoceronte);
MiJaula4.add(Koala);
MiJaula4.muestra();
//# sourceMappingURL=app.js.map