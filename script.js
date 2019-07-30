
const  getNames = (id) => {
  const select = document.getElementById(id)
  const names = [];
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