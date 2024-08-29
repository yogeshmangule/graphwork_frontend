import moment from 'moment';
import 'moment/locale/es';
moment.updateLocale('es', {
 weekdaysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
 week: { dow: 1 }
});

export default {
 "locale": "es",
 "fullDatetimeFormat": "dddd D MMMM YYYY",
 "datetimeFormat": "DD/MM/YYYY HH:mm",
 "dateFormat": "DD/MM/YYYY",
 "timeFormat": "HH:mm",
 "languages": {
  "es_ES": "🇪🇸 Español (España)",
  "en_US": "🇺🇸 Inglés (Estados Unidos)"
 },

 "Settings": {
  "name": "configuración",
  "title": "Configuración",
  "roles": "Roles de usuario",
  "types": "Categorización de productos",
  "permissions": {
   "read": "Leer",
   "update": "Editar",
   "create": "Crear",
   "delete": "Eliminar"
  }
 },

 "Documentation": {
  "title": "Documentación API"
 },

 "Unauthorized": "No tiene permisos para ejecutar la petición",

 "DeleteConfirmTitle": "Atención!",
 "DeleteConfirmValue": "ELIMINAR",
 "DeleteConfirmMessage": "!Esta operación no podrá ser revertida! Desea continuar?",
 "DeleteConfirmPlaceholder": "Escriba ELIMINAR",
 "DeleteConfirmYES": "Si, eliminar!",
 "DeleteConfirmNO": "No, cancelar!",

 "Status": {
  "enabled": "Activo",
  "disabled": "Desactivado"
 },

 "ExportCSV": "Exportar a CSV",
 "tableReset": "Limpiar",
 "tableEmpty": "No se han encontrado resultados",
 "pagination": {
  "firstPageText": '«-',
  "prePageText": '«',
  "nextPageText": '»',
  "lastPageText": '-»',
  "firstPageTitle": 'Primera página',
  "prePageTitle": 'Página anterior',
  "nextPageTitle": 'Siguiente página',
  "lastPageTitle": 'Última página',
 },
 "paginationFooter": (from, to, size) => {
  return window.innerWidth > 768
   ? size > 0
    ? (from == 1 && size <= to)
     ? 'Mostrando un total de <strong>' + size + '</strong>'
     : 'Mostrando del <strong>' + from + '</strong> al <strong>' + to + '</strong> de un total de <strong>' + size + '</strong>'
    : 'No se han encontrado'
   : 'Total: <strong>' + size + '</strong>'
 },

 "Dashboard": {
  "title": "Dashboard",
  "titles": {
   "totals": "Últimos meses",
   "last": "Últimos días"
  },
  "labels": {
   "total": "Totales",
   "sales": "Ventas",
   "bookings": "Reservas",
   "cancellations": "Anulaciones"
  },
  "groups": {
   "operators": "Operadores",
   "providers": "Proveedores",
   "establishments": "Establecimientos",
   "types": "Categorías",
   "products": "Productos",
   "events": "Actividades",
   "months": "Meses",
   "days": "Días"
  },
  "ranges": {
   'Hoy': [moment(), moment()],
   'Esta semana': [moment().startOf('week').add(1, 'days'), moment().endOf('week').add(1, 'days')],
   'Últimos 7 días': [moment().subtract(6, 'days'), moment()],
   'Este mes': [moment().startOf('month'), moment().endOf('month')],
   'Últimos 30 días': [moment().subtract(29, 'days'), moment()],
   'Este año': [moment().startOf('year'), moment().endOf('year')]
  },
  "buttons": {
   "groupBy": "Agrupación",
   "applyLabel": "Aplicar",
   "cancelLabel": "Cancelar",
   "customRangeLabel": "Personalizado",
   "fromLabel": "De",
   "toLabel": "a"
  }
 },

 "Login": {
  "title": "Acceso restringido",
  "subtitle": "FiestaisMadrid - Events Manager",
  "username": "Correo electrónico",
  "password": "Contraseña",
  "submit": "Entrar",
  "forgotten": "Ayuda! No puedo acceder",
  "backtologin": "Volver al inicio de sesión",
  "producedBy": "Producido por",
  "financedBy": "Cofinanciado por"
 },

 "Users": {
  "names": {
   "administrators": "administradores",
   "providers": "proveedores",
   "operators": "operadores",
   "users": "usuarios"
  },
  "titles": {
   "administrators": "Administradores",
   "providers": "Proveedores",
   "operators": "Operadores",
   "users": "Usuarios",
   "profile": "Perfil de usuario",
   "editorTab1": "Datos de usuario",
   "editorTab2": "Datos de contacto",
   "disconnect": "Desconectar"
  },
  "columns": {
   "username": "Alias de usuario",
   "password": "Contraseña",
   "email": "Correo electrónico",
   "role": "Grupo de usuarios",
   "parent": "Propietario",
   "status": "Estado",
   "reg_date": "Fecha registro",
   "NID": "Nº Identificación fiscal",
   "tradename": "Nombre comercial",
   "taxname": "Nombre fiscal",
   "firstname": "Nombre (Persona de contacto)",
   "surname": "Apellidos (Persona de contacto)",
   "address": "Dirección",
   "locality": "Ciudad / Localidad",
   "state": "Provincia",
   "postcode": "Código postal",
   "country": "País",
   "phone": "Teléfono fijo",
   "mobile": "Teléfono móvil",
   "language": "Idioma"
  },
  "placeholders": {
   "username": "Defina un alias para este usuario",
   "password": "Defina contraseña (dos veces)",
   "email": "Introduzca la dirección de correo electrónico",
   "NID": "Introduzca el DNI/CIF/Pasaporte",
   "tradename": "Introduzca el nombre comercial",
   "taxname": "Introduzca el nombre fiscal",
   "firstname": "Nombre de persona de contacto",
   "surname": "Apellidos de persona de contacto",
   "address": "Escriba dirección completa (calle y número)",
   "locality": "Indique ciudad o localidad",
   "state": "Introduzca la provincia",
   "postcode": "Código postal",
   "country": "País",
   "phone": "Número de teléfono",
   "mobile": "Número de teléfono"
  },
  "buttons": {
   "addUser": {
    "administrators": "Añadir administrador",
    "providers": "Añadir proveedor",
    "operators": "Añadir operador"
   },
   "createUser": {
    "administrators": "Crear administrador",
    "providers": "Crear proveedor",
    "operators": "Crear operador"
   },
   "saveUser": "Crear usuario",
   "saveChanges": "Guardar cambios",
   "delSelected": "Eliminar seleccionados",
   "closeEditor": "Cancelar",
  },
  "Errors": {
   "PassNotMatch": "Las contraseñas no coinciden"
  },
  "Alerts": {
   "profileSaved": "Su perfil ha sido actualizado"
  },
  "isGoingToDelete": (IDs) => {
   return IDs.length == 1 ? 'Se va a borrar un usuario.' : 'Se van a borrar ' + IDs.length + ' usuarios.'
  },
  "hasBeenDeleted": (name) => {
   return 'El usuario "' + name + '" ha sido eliminado'
  },
  "hasNotBeenDeleted": (name) => {
   return 'El usuario "' + name + '" no se puede eliminar, tiene reservas realizadas'
  }
 },


 "Establishments": {
  "name": "establecimientos",
  "title": "Establecimientos",
  "titles": {
   "editorTab1": "Datos del establecimiento",
   "editorTab2": "Galeria de fotos"
  },
  "columns": {
   "name": "Nombre del establecimiento",
   "description": "Descripción",
   "full_address": "Dirección completa"
  },
  "placeholders": {
   "name": "Introduzca el nombre del establecimiento",
   "description": "Escriba una descripción corta",
   "full_address": "Escriba la dirección completa"
  },
  "buttons": {
   "add": "Añadir establecimiento",
   "createBtn": "Crear establecimiento",
   "saveChanges": "Guardar cambios",
   "delSelected": "Eliminar seleccionados",
   "closeEditor": "Cancelar",
   "uploadPhoto": "Subir fotos"
  },
  "isGoingToDelete": (IDs) => {
   return IDs.length == 1 ? 'Se va a borrar un establecimiento.' : 'Se van a borrar ' + IDs.length + ' establecimientos.'
  },
  "hasBeenDeleted": (name) => {
   return 'El establecimiento "' + name + '" ha sido eliminado'
  },
  "hasNotBeenDeleted": (name) => {
   return 'El establecimiento "' + name + '" no se puede eliminar, tiene reservas realizadas'
  }
 },


 "Products": {
  "name": "productos",
  "title": "Productos",
  "titles": {
   "statistics": "Estadísticas",
   "editorTab1": "Datos del producto",
   "editorTab2": "Generador QR",
   "editorTab3": "Opciones de reserva",
   "editorTab4": "Galeria de fotos",
   "repetition": "Repetición",
   "repeat_pattern": "Patrón de repetición",
   "repeat_every": "Repetir cada",
   "repeat_onday": "El día",
   "repeat_the": "El",
   "repeat_end": "Fin de repetición",
   "repeat_time": "Repetir durante",
   "repeat_from": "desde la fecha de inicio",
   "repeat_weekdays": "Días de repetición",
   "repeat_daymonth": "de cada mes",
   "repeat_select": {
    "first": "primer",
    "second": "segundo",
    "third": "tercer",
    "fourth": "cuarto",
    "last": "último",
   },
   "hours": "hora (s)",
   "days": "día (s)",
   "weeks": "semana (s)",
   "months": "mes (es)",
   "years": "año (s)"
  },
  "columns": {
   "name": "Nombre del producto",
   "type": "Categoría",
   "description": "Descripción",
   "establishment": "Establecimiento",
   "start_date": "Fecha de inicio",
   "finish_date": "Fecha de finalización",
   "bookings": "Reservas",
   "repetition": {
    "none": "No repetir",
    "daily": "Diariamente",
    "weekly": "Semanalmente",
    "monthly": "Mensualmente"
   },
   "tickets": {
    "name": 'Nombre del QR',
    "stock": 'Stock',
    "uses_limit": 'Usos',
    "booking_limit": "Reservable hasta",
    "cancellation_limit": "Cancelable hasta",
    "validity_time": "Valido durante",
    "weekdays": "Días de validez (Todos si ningúno)",
   },
   "packets": {
    "name": 'Nombre del paquete',
    "price": 'Precio'
   }
  },
  "placeholders": {
   "name": "Introduzca nombre del producto",
   "description": "Escriba una descripción corta",
   "establishment": "Busca aquí el establecimiento asociado",
   "tickets": {
    "name": 'Nombre del QR',
    "stock": 'Introduzca el stock',
    "limit": 'Defina limite de usos'
   },
   "packets": {
    "name": 'Nombre del paquete',
    "price": 'Introduzca el precio',
   },
   "typeadd": "Escriba el nombre de la categoría a crear (Todos los idiomas requeridos)"
  },
  "buttons": {
   "add": "Añadir producto",
   "addType": "Añadir",
   "addTicket": "Añadir plantilla QR",
   "addPacket": "Añadir opción de reserva",
   "createBtn": "Crear producto",
   "saveAll": "Guardar todos",
   "saveChanges": "Guardar cambios",
   "delete": "Eliminar",
   "delSelected": "Eliminar seleccionados",
   "closeEditor": "Cancelar",
   "uploadPhoto": "Subir fotos",
   "showFinished": "Incluir finalizados",
   "showDisabled": "Incluir desactivados"
  },
  "isGoingToDelete": (IDs) => {
   return IDs.length == 1 ? 'Se va a borrar un producto.' : 'Se van a borrar ' + IDs.length + ' productos.'
  },
  "hasBeenDeleted": (name) => {
   return 'El producto "' + name + '" ha sido eliminado'
  },
  "hasNotBeenDeleted": (name) => {
   return 'El producto "' + name + '" no se puede eliminar, tiene reservas realizadas'
  },
  "typeHasNotBeenDeleted": (name) => {
   return 'La categoría "' + name + '" no se puede eliminar, esta en uso'
  }
 },

 "Events": {
  "name": "actividades",
  "title": "Actividades",
  "upcoming": "Próximas actividades"
 },

 "Tickets": {
  "name": "reservas",
  "title": "Reservas",
  "titles": {
   "editorTab1": "Opciones de reserva",
   "editorTab2": "Datos del cliente",
  },
  "columns": {
   "ownerName": "Emisor",
   "ticketName": "Nombre",
   "productName": "Producto",
   "establishmentName": "Establecimiento",
   "clientName": "Nombre cliente",
   "startDate": "Fecha inicio",
   "finishDate": "Fecha fin",
   "cancellationUntil": "Cancelable hasta",
   "usesLeft": "Usos restantes",
   "stockLeft": "Restante",
   "documentID": "Documento de identidad",
   "full_name": "Nombre completo",
   "email": "Correo electrónico",
   "phone": "Teléfono móvil"
  },
  "placeholders": {
   "documentID": "Introduzca identificación del cliente",
   "full_name": "Introduzca nombre del cliente",
   "email": "Introduzca correo electrónico",
   "phone": "Introduzca número de teléfono móvil"
  },
  "buttons": {
   "createBtn": "Emitir tickets",
   "saveChanges": "Guardar cambios",
   "delSelected": "Eliminar seleccionados",
   "closeEditor": "Cancelar",
   "showAsTickets": "Mostrar tickets"
  },
  "isGoingToDelete": (IDs) => {
   return IDs.length == 1 ? 'Se va a borrar un ticket.' : 'Se van a borrar ' + IDs.length + ' tickets.'
  },
  "hasBeenDeleted": () => {
   return 'El ticket ha sido eliminado'
  },
  "hasNotBeenDeleted": () => {
   return 'El ticket no se puede eliminar'
  },
  "availStock": (avail) => {
   return '<strong>Stock:</strong>&nbsp;' + avail + ' disponibles'
  }
 },

 "Autosuggest": {
  "inProgress": 'Realizando busqueda...',
  "noResults": 'No existen resultados',
  "minChars": 'Escrbe al menos un carcater para comenzar la busqueda',
  "errMessage": (message) => {
   return 'Se ha producido un error: ' + message
  }
 },



 "Errors": {
  "needsupport": "Escribanos un correo a soporte@absystem.com detallando su problema"
 }


}
