import { IStorage } from "./IStorage";

export default class LocalStorage implements IStorage { 
    
    public async getItem(key: string): Promise<string | null> {
        return Promise.resolve(localStorage.getItem(key));
    }

    public async setItem(key: string, value: string): Promise<void> {
        localStorage.setItem(key, value);
    }

    public async removeItem(key: string): Promise<void> {
        localStorage.removeItem(key);
    }

    public async clear(): Promise<void> {
        localStorage.clear();
    }
}