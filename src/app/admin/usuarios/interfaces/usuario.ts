export interface Usuario {
  id?:                number;
  nombres:           string;
  apellidos:         string;
  correo:            string;
  //roles?:
  // email_verified_at: null;
  es_admin:          number;
  // activo:            number;
  // bloqueado:         number;
  // created_at:        Date;
  // updated_at:        Date;
  id_tipo_usuario?:   number;
}
