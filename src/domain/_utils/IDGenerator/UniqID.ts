import IIDGenerator from "./IIDGenerator";
import uniqid from 'uniqid';

export default class UniqID implements IIDGenerator {
    public generate(): string {
        return uniqid();
    }
}