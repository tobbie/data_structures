class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
    set(key, value){
      let address = this._hash(key);
     
      let bucket = [key, value];
  
      if(!this.data[address]){
        this.data[address] = [];
      }
        this.data[address].push([key, value]);
        //console.log(this.data);
        return this.data;
      
    }
   //  [3]           [7]         [8]
   //[['ab', 899], [['dc', 90], ['an', 87]], ['ee', 400]]
   //[['ab',899]]
    
    get(key){
      let address = this._hash(key);
      
     
      const currentBucket = this.data[address];
      
      //console.log(currentBucket);
      if(currentBucket){
        for(let i = 0; i < currentBucket.length; i++)
        {
           if(currentBucket[i][0] === key){
             return currentBucket[i][1];
           }
        }
      }
      return undefined;
    }
  
  
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  var res1 = myHashTable.get('grapes')
  console.log("no of grapes is", res1)
  
  myHashTable.set('apples', 9)
  
  var res2 = myHashTable.get('apples')
  console.log("no of apples is", res2)