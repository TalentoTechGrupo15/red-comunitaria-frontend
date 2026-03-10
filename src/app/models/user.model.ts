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
    idEquipo: number | null;
    idEmprendimiento: number | null;
    token: string;
}

export interface LoginCredentials{
    usuario: string;
    clave: string;
}