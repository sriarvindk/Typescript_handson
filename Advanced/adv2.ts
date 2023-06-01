import { injectable, inject, Container } from 'inversify';
import "reflect-metadata";

interface ILogger {
  log(content: string): void;
}
@injectable()
class consoleLogger implements ILogger {
  log(content: string): void {
    console.log('Printing output from consoleLogger:', content);
  }
}
@injectable()
class fileLogger implements ILogger {
  log(content: string): void {
    console.log('Printing output from fileLogger:', content);
  }
}
const binder= new Container();
binder.bind<ILogger>('fl').to(fileLogger);
binder.bind<ILogger>('cl').to(consoleLogger);
const obj1 = binder.get<ILogger>('fl');
const obj2 = binder.get<ILogger>('cl');
obj1.log("fl");
obj2.log("cl")