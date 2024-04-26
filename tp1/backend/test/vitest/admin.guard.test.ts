import { describe, it, test } from 'vitest';
import { UnauthorizedException } from '@nestjs/common';
import { AdminGuard } from 'src/user/admin.guard';


describe('AdminGuard', () => {
it('AdminGuard - Token valide et utilisateur admin', async (t) => {
    const jwtServiceMock = {
        verifyAsync: async () => ({ role: 'admin' })
    };

    const guard = new AdminGuard(jwtServiceMock as any);

    const contextMock = {
        switchToHttp: () => ({
            getRequest: () => ({
                headers: {
                    authorization: 'Bearer validToken'
                }
            })
        })
    };
    try{
    const canActivate = await guard.canActivate(contextMock as any);
    t.expect(canActivate).toBe(true);
    }
    catch(error){
    // Si une erreur se produit pendant l'exécution de la fonction asynchrone
      // On signale le test comme échoué
      fail('Should not throw any error');
    }
});

it('AdminGuard - Token manquant', async (t) => {
    const jwtServiceMock = {
        verifyAsync: async () => { }
    };

    const guard = new AdminGuard(jwtServiceMock as any);

    const contextMock = {
        switchToHttp: () => ({
            getRequest: () => ({
                headers: {}
            })
        })
    };

    await t.expect(() => guard.canActivate(contextMock as any)).rejects.toThrow(UnauthorizedException);
});

it('AdminGuard - Utilisateur non admin', async (t) => {
    const jwtServiceMock = {
        verifyAsync: async () => ({ role: 'user' })
    };

    const guard = new AdminGuard(jwtServiceMock as any);

    const contextMock = {
        switchToHttp: () => ({
            getRequest: () => ({
                headers: {
                    authorization: 'Bearer validToken'
                }
            })
        })
    };

    await t.expect(() => guard.canActivate(contextMock as any)).rejects.toThrow(UnauthorizedException);
});

it('AdminGuard - Token invalide', async (t) => {
    const jwtServiceMock = {
        verifyAsync: async () => {
            throw new Error();
        }
    };

    const guard = new AdminGuard(jwtServiceMock as any);

    const contextMock = { 
        switchToHttp: () => ({
            getRequest: () => ({
                headers: {
                    authorization: 'Bearer invalidToken'
                }
            })
        })
    };

    await t.expect(() => guard.canActivate(contextMock as any)).rejects.toThrow(UnauthorizedException);
});


});
