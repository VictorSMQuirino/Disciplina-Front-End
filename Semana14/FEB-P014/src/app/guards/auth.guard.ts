import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) =>  {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isAutenticated) {
    return true;
  } else {
    alert('Você precisa estar logado para acessar essa rota!');
    router.navigate(['/login']);
    return false;
  }
  
};
