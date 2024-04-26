import { describe, it } from 'vitest';
import { AppController } from './app.controller';
import { AppService } from './app.service';



describe('AppController', () => {
  let appController: AppController;
  appController=new AppController(new AppService());

 

 it('getHello', (t) => {
    t.expect(appController.getHello()).toBe('Hello World!');
  });

});