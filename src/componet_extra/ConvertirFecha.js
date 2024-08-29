function convertirFecha(fecha) {
    const fechaObj = new Date(fecha);
  
    const año = fechaObj.getUTCFullYear();
    const mes = fechaObj.getUTCMonth() + 1;
    const dia = fechaObj.getUTCDate();
    const hora = fechaObj.getUTCHours();
    const minuto = fechaObj.getUTCMinutes();
  
    return `${dia}/${mes}/${año} ${hora}:${minuto}`;
  }
  
export const miFuncion = convertirFecha;
  