let stateInfo = [  
    { 
       state: "California",  
       cities: ["San Diego", "San Francisco",  
           "Santa Barbara", "Monterey", "Redwood City"] 
    }, 
    { 
       state: "Maryland",  
       cities: ["Leonardtown", "St Leonard",  
           "St Mary's City", "Annapolis", "Ocean City"] 
    }, 
    { 
       state: "Texas",  
       cities: ["San Antonio", "Austin", "Pflugerville",  
           "Dallas", "Ft Worth", "Paris", "Athens"] 
    } 
]; 


console.log("I live in " + stateInfo[2].cities[4] + " " + 
          stateInfo[2].state); 