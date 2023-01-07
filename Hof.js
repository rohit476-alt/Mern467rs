function avgsum1 () {
        //returning another function 
        let delta = 10
        //return function (){
            //return 10*delta

        //}
return ()=> 10*delta++

}
function avgsum2  (sm) {
    //function is passed parameter to other function.3
    sm()
}
  const avg1 = avgsum1 ()
  avgsum1 () // delta = 10
  avgsum1 () // delta = 10
  avgsum1 () // delta = 10
  avgsum1 () // delta = 10

     console.log (avgsum1 ())
     const calcDelta = () => 0.5 //function is assigned to variable 
     avgsum2 (calcDelta)
     avgsum2(function(){
return 0.5
     })
     avgsum2(()=>0.5)


