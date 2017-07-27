import electron = require("electron");
import db = require("../service/data.service");

let ipcMain = electron.ipcMain;

ipcMain.on("db-operation", (event, args) => {
    var result = executeRequest(args);
    event.sender.send(args.receiverKey, result);
});

function executeRequest(args) {
    var dataContext = new db.DataContext();
    var result = dataContext.executeQuery(args.query, args.param);
    return result;
}
