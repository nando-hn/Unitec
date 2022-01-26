

let estudiante1 = {
    nombre:'Elvis Tehk' ,
    nota:'6.8',
    curso: 'aprobado'
}

let estudiante2 = {
    nombre:'Lucila Tanga' ,
    nota:'4.2',
    curso:'reprobado'
}

let estudiante3 = {
    nombre:'Mario Neta' ,
    nota:'7.3',
    curso: 'aprobado'

}


let estudiante4 = {
nombre:'Elsa Pahto' ,
nota:'5.3',
curso:'reprobado'

}

let estudiantes= [
    estudiante1,
    estudiante2,
    estudiante3,
    estudiante4
]
let reprobados=
estudiantes.filter (
estudiante=> estudiante.curso
!='aprobado' 
)

console.log('Calificación de la clase:', reprobados)