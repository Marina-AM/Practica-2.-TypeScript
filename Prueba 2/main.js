"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
const direccion_1 = require("./direccion");
const telefono_1 = require("./telefono");
const mail_1 = require("./mail");
const agenda_1 = require("./agenda");
//Personas
const personaA = new persona_1.persona('Pedro', 'Garcia', 26, 87987896, new Date('1996-06-26'), 'Rosa', 'Masculino', [new direccion_1.direccion('calle', 23, 4, 'B', 4136, 'Brenes', 'Sevilla')], [new mail_1.mail('PedroGarcia@gmail.com', 'personaA')], [new telefono_1.telefono('Fijo', 987988432)], 'No hay notas');
const personaB = new persona_1.persona('Maria', 'Moyano', 23, 23567545, new Date('1999-11-04'), 'Azul', 'Femenino', [new direccion_1.direccion('calle', 23, 5, 'A', 4136, 'Brenes', 'Sevilla')], [new mail_1.mail('mariaMoyano@gmail.com', 'personaB')], [new telefono_1.telefono('Movil', 682094238)], 'No hay notas');
const personaC = new persona_1.persona('Rosa', 'Garcia', 50, 34546787, new Date('1973-03-13'), 'Negro', 'Femenino', [new direccion_1.direccion('calle', 32, 8, 'C', 4136, 'Brenes', 'Sevilla')], [new mail_1.mail('RosaGarcia@gmail.com', 'personaC')], [new telefono_1.telefono('Movil', 682094238)], 'No hay notas');
const agenda = new agenda_1.Agenda([personaA, personaB, personaC]);
console.log('Agenda Completa:\n' + agenda.toString);
let persona_editar = agenda.getPersonaByDNI(22222222);
if (persona_editar !== undefined) {
    persona_editar.addTelefono(new telefono_1.telefono('Fijo', 123456790));
    persona_editar.addMail(new mail_1.mail('Otro contacto', 'nombreApellido@gmail.com'));
    persona_editar.addDireccion(new direccion_1.direccion('Jose', 324, 35, 'P', 12345, 'Cataluña', 'Barcelona'));
    agenda.setPersonaByDNI(22222222, persona_editar);
}
console.log('Editado\n' + agenda.toString);
