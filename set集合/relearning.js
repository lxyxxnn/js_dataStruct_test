var o = new Object()
o.prop = 'exitis'


console.log(o.hasOwnProperty('prop'))
function change() {
    o.newprop = o.prop
    delete o.prop
}
change();
console.log(o.hasOwnProperty('prop'))

//简单认识hasOwbProperty

function  foo() {
    this.name = 'foo'
    this.sayHi = function () {
        console.log('say hi')
    }
}
foo.prototype.sayGoodBy = function () {
    console.log('Say good BY')
}
let myPro = new foo()

console.log(myPro.hasOwnProperty('toString'))
console.log(myPro.hasOwnProperty('name'))
//判断是否自身属性

//遍历自身所有属性

// js没有保护hasown属性名 可能存在一个包含此属性名的对象  需要使用haownproperty方法获取正确结果

var foo = {
    hasOwnPropery:function () {
        return false
    },
    bar:'wsnbb'
}
console.log(foo.hasOwnPropery('bar')) //始终会flase

//解决方法
console.log('---------'+Object.prototype.hasOwnProperty.call(foo, 'bar'))






