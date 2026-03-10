export interface Usuario{
    nombre: string;
    apellido: string;
    cedula: number;
    correo: string;
    edad: number;
    sexo: number;
    usuario: string;
    clave: string;
}

export interface UsuarioInfo{
    usuario: string;
    id_equipo: number;
    id_proyecto: number;
    token: string;
}

export interface LoginCredentials{
    usuario: string;
    clave: string;
}