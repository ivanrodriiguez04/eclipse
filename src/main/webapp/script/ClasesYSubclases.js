class Poligono{

	constructor(ancho, altura){

		this.ancho = ancho;

		this.altura = altura;

		this.nombre="Poligono";

	}

	

	devolverNombre(){

		return this.nombre;

	}

}




let pol = new Poligono(100,200);

console.log(pol.devolverNombre());

document.write("Anchura: " + pol.ancho + "// Altura: " + pol.altura);




class Cuadrado extends Poligono{

	constructor(lado){

		super(lado,lado);		

		this.nombre = "Cuadrado";

	}

	

	calculoArea(){

		return this.ancho*this.altura;

	}

	

}




var cua = new Cuadrado(20);

document.write(cua.calculoArea());

document.write("Anchura: " + cua.ancho + "// Altura: " + cua.altura);