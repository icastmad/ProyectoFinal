
namespace App.AxiosProvider   {

    //export const GuardarEmpleado = () => axios.get<Entity.DBEntity>("aplicacion").then(({data})=>data );

    export const PersonaGuardar = (entity) => axios.post<DBEntity>("Persona/Edit", entity).then(({ data }) => data);

    export const PersonaEliminar = (id) => axios.delete<DBEntity>("Persona/Grid?handler=Eliminar&id=" + id).then(({ data }) => data);

    export const DireccionEliminar = (id) => axios.delete<DBEntity>("Direccion/Grid?handler=Eliminar&id=" + id).then(({ data }) => data);

    export const DireccionGuardar = (entity) => axios.post<DBEntity>("Direccion/Edit", entity).then(({ data }) => data);

    export const DireccionChangeProvincia = (entity) => axios.post<any[]>("Direccion/Edit?handler=ChangeProvincia",entity).then(({ data }) => data);

    export const DireccionChangeCanton = (entity) => axios.post<any[]>("Direccion/Edit?handler=ChangeCanton", entity).then(({ data }) => data);


}




