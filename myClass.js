class MyClass{
    constructor () {
        console.log("initiate");
    }

    add(...numbers){
        var result ;
        result = numbers.reduce((pv,cv) => pv + cv,0);
        return result;
    }/*
    callAnotherFn(arg1,arg2){
        var result = this.add(arg1,arg2);
        return result;
    }*/
}
module.exports =MyClass;