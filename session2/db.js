import fs from "fs";

export function getUsersData(){
    const db = fs.readFileSync("./db.json");
    const json = String(db);
    const obj = JSON.parse(json)
    return obj.users;
}

export function createNewUsers(newUsers) {
    const db = fs.readFileSync("./db.json");
    const json = String(db);
    const obj  = JSON.parse(json);
    obj.users.push(newUsers);
    fs.writeFileSync("./db.json", JSON.stringify(obj));
}