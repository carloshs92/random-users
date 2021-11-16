export default interface IEncrypter {
    decrypt(value: string): string;
    encrypt(ciphered: string): string;
}
