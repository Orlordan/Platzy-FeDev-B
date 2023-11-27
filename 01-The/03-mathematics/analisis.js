console.log(salarios);
//* Analisis  Salarial Juanita
// const wantedPerson = 'Juanita';
/* FORMA UN POCO MAS LARGA 
function findPerson(wantedPerson) {
const person = salarios.find((person) => {
  return person.name == wantedPerson;
});
 return person; 
} */
//* the shortest way to find someone 
function findPerson(wantedPerson) {
  return salarios.find((person) => person.name == wantedPerson);
}
function medianPerPerson(personName) {
  const jobs = findPerson(personName).trabajos;
  console.table(jobs);
  const salary = jobs.map((el) => el.salario);
  console.table(salary);
  const medianSalarys = PlatziMath.calcularMediana(salary);
  console.log(medianSalarys);
  return medianSalarys;
}
/* function personProyection(personName) {
  const jobs = findPerson(personName).trabajos;
  let growth = [];
  
  for (let i = 1; i < jobs.length; i++) {
    const salarioActual = jobs[i].salario;
    const salarioPasado = jobs[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeCrecimiento = crecimiento / salarioPasado;
    growth.push(porcentajeCrecimiento)
  }
  const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(growth);
  const ultimoSalario = jobs[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;

  return nuevoSalario;
} */

//* Analisis empresarial

const empresas = {};

for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }

    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

console.log({empresas});

function medianCompany(name, year) {
  if (!empresas[name]) {
    console.warn('The company does not exist');
  } else if (!empresas[name][year]) {
    console.warn('No salaries that year');
  } else {
    return PlatziMath.calcularMediana(empresas[name][year]);
  }
}
function companyProyection(name) {
  if (!empresas[name]) {
    console.warn('The company does not exist');
  } else {
    console.log(Object.keys(empresas[name]));
    console.log(Object.values(empresas[name]));
    const years = Object.keys(empresas[name]);
    const medianYears = years.map((year) => {
      return medianCompany(name, year);  
    });
    console.log({medianYears});
  }
}
function medianaGeneral() {
  const listaMedianas = salarios.map(
    persona => medianaPorPersona(persona.name)
  );
  
  const mediana = PlatziMath.calcularMediana(listaMedianas);

  return mediana;
}

function medianaTop10() {
  const listaMedianas = salarios.map(
    persona => medianaPorPersona(persona.name)
  );

  const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);
  
  const cantidad = listaMedianas.length / 10;
  const limite = listaMedianas.length - cantidad;
  
  const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);

  const medianaTop10 = PlatziMath.calcularMediana(top10);
  return medianaTop10;
}