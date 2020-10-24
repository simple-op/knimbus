
const database = require('./config/mongoose');
const Record = require('./models/record');

const axios = require('axios');

const url='https://doaj.org/query/journal%2Carticle/_search?ref=public_journal_article&callback=jQuery3400014423698614470126_1603556541393&source=%7B%22query%22%3A%7B%22query_string%22%3A%7B%22query%22%3A%22data%20mining%22%2C%22default_operator%22%3A%22AND%22%7D%7D%2C%22aggs%22%3A%7B%22journal_article%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22_type%22%2C%22size%22%3A2%2C%22order%22%3A%7B%22_term%22%3A%22desc%22%7D%7D%7D%2C%22subject%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22index.classification.exact%22%2C%22size%22%3A10%2C%22order%22%3A%7B%22_count%22%3A%22desc%22%7D%7D%7D%2C%22apc%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22index.has_apc.exact%22%2C%22size%22%3A10%2C%22order%22%3A%7B%22_count%22%3A%22desc%22%7D%7D%7D%2C%22journal_title%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22bibjson.journal.title.exact%22%2C%22size%22%3A10%2C%22order%22%3A%7B%22_count%22%3A%22desc%22%7D%7D%7D%2C%22seal%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22index.has_seal.exact%22%2C%22size%22%3A10%2C%22order%22%3A%7B%22_count%22%3A%22desc%22%7D%7D%7D%2C%22journal_licence%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22index.license.exact%22%2C%22size%22%3A10%2C%22order%22%3A%7B%22_count%22%3A%22desc%22%7D%7D%7D%2C%22publisher%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22bibjson.publisher.exact%22%2C%22size%22%3A10%2C%22order%22%3A%7B%22_count%22%3A%22desc%22%7D%7D%7D%2C%22country_publisher%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22index.country.exact%22%2C%22size%22%3A10%2C%22order%22%3A%7B%22_count%22%3A%22desc%22%7D%7D%7D%2C%22language%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22index.language.exact%22%2C%22size%22%3A10%2C%22order%22%3A%7B%22_count%22%3A%22desc%22%7D%7D%7D%2C%22peer_review%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22bibjson.editorial_review.process.exact%22%2C%22size%22%3A10%2C%22order%22%3A%7B%22_count%22%3A%22desc%22%7D%7D%7D%2C%22year_added%22%3A%7B%22date_histogram%22%3A%7B%22field%22%3A%22created_date%22%2C%22interval%22%3A%22year%22%7D%7D%2C%22year_published%22%3A%7B%22date_histogram%22%3A%7B%22field%22%3A%22index.date%22%2C%22interval%22%3A%22year%22%7D%7D%7D%7D&_=1603556541395';
const url2="https://academic.oup.com/journals/search-results?page=1&q=data+mining&SearchSourceType=1&allJournals=1"
axios.get(url)
    .then(res => {
    console.log(res);
    })
    .then(body => {
      
        const records=JSON.parse(body).hits;
        console.log(body);
        for(record of records){
       Record.create({
            title:record.title,
            year:record.year,
            author:record.name,
            url:url+record._id 



          }) 
        } 
           
        
       

    }).catch(function (error) {
        // handle error
        console.log(error);
      });



      axios.get(url2)
      .then(res => {
      console.log(res);
      })
      .then(body => {
        
          const records=JSON.parse(body).hits;
          console.log(body);
          for(record of records){
         Record.create({
              title:record.title,
              year:record.year,
              author:record.name,
              url:url+record._id 
  
  
  
            }) 
          } 
             
          
         
  
      }).catch(function (error) {
          // handle error
          console.log(error);
        })     
   
 Record.find((err,records)=>{
//   console.log(records);
 })

   






