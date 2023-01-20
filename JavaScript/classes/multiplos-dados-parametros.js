/* Uma forma de passar vários dados para uma instancia de classe, sem precisar declaralas no constructor é usando o spread operator ('...') */

class multiplosDados {
    constructor(...args) {
      return args.map(arg => new Date(...arg))
    }
  }
  
  const arrayDatas = ["2002", "11", "05"]
  const arrayDatas1 = ["2020", "05", "04"]
  const arrayDatas2 = ["2023", "01", "012"]
  
  let retornaDatas = new multiplosDados(arrayDatas,arrayDatas1,arrayDatas2)
   
  console.log(retornaDatas)

/* Retorno: 
  [
    2002-12-05T00:00:00.000Z,
    2020-06-04T00:00:00.000Z,
    2023-02-12T00:00:00.000Z
  ] 
*/
  
  