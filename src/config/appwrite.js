import { Client, Databases, Storage } from "appwrite";
const client = new Client();
client.setProject("67bf44c70000e2a7a8bb");

export const dataBase = new Databases(client);
export const storage = new Storage(client);
