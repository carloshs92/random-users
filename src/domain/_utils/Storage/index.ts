
import { simpleCryptoEncrypter } from "../Encrypter";
import StorageDecoratorEncrypter from "./decorator/StorageDecoratorEncrypter";
import { IStorage } from "./IStorage";
import LocalStorage from "./LocalStorage";

const localStorage = (): IStorage => new LocalStorage();
const localStorageEncrypter = (secretKey: string): IStorage =>
    new StorageDecoratorEncrypter(new LocalStorage(), simpleCryptoEncrypter(secretKey));

export {
    localStorage,
    localStorageEncrypter    
}