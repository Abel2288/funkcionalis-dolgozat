import './style.css'
import data from './quotes.json' 
console.log(data); 


const lista = Array.from(data.quotes)


const sortedAuthor =lista.sort((a,b) => {
  if ( a.author < b.author ){
    return -1;
  }
  if ( a.author > b.author ){
    return 1;
  }
  return 0;
});


      
console.log(sortedAuthor);