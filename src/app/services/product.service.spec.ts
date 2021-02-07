import { LoggerService } from './logger.service';
import { ProductService } from "./product.service";

describe("Product Service",()=>{
    // let ps:ProductService;
    // beforeEach(()=>{
    //     ps = new ProductService(new LoggerService());
    // });
    let ps:ProductService = new ProductService(new LoggerService());
    


    it("getProducts should be defined",()=>{
        // let ps= new ProductService(new LoggerService());*
        expect(ps.getProducts()).toBeDefined();
    });
    it("getProducts should be of length",()=>{
        // let ps= new ProductService(new LoggerService());
        expect(ps.getProducts().length).toBe(5);
    });
});