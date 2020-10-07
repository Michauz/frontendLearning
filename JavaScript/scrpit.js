function A(first,second){
    this.firs = first;
    this.second = second;

}
A.prototype.func1 = function (){
    console.log("func1");
}
function B(...args){
    A.apply(this,args);
    //console.log(firs);
}
B.prototype = Object.create(A.prototype);
a = new A(1,2);
a.func1();
b = new B(1,2);
b.func1();
console.log(b.firs);