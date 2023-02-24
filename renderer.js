
const func =  async()=>{
    me = document.getElementById('me') ;
    const response = await window.versions.ping();
    me.innerText = response ;
    console.log(response);
}

const information = document.getElementById('info');
information.innerText = `this app is using Chrome(v${versions.chrome()}) , Node js(v${versions.node()}) , and Electron(v${versions.electron()})` ; 
func();