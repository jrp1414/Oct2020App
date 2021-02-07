import { LoggerService } from "./logger.service";

//Arrange
//Act
//Assert
describe("LoggerService", () => {
    it("Log Method Test", () => {
        let ls = new LoggerService();
        expect(ls.log("Test Message")).toBeUndefined();
    });
});