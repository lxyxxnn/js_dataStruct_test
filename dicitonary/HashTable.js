class HashTable{
    constructor() {
        this.table = []
    }

    static loseloseHashCode(key) {  //散列函数1
        let hash = 0
        for(let codePoint of key) {
            hash +=codePoint.charCodeAt()
        }
        return hash%37
    }

    static djb2hashCode(key) {  //散列函数2
        let hash = 5381
        for(let codePoint of key) {
            hash = hash*33 + codePoint.charCodeAt()
        }
         return hash % 1013
    }

    put (key,value) {
        const position = HashTable.loseloseHashCode(key)
        console.log(position+'--->'+key)
        this.table[position] = value
    }

    get(key) {
        return this.table[HashTable.loseloseHashCode(key)]
    }
    remove(key) {
        this.table[HashTable.loseloseHashCode(key)] = undefined
    }
//
}
//
// const hash = new HashTable()
// hash.put('lxy','xxnn')
// hash.put('csy','sdwrq')
// hash.put('csy','dsm')
// hash.put('Tyrion',1)
// hash.put('Aaron','2')
// console.log(hash)
// console.log(hash.get('Tyrion')) //此时应该输出1 但后面相同的keyput覆盖了前者
