const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pass_id = urlParams.get('pass_id');
console.log(pass_id);


var spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1z_VZP9nDsmzxUeXWZAY63vJ6gFu94DKASRTvKpxXVEg/gviz/tq?tq=select%20*&gid=0';
var api_key='AIzaSyD9PbYTfa6_6OmeJEJS-wQWNg5i0rdC2BA';

start(api_key);
// fetch(spreadsheet_url, {
//     // referrerPolicy : "no-referrer", 
//         mode: "no-cors"}
// )
//   .then(resp => resp.json())
//   .then(json => {
//     console.log(json);
//     // const url = window.URL.createObjectURL(blob);P
//     // const a = document.createElement('a');
//     // a.style.display = 'none';
//     // a.href = url;
//     // // the filename you want
//     // a.download = 'todo-1.json';
//     // document.body.appendChild(a);
//     // a.click();
//     // window.URL.revokeObjectURL(url);
//     // alert('your file has downloaded!'); // or you know, something with better UX...
//   })
//   .catch(() => alert('oh no!'));

// fetch(spreadsheet_url, {referrerPolicy : "no-referrer", mode: "no-cors"})
//     .then(resp => {
//         console.log(resp.body);
//     });

function start(api_key) {
  gapi.client.init({
    'apiKey': api_key,
    'discoveryDocs': ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  })
}