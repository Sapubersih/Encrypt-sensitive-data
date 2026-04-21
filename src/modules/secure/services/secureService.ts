import { encrypt, decrypt } from "../../../core/utils/encryption";

type Secret = {
  id: number;
  value: string;
  iv: string;
};

const store: Secret[] = [];

export class SecureService {
  saveSecret(text: string) {
    const encrypted = encrypt(text);

    const record = {
      id: Date.now(),
      value: encrypted.data,
      iv: encrypted.iv,
    };

    store.push(record);

    return { id: record.id };
  }

  getSecret(id: number) {
    const record = store.find((r) => r.id === id);

    if (!record) throw new Error("Not found");

    const decrypted = decrypt(record.value, record.iv);

    return { id, value: decrypted };
  }
}
