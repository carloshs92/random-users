import { IStorage } from "../IStorage";

export default class StorageDecorator implements IStorage {
    private storage: IStorage;

    constructor(storage: IStorage) {
        this.storage = storage;
    }

    public async getItem(key: string): Promise<string | null> {
        return this.storage.getItem(key);
    }

    public async setItem(key: string, value: string): Promise<void> {
        return this.storage.setItem(key, value);
    }

    public async removeItem(key: string): Promise<void> {
        return this.storage.removeItem(key);
    }

    public async clear(): Promise<void> {
        return this.storage.clear();
    }
}