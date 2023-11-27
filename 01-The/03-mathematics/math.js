console.group('cuadrado')
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado
function calcularCuadrado(side) {
  return { perimetro: side * 4,
  area: side * side,
  };
}
console.log ({
  ladoCuadrado, 
  perimetroCuadrado, 
  areaCuadrado 
})
console.groupEnd('cuadrado')

console.group('triangle')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulobase = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulobase;
const areaTriangulo = (ladoTriangulobase * alturaTriangulo) / 2;

function calcularTriangulo(lado1,lado2,altura,base) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,   
  };
}
function triangleHeight(sides, base) {
  if (sides == base) {
    console.warn('It is not isoseles');
  } else {
    return Math.sqrt((sides ** 2) - ((base ** 2) / 4))
  }
}
console.log ({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTriangulobase,
  alturaTriangulo,perimetroTriangulo,
  areaTriangulo,
})
console.groupEnd('triangle')

console.group('circle')
const circleRadio = 3;
const circleDiameter = circleRadio * 2;
const PI = 3.14159265;

const circumference = circleDiameter * PI;
const circleArea = (circleRadio ** 2) * PI; 
function calculateCircle(radio) {
  const diameter = radio * 2;
  const radiox2 = Math.pow(radio, 2);
  return {
    circumference: diameter * PI,
    area: radiox2 * PI,
  };
}

console.log({
  circleRadio,
  circleDiameter,
  PI,
  circumference,
  circleArea, 
}) 
console.groupEnd('circle')


