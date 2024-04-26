import { describe, it, test } from 'vitest';
import { AuthGuard } from './auth.guard';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthGuard', () => {
  it('should authenticate request with valid token', async (t) => {
    const jwtServiceMock = {
      verifyAsync: async () => ({ /* mock payload */ }),
    };

    const guard = new AuthGuard(jwtServiceMock as any);

    const contextMock = {
      switchToHttp: () => ({
        getRequest: () => ({
          headers: {
            authorization: 'Bearer validToken',
          },
        }),
      }),
    };

    try {
      const canActivate = await guard.canActivate(contextMock as any);
      t.expect(canActivate).toBe(true);
    } catch (error) {
      fail('Should not throw any error');
    }
  });

  it('should throw UnauthorizedException for request with missing token', async (t) => {
    const jwtServiceMock = {
      verifyAsync: async () => { },
    };

    const guard = new AuthGuard(jwtServiceMock as any);

    const contextMock = {
      switchToHttp: () => ({
        getRequest: () => ({
          headers: {},
        }),
      }),
    };

    await t.expect(() => guard.canActivate(contextMock as any)).rejects.toThrow(UnauthorizedException);
  });

  it('should throw UnauthorizedException for request with invalid token', async (t) => {
    const jwtServiceMock = {
      verifyAsync: async () => {
        throw new Error();
      },
    };

    const guard = new AuthGuard(jwtServiceMock as any);

    const contextMock = {
      switchToHttp: () => ({
        getRequest: () => ({
          headers: {
            authorization: 'Bearer invalidToken',
          },
        }),
      }),
    };

    await t.expect(() => guard.canActivate(contextMock as any)).rejects.toThrow(UnauthorizedException);
  });
});
