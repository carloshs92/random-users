import IEncrypter from "./IEncrypter";
import SimpleCrypto from "simple-crypto-js"

export default class SimpleCryptoEncrypter implements IEncrypter {
    private _crypto: SimpleCrypto;

    constructor(secretKey: string) {
        this._crypto = new SimpleCrypto(secretKey);
    }

    public decrypt(ciphered: string): string {
        return this._crypto.decrypt(ciphered) as string;
    }

    public encrypt(value: string): string {
        return this._crypto.encrypt(value);
    }
}