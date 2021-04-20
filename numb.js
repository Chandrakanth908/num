
      function EvenNums () {
        
        var start = parseInt (document.getElementById ("start"). value);
        var end = parseInt (document.getElementById ("end"). value);
        var evenNums = "Even Numbers";
        
 
        for (i = start; i <= end; i ++) {
          
          
          
          if (i% 2 == 0) {
            evenNums += i + ",";
            
        
          }
         
        } 
        document.getElementById ("result"). innerHTML = evenNums;
        document.getElementById ("result"). style.color = 'green';
        document.getElementById ("result"). style.backgroundColor = 'white';
        document.getElementById ("result"). style .boxShadow = "0 25px 50px rgba (0,0,0,0.8)";
        document.getElementById ("result"). style .padding = '2%'
        

       
        
      }
      function OddNums () {
       
        var start = parseInt (document.getElementById ("start"). value);
        var end = parseInt (document.getElementById ("end"). value);
        var oddNums = "Odd Numbers";
        
 
        for (i = start; i <= end; i ++) {
          
          
          if (i% 2!== 0) {
            oddNums += i + ",";
            
        
          }
         
        } 

        
        document.getElementById ("result"). innerHTML = oddNums;
        document.getElementById ("result"). style.color = 'Red';
        document.getElementById ("result"). style.backgroundColor = 'white';
        document.getElementById ("result"). style .boxShadow = "0 25px 50px rgba (0,0,0,0.8)";
        document.getElementById ("result"). style .padding = '2%'
       
        return false
      }
     

    