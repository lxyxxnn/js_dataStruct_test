class HashTable{
    constructor() {
        this.table = []
    }

    static loseloseHashCode(key) {
        let hash = 0
        for(let codePoint of key) {
            hash +=codePoint.charCodeAt()
        }
        return hash%37
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

const hash = new HashTable()
hash.put('lxy','xxnn')
hash.put('csy','sdwrq')

console.log(hash.get('csy'))
