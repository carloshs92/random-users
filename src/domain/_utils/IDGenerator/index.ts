import IIDGenerator from "./IIDGenerator";
import UniqID from "./UniqID";

const IDGenerator = (): IIDGenerator => new UniqID();

export {
    IDGenerator
}