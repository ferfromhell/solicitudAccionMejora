function getData(){
  const SolicitudForm = document.getElementById('solicitudAccion');
  const data = new FormData(SolicitudForm);
  let response = {}
  data.forEach( (value,key)=> {
    response[key] = value;
  });
  // console.log(response);
  return JSON.stringify(response);
}