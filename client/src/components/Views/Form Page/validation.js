//validaciones tenemos de propiedades 
//name: '',  const nameRegex = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
//released: '', const 
//image: '',    const imageRegex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
//rating: '',   CALCULAR UN MAXIMO DE 10 ,OSEA DEL 1 AL 10
//COMO yearsLife hasta 20 años , minimo 0 o 1, y hasta 10
//const ratingRegex = new RegExp(/^(?:0|(?:[1-9]|1\d|10))$/); 
//description: '',    
//(?:[1-9][0-9]{0,1}|1[01][0-9]|10): indica que la cadena debe ser igual a un número entre 1 y 10.
//(?:\.\d+)?: indica que la cadena puede contener un punto decimal seguido de uno o más dígitos.

export const validation = (data) => {
  
  // se verifica que se mande letras y espacios que hay entre ellos, es la mas usada para formularios
    const nameRegex = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
  
  //se verifica que no se llegue de cualquier tipo de urrl
    const imageRegex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
  //LIMITE 10 ,SERA
    const numberValidationrating = new RegExp(/^(?:[1-9][0-9]{0,1}|1[01][0-9]|5)(?:\.\d+)?$/);

    //objeto vacio , para ver en caso de errores
    let errors = {};

    if(!nameRegex.test(data.name)) errors.name = "Is not a name validation";


    if(!imageRegex.test(data.imagen)) errors.imagen = "Is not a url image";


    if(!numberValidationrating.test(data.rating) || data.rating <= 0 || data.rating > 5) errors.rating = "cannot be a floating number, and year cannot be higher than 10 and less 1"

    return errors;














}