// Your code here
class Polygon{
    constructor([...args]){
      this.sideLength = [...args]
    }

    get getCount() {
        return this.sideLength.length
    }

    get perimeter(){
        let total = 0
        this.sideLength.forEach(function(side){
        total += side
        })
        return total
    }
} 

class Triangle extends Polygon{
  get isValid(){
      const firstSide = this.sideLength[0]
      const secondSide = this.sideLength[1]
      const thirdSide = this.sideLength[2]
      //console.log(firstSide)
      //console.log(secondSide)
      //console.log(thirdSide)
      if(firstSide + secondSide > thirdSide && firstSide + thirdSide > secondSide && secondSide + thirdSide > firstSide){
        return true
      }else{ 
        return false 
      }
  }
}

class Square extends Polygon{
  get isValid(){
      const result = []
      for(var i = 0; i < this.sideLength.length - 1; i++){
        if(this.sideLength[i]!==this.sideLength[i+1]){
          result.push(this.sideLength[i])
        }
      }
     if(result.length == 0){
       return true
     }else{
       return false  
     }
  }

  get area(){
      return this.sideLength[0] * this.sideLength[1]
  }
}