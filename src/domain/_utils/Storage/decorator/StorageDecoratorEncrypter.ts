import IEncrypter from "../../Encrypter/IEncrypter";
import { IStorage } from "../IStorage";
import StorageDecorator from "./StorageDecorator";

export default class StorageDecoratorEncrypter extends StorageDecorator {
    private _encrypter: IEncrypter;
    constructor(storage: IStorage , encrypter: IEncrypter) {
        super(storage);
        this._encrypter = encrypter;
    }
 
    public async getItem(key: string): Promise<string | null> {
        const value = await super.getItem(key);
        return value ? this._encrypter.decrypt(value) : null;
    }

    public async setItem(key: string, value: string): Promise<void> {
        await super.setItem(key, this._encrypter.encrypt(value));
    }
}