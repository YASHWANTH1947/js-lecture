const div=document.querySelector("#insert")

window.addEventListener("keydown",(e)=>{
    div.innerHTML=`
    <div color="green">
    <table>
    <tr>
    <th>key </th>
    <th>key-code</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${e.key} Futterkiste</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    
    </table></div>
    
    `
})


