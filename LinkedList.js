//It's all about manipulating pointers to objects in memory.
//10 --> 18 --> 19 --->21 --> 4

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next : null
        }

        this.tail = this.head;  //refers to the same object in memory that was initilized by the constuctor.
        this.length = 1;
    }

    append(newItem) //this is possible becos tail and next will point to the same object in memoery, we chage the valu of tal.next to a new objwct and point tail to that new onject
    {
        let newNode = new Node(newItem);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this;      
    }

    prepend(newItem){
        let newNode = new Node(newItem);
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this;
    }

    insert(index, value){

        let listResult = undefined;
        if(this._validateInsertIndex(index) === false){
            return this;
        };

        listResult = this._prePendWhenIndexIsZero(index, value);
        if(listResult !== undefined)
        {
            return listResult;
        }

         listResult =  this._insertNode(index, value);
         return listResult;

    }

    _insertNode(index, value){
        let newNode = new Node(value);
        let nextNode = undefined;
        let currentNode = this.head;
        let previousNode = undefined;
        
       
        for(let i = 0 ; i < this.length; i++){
             nextNode = currentNode;
             if(i === index){
                 newNode.next = nextNode;
                 previousNode.next = newNode;
                 this.length++;
                 break;
             }

             previousNode = currentNode;
             if(nextNode.next === null)
             {
                 //end of linked list exit loop;
                 break;
             }
             currentNode = nextNode.next;
         } 
        
        return this;
    }
     
     _validateInsertIndex(index){
         if(index < 0){
            console.log('index must be a postive integer')
            return false;
         }
         else if(index >= this.length){
            console.log('index must be between 0 and length of list: (0 - length -1)');
            return false;
         }
     }

     
     _prePendWhenIndexIsZero(index, value){
        if(index === 0)
        {
            this.prepend(value);
            console.log('prepend called');
            return this;
        }
        
     }

    printList(){
        let currentNode = this.head;
        let nextNode = undefined;

     for(let i = 0; i < this.length ; i++){
         nextNode = currentNode
         console.log('list value is ' + i + ' ' , nextNode.value);
         currentNode = nextNode.next;

     }
     console.log('Length of list is', this.length);
     console.log('-------End of list-------')
 }

    
    

}


let  myList = new LinkedList(28);
myList.append(7);
myList.append(710);
myList.append(90);
myList.prepend(45);

console.log(myList);
console.log('\n');

let list1 =myList.insert(4, 102);
//let list2 = myList.insert(1, 50);
list1.printList();
//list2.printList();








//store last vaue in hashTable