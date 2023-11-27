import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { LoginServiceService } from "../services/login-service.service";

export const loginGuard = ()=> {
    const router = inject(Router);
    const _services = inject(LoginServiceService)
    
    _services.getStorage('sesionLogin').then((res)=>{
        if(res =='true'){
            return true
        }
        else{
            router.navigate(['/login'])
            return false;
        }
    })

}