import Swal from "sweetalert2";

export function optionSwal(titulo: String): Object {
    return {
        title: titulo,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
    }
}

// export const loadingSwal = {
//     title: 'CARGANDO',
//     allowEscapeKey: false,
//     allowOutsideClick: false,
//     didOpen: () => {
//         Swal.showLoading();
//     },
// }

export function loadingSwal() {
    Swal.fire({
        title: 'Espere por favor...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
}

export function loadingSwalClose() {
    Swal.close();
}