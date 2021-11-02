function compareTriplets(a, b) {
    
    let countAlice = 0;
    let countBob = 0;
    for(let i=0; i < 3; i++){
        
            if(a[i] > b[i]){
                countAlice++;
            }
            else if(a[i] < b[i]){
                countBob++;
            }
            
        
    }
    
    return [countAlice, countBob];
}