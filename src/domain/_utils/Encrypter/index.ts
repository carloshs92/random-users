import IEncrypter from "./IEncrypter";
import SimpleCryptoEncrypter from "./SimpleCryptoEncrypter";

const simpleCryptoEncrypter = (secretKey: string): IEncrypter => 
        new SimpleCryptoEncrypter(secretKey);

export {
    simpleCryptoEncrypter
}