export const spanishResources = {
  resources: {
    title: 'Back Office',
    providers: {
      name: 'Proveedores',
      show_title: 'Detalle del proveedor',
      fields: {
        id: 'Id',
        name: 'Nombre',
        cuit: 'CUIT',
        email: 'Email',
        address: 'Domicilio',
        phone: 'Número de celular',
        responsibleType: 'Responsable Inscripto'
      }
    }
  },
  validation: {
    email: 'El email ingresado no contiene un formato correcto',
    required: 'El campo es requerido',
    numerical: 'Debe ingresar solo números'
  },
  ra: {
    action: {
      bulk_actions: '1 ítem seleccionado |||| %{smart_count} ítems seleccionados'
    },
    message: {
      bulk_delete_content:
        '¿Seguro que quiere eliminar este registro? |||| ¿Seguro que quiere eliminar estos %{smart_count} registros?',
      bulk_delete_title: 'Eliminar registro |||| Eliminar %{smart_count} registros'
    },
    notification: {
      deleted: 'Registro eliminado |||| %{smart_count} Registros eliminados.'
    }
  },
  errors: {
    2000: 'El email ingresado se encuentra utilizado por otra cuenta',
    default: 'Error al enviar la petición'
  }
};
