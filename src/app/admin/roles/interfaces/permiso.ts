export interface Permiso {
    id:           number;
    name:         string;
    display_name: string;
    descripcion:  string;
}

export interface PermisoCorto {
    id:      number;
    permiso: string;
}
