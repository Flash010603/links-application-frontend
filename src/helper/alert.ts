import Swal, { SweetAlertIcon } from "sweetalert2";


export const showAlert = (msg:string,icon:SweetAlertIcon,timer:number = 1500 ) => {
    Swal.fire({
        position: 'center',
        icon,
        title: msg,
        showConfirmButton: false,
        timer
      })
};