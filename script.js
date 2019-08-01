
const  getNames = (id) => {
  const select = document.getElementById(id)
  const url = 'https://asesores.ac-labs.com.mx/Mantenimiento/Development/AccionMejora/api_AccionMejora.php?api=empleados';  
  let param = {api:'empleados'}
  const names = [];

  fetch(url,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json' 
    }
  }).then(res => res.json())
  .catch(error=>console.log(error))
  .then(response => console.log(response));

  let i = 0;
  while(i<10){
    names.push({name: ('Employe'+i), id:i});
    i++;
  }
  i=0;
  while(i<names.length){
    let newOptGroup = document.createElement('optgroup');
    newOptGroup.label = names[i].name;
    let option = document.createElement('option');
    option.value = names[i].id;
    option.text = names[i].name;
    newOptGroup.appendChild(option);
    select.appendChild(newOptGroup);
    i++
  }
  return 'names completed';
} 

const getData = () =>{
  const SolicitudForm = document.getElementById('solicitudAccion');
  const data = new FormData(SolicitudForm);
  let response = {}
  data.forEach( (value,key)=> {
    response[key] = value;
  });
  // console.log(response);
  let url = "";
  fetch(url,{
    method: "POST",
    body: response
  })
  .then()
  .catch(error => console.log(error));

  return JSON.stringify(response);
};
let idActivity = 0
const addActivity = () => {
  let frag=document.createDocumentFragment();
  let temp= document.getElementById('tempRow');
  temp=temp.cloneNode(true);
  frag.appendChild(temp.content);
  let newDesc = frag.children[0].children[0].children[0];
  newDesc.setAttribute('id',"descripcionActividad"+idActivity)
  newDesc.setAttribute('name',"descripcionActividad"+idActivity)
  let newResp = frag.children[0].children[1].children[0];
  newResp.setAttribute('id',"nombreResponsable"+idActivity)
  newResp.setAttribute('name',"nombreResponsable"+idActivity)
  let newFechaInicio = frag.children[0].children[2].children[0];
  newFechaInicio.setAttribute('id',"inicioActividad"+idActivity)
  newFechaInicio.setAttribute('name',"inicioActividad"+idActivity)
  let newFechaCierre = frag.children[0].children[3].children[0];
  newFechaCierre.setAttribute('id',"cierreActividad"+idActivity)
  newFechaCierre.setAttribute('name',"cierreActividad"+idActivity)
  
  document.getElementById('actionsContainer').appendChild(frag);
  getNames('nombreResponsable'+idActivity);
  
  idActivity++;
  return 'added'
}
const addPerson = () => {
  let frag=document.createDocumentFragment();
  let temp= document.getElementById('tempRow');
  temp=temp.cloneNode(true);
  frag.appendChild(temp.content);
  let newResp = frag.children[0].children[0].children[0];
  newResp.setAttribute('id',"nombreResponsable"+idActivity)
  newResp.setAttribute('name',"nombreResponsable"+idActivity)

  document.getElementById('actionsContainer').appendChild(frag);
  getNames('nombreResponsable'+idActivity);
  
  idActivity++;
  return 'added'
}
const showHidePuntaje = () => {
  if(document.getElementById("confirmacionAprobacion1").checked){
    document.getElementById('puntajeMejora').style.display = 'block';
  }else{
    document.getElementById('puntajeMejora').style.display = 'none';
  }
}