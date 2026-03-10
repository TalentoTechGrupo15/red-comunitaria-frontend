export interface Pais {
	idPais: number;
	nombre: string;
}

export interface Region {
	idRegion: number;
	nombre: string;
	pais: Pais;
}

export interface Etapa {
	idEtapa: number;
	nombre: string;
}

export interface TipoEmprendimiento {
	idTipoEmprendimiento: number;
	nombre: string;
	descripcion: string;
}

export interface EquipoEmprendimiento {
	idEquipo: number;
	nombre: string;
	descripcion: string;
}

export interface Emprendimiento {
	idEmprendimiento: number;
	nombre: string;
	descripcion: string;
	year: string;
	inversion: number;
	etapa: Etapa;
	region: Region;
	tipoEmprendimiento: TipoEmprendimiento;
	equipo: EquipoEmprendimiento;
}
