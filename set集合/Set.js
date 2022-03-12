class Set{
    constructor(items) {
        this.items = items || []
    }
    has(value) {
        return this.items.hasOwnProperty(value)
    }

    add(value) {
        if(!this.has(value)) {
            this.items[value] = value
            return true
        }
        return false
    }

    remove(value) {
        if(this.has(value)) {
            delete this.items[value]
            return true
        }
        return false
    }

    get getsize() {
        return Object.keys(this.items).length
    }

    get keys() {
        return Object.values(this.items)
    }
    get values() {
        // Object.keys返回由给定数组或对象内元素组成的数组
        return Object.values(this.items)
    }
    union(otherSet)
    {
         console.log(otherSet.values)
        console.log(this.values)
        const unionset = new Set()
        this.values.forEach((v, i) => unionset.add(this.values[i]))
        otherSet.values.forEach((v, i) => unionset.add(otherSet.values[i]))
        return unionset
    }
    intersection(otherSet) { /*交集*/
        console.log(otherSet.values)
        const intersectonSet = new Set()
        this.values.forEach((v,i)=>{
            if(otherSet.has(v)) {
                intersectonSet.add(v)
            }
        })
        return intersectonSet
    }

    diffSet(otherSet) {
        console.log(this.values)
        console.log(otherSet.values)
    const differSet = new Set()
    this.values.forEach((v,i)=>{
        console.log(v)
        if(!otherSet.has(v)) {
            differSet.add(this.values[i])
            console.log(v)
        }
    })
    return differSet
}

}
const set = new Set()
const set2 = new Set()

set.add(1);
set.add(2);
set.add(3);
set2.add(6);
set2.add(2);
set2.add(9);



//交集
console.log('交集----'+set2.intersection(set).values)
// intersection(otherSet) {
//     const intersectonSet = new Set()
//     this.values.forEach((v,i)=>{
//         if(!otherSet.has(v)) {
//             intersectonSet.add(v)
//         }
//     })
//     return intersectonSet
// }

//并集
console.log('并集-----'+set.union(set2).values)

// union(otherSet)
// {
//     const unionset = new Set()
//     this.values.forEach((v, i) => unionset.add(this.values[i]))
//     otherSet.values.forEach((v, i) => unionSet.add(otherSet.values[i]))
//     return unionset
// }
//差集
console.log('----差集'+set.diffSet(set2).values)
// diffSet(otherSet) {
//     const differSet = []
//     this.values.forEach((v)=>{
//         if(!otherSet.has(v)) {
//             differSet.add(v)
//         }
//     })
//     return differSet
// }
//子集