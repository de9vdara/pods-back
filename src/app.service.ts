import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    
    console.log('Hello from AppService!');
    
    return 'Hello World!';
  }
}
