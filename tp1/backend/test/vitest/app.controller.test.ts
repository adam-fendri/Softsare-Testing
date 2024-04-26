import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { describe, it } from 'vitest';



describe('AppController', () => {
  let appController: AppController;
  appController=new AppController(new AppService());

 

 it('getHello', (t) => {
    t.expect(appController.getHello()).toBe('Hello World!');
  });

});