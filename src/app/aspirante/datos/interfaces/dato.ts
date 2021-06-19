export interface Dato {
  id?:                   number;
  genero:               string;
  dui:                  string;
  nit:                  string;
  fecha_nacimiento:     String;
  resumen?:              string;
  disponibilidad_viaje: boolean;
  posee_vehiculo:       boolean;
  puede_cambiar_res:    boolean;
  id_usuario?:           number;
  habilidades?:          any[];
}
