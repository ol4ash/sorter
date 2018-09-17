class Sorter { 
  constructor() {
    this.sorter=[];
  }

  add(element) {
     return this.sorter.push(element)
    }
  
  at(index) {
    return this.sorter[index]
  }

  get length() {
    return this.sorter.length
  }

  toArray() {
    return this.sorter
  }

  sort(indices) {

    this.indices= indices;
    this.indexed=[];

    for (var i=0; i<this.indices.length; i++) {
  this.indexed.push(this.sorter[this.indices[i]])
  }

   if (typeof(this.compareFunction)==="undefined") {this.indexed.sort(function(a,b){return a - b})}
    
    else {this.indexed.sort(this.compareFunction)}

    this.indices.sort();


    for (var i=0; i<this.indexed.length; i++){
      this.sorter[this.indices[i]]=this.indexed[i]
    }
    return this.sorter    

  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;



  }
    
}

module.exports = Sorter;