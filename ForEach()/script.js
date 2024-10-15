 //foreach() =  it will iterate through each elements of ann array and give call bacck to each element
         
                //array.Foreach(callback)    element,index,array


                let numbers  = [1,2,3];
                  numbers.forEach(double);
             
                function double(element,index,array){
                  array[index] = element * 2;

                }