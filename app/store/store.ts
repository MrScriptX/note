import { File, Folder, knownFolders } from "@nativescript/core";
import task from "~/types/task";

class Store {
    public _tasks: task[] = [];

    async open(): Promise<void> {
        this.sync_task();
    }

    async sync_task(): Promise<task[] | null> {
        const documents: Folder = <Folder>knownFolders.documents();
        const folder: Folder = <Folder>documents.getFolder("data");
        const file: File = <File>folder.getFile("tasks.json");

        try 
        {
            const data = await file.readText("UTF-8");
            this._tasks = JSON.parse(data);

            return this._tasks;
        }
        catch(err: any)
        {
            console.log(err);
            return null;
        }
    }

    async save(): Promise<void> {
        const documents: Folder = <Folder>knownFolders.documents();
        const folder: Folder = <Folder>documents.getFolder("data");
        const file: File = <File>folder.getFile("tasks.json");

        try 
        {
            await file.writeText(JSON.stringify(this._tasks), "UTF-8");
        }
        catch(err: any)
        {
            console.log(err);
        }
    }

    async clear(): Promise<void> {
        this._tasks = [];
        this.save();
    }
}

// singleton instance
let store = new Store();

export default store;
