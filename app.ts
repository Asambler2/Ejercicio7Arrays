

/*Teniendo este programa, ya hecho.*/
class Bicho {
    nombre: string;
    edad: number;
    peso: number;
    constructor(nombre: string, edad: number, peso: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }
}
interface IOrdenableBicho {
    ordena(BichoA: Bicho, BichoB: Bicho): number;
}
class OrdenaPorNombre implements IOrdenableBicho {
    ordena(BichoA: Bicho, BichoB: Bicho): number {
        return BichoA.nombre.localeCompare(BichoB.nombre);
    }
}
interface IMostrable {
    muestraBicho(BichoA: Bicho): void;
}
class MuestraTipo01 implements IMostrable {
    muestraBicho(BichoA: Bicho): void {
        console.log(`${BichoA.nombre} con una edad de ${BichoA.edad}, pesa
${BichoA.peso}`);
    }
}
class Jaula {
    bichos: Bicho[] = [];
    Ordenacion: IOrdenableBicho;
    Mostrador: IMostrable;
    constructor(Ordenacion: IOrdenableBicho, Mostrador: IMostrable) {
        this.Ordenacion = Ordenacion;
        this.Mostrador = Mostrador;
    }
    add(BichoAPoner: Bicho) {
        this.bichos.push(BichoAPoner);
    }
    pesoTotal(): number {
        let total = 0;
        for (let bicho of this.bichos) {
            total += bicho.peso;
        }
        return total;
    }
    edadTotal(): number {
        let total = 0;
        for (let bicho of this.bichos) {
            total += bicho.edad;
        }
        return total;
    }
    edadMedia(): number {
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
let Elefante: Bicho = new Bicho("Jumbo", 45, 898);
let Rinoceronte: Bicho = new Bicho("Willie", 1, 1);
let Koala: Bicho = new Bicho("Kolinger", 56, 67);
let Ordenacion: IOrdenableBicho = new OrdenaPorNombre();
let Mostrado: IMostrable = new MuestraTipo01();
let MiJaulaABC: Jaula = new Jaula(Ordenacion, Mostrado);
MiJaulaABC.add(Elefante);
MiJaulaABC.add(Rinoceronte);
MiJaulaABC.add(Koala);
MiJaulaABC.muestra();
MiJaulaABC.ordena();
MiJaulaABC.muestra()

/*Queremos ahora ordenar nuestra colección por la edad de más joven a más viejo.*/
console.log('Queremos ahora ordenar nuestra colección por la edad de más joven a más viejo.');

class OrdenaPorEdad implements IOrdenableBicho {
    ordena(BichoA: Bicho, BichoB: Bicho): number {
        return BichoA.edad > BichoB.edad ? 1 : -1;
    }
}
let OrdenacionEdad: IOrdenableBicho = new OrdenaPorEdad();
let MiJaula2: Jaula = new Jaula(OrdenacionEdad, Mostrado);
MiJaula2.add(Elefante);
MiJaula2.add(Rinoceronte);
MiJaula2.add(Koala);
MiJaula2.ordena();
MiJaula2.muestra()

/*También queremos ordenarlos por peso, de más flaco a más gordo*/
console.log('También queremos ordenarlos por peso, de más flaco a más gordo');

class OrdenaPorPeso implements IOrdenableBicho {
    ordena(BichoA: Bicho, BichoB: Bicho): number {
        return BichoA.peso > BichoB.peso ? 1 : -1;
    }
}
let OrdenacionPeso: IOrdenableBicho = new OrdenaPorPeso();
let MiJaula3: Jaula = new Jaula(OrdenacionPeso, Mostrado);
MiJaula3.add(Elefante);
MiJaula3.add(Rinoceronte);
MiJaula3.add(Koala);
MiJaula3.ordena();
MiJaula3.muestra()

//Queremos mostrarlo ahora de forma distinta(el animalito { jumbo } tiene una edad
//de { edad } y un { peso } estimado en peso

console.log('Queremos mostrarlo ahora de forma distinta (el animalito {jumbo} tiene una edad de { edad } y un { peso } estimado en peso');

class MuestraTipo02 implements IMostrable {
    muestraBicho(BichoA: Bicho): void {
        console.log(`el animalito ${BichoA.nombre} tiene una edad de ${BichoA.edad}, y un 
${BichoA.peso} estimado en peso`);
    }
}
let MostradoNuevo: IMostrable = new MuestraTipo02();
let MiJaula4: Jaula = new Jaula(Ordenacion, MostradoNuevo);
MiJaula4.add(Elefante);
MiJaula4.add(Rinoceronte);
MiJaula4.add(Koala);
MiJaula4.muestra();