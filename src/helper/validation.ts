
import Swal from "sweetalert2";

export const validation = (url:string,name_field:string ): Boolean => {
    let flat = true;

    if (url.trim().length === 0 || name_field.trim().length === 0) {
        flat = false;
        notify('All fields are required');
    }

    if (name_field.length >= 80) {
        flat = false
        notify('Dont exceed 80 characters for the name')
    }
    return flat
};



const notify = (title:string) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title
      })
}