  let NbreA;
  let btn2  = document.getElementById('btn2');
  let decalag = document.querySelector('.decalage');
  let decalage;
  let forma = document.getElementById('myform');
  let athelet ={};
  let name = document.getElementById('name');
    let clubs = document.getElementById('clubs');
      let quote = document.getElementById('quote');
      let poids = document.getElementById('poids');
      let sexe= document.getElementById('sexe');
      let tbody = document.querySelector('tbody');
      let i = 0 ;
 
let forma1 = document.getElementById('forma1');

forma1.addEventListener('submit', (e)=>{
NbreA = forma1[0].value;


  console.log(nombredecalage(NbreA));
    e.preventDefault();

});


  forma.addEventListener('submit',(e)=>{
    console.log(forma);
    e.preventDefault();
        
        athelet = {
            'name' :forma[0].value,
            'clubs' :forma[1].value,
            'quote' : forma[2].value,
            'poids': forma[3].value,
            'sexe': forma[4].value

        }


        console.log(athelet);
             let tr =  document.createElement('tr');
             let numbertr = document.createElement('td');
         
             let textnumber = document.createTextNode(++i);
             numbertr.appendChild(textnumber);
         
            let nametr = document.createElement('td');
            let textname= document.createTextNode(athelet.name);
            nametr.appendChild(textname);
  
            let clubstr = document.createElement('td');
            let textclubs = document.createTextNode(athelet.clubs);
            clubstr.appendChild(textclubs)

            let poidstr = document.createElement('td');
            let textpoids = document.createTextNode(athelet.poids)
            poidstr.appendChild(textpoids);
  tr.appendChild(numbertr);
  tr.appendChild(nametr);
  tr.appendChild(clubstr);
  tr.appendChild(poidstr);

  tbody.appendChild(tr);
console.log(tr);
            forma.reset();      
  })
 
// funcion qui calcul le nombre de personne qui doivent decaler
function nombredecalage(NbreA){
     NbreA = parseInt(NbreA);
      
    if(NbreA == 2 || NbreA==4 ||NbreA==8||NbreA == 16||NbreA == 32){
            console.log('il nya pas de decalage');
            decalage=0;
                  decalag.innerHTML = 'rien';
          }else if( NbreA>2 && NbreA <4 ){
            decalage = (2*2)- NbreA;
            decalag.textContent = decalage;
            console.log('le nombre d\'athelet qui doivent passés au secon rang sont :'+decalage);
          }else if(NbreA>4 && NbreA < 8){
            decalage = (2*4)- NbreA;
              console.log('le nombre d\'athelet qui doivent passés au secon rang sont :'+decalage);
             decalag.innerHTML = decalage;
           
          }else if(NbreA>8 && NbreA<16){
            decalage = (2*8)- NbreA;
             decalag.innerHTML = decalage;
             console.log('le nombre d\'athelet qui doivent passés au secon rang sont :'+decalage);
          }else if(NbreA>16 && NbreA<32){
             decalage = (2*16)- NbreA;
              decalag.innerHTML = decalage;
             console.log('le nombre d\'athelet qui doivent passés au secon rang sont :'+decalage);
          }else{
            console.log('n\'est pas compris entre 2 et 32');
          }
          return decalage;
          
}
// creaion de la table de competiteur




       