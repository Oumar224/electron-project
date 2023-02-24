const {app , BrowserWindow , ipcMain } = require('electron')
const path = require('path')

const creatWindow = () => {
    const win = new BrowserWindow({
        windth:800,
        height:600 , 
        webPreferences:{
            preload:path.join(__dirname , 'preload.js') ,
        }
    });
    ipcMain.handle('ping' , ()=>'hello brother i am oumar') ;
    win.loadFile('index.html');
}

app.whenReady().then(()=>{
    creatWindow()

    app.on('activate').then(()=>{
        if(BrowserWindow.getAllWindows().length===0) creatWindow() ;
    })
})

app.on('window-aall-closed' , 
()=>{
    if(process.plateform!=='darwin'){
        app.quit()
    }
})