import {persona} from "./persona"
import {direccion} from "./direccion"
import {telefono} from "./telefono"
import {mail} from "./mail"
import {Agenda} from "./agenda"


//Personas

const personaA: persona = new persona (
    'Pedro',
    'Garcia',
    26,
    87987896,
    new Date('1996-06-26'),
    'Rosa',
    'Masculino',
    [new direccion('calle',23,4,'B',4136,'Brenes','Sevilla')],
    [new mail('PedroGarcia@gmail.com','personaA')],
    [new telefono('Fijo',987988432)],
    'No hay notas',
);

const personaB: persona = new persona (
    'Maria',
    'Moyano',
    23,
    23567545,
    new Date('1999-11-04'),
    'Azul',
    'Femenino',
    [new direccion('calle',23,5,'A',4136,'Brenes','Sevilla')],
    [new mail('mariaMoyano@gmail.com','personaB')],
    [new telefono('Movil',682094238)],
    'No hay notas',
);

const personaC: persona = new persona (
    'Rosa',
    'Garcia',
    50,
    34546787,
    new Date('1973-03-13'),
    'Negro',
    'Femenino',
    [new direccion('calle',32,8,'C',4136,'Brenes','Sevilla')],
    [new mail('RosaGarcia@gmail.com','personaC')],
    [new telefono('Movil',682094238)],
    'No hay notas',
);

const agenda: Agenda = new Agenda([personaA, personaB, personaC])

console.log('Agenda Completa:\n' + agenda.toString)

let persona_editar = agenda.getPersonaByDNI(22222222)


if (persona_editar !== undefined) {
    persona_editar.addTelefono(new telefono('Fijo', 123456790))
    persona_editar.addMail(new mail('Otro contacto', 'nombreApellido@gmail.com'))
    persona_editar.addDireccion(new direccion('Jose', 324, 35, 'P', 12345, 'Cataluña', 'Barcelona'))

    agenda.setPersonaByDNI(87987896, persona_editar)

}

console.log('Editado\n' + agenda.toString)