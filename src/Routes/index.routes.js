//Entity Routes
import AppointmentRoute from "./entityRoutes/AppointmentRoute.js";
import PatientRoute from "./entityRoutes/PatientRoute.js";

//AppointmentNamespace Routes
// import AppointmentResourceRoute from "./AppointmentNamespaceRoutes/AppointmentResourceRoute.js";

//obtenerTurno Notification Routes
import obtenerTurno from "./obtenerTurno/obtenerTurno.js";

//SendEmail Notification Routes
import SendEmail from "./NotificationEmail/SendEmail.js";

//Wpp Notification Routes
import NotificationWpp from "./NotificationWpp/NotificationWpp.js";

export default {
  entityRoutes: [AppointmentRoute, PatientRoute],
  // AppointmentResourceRoute: [AppointmentResourceRoute],
  obtenerTurno: [obtenerTurno],
  NotificationEmail: [SendEmail],
  NotificationWpp: [NotificationWpp],
};
