// put(key, value) {
//     const position = HashTable.loseloseHashCode(key)
//     if (this.table[position] === undefined) {
//         this.table[position] = { key, value }
//     } else {
//         let index = ++position
//         while (this.table[index] !== undefined) {
//             index++
//         }
//         this.table[index] = { key, value }
//     }
//     this.table[position].append({ key, value })
// }
//
// get(key) {
//     const position = HashTable.loseloseHashCode(key)
//     const getElementValue = index => {
//         if (this.table[index] === undefined) return undefined
//         if (Object.is(this.table[index].key, key)) {
//             return this.table[index].value
//         } else {
//             return getElementValue(index + 1)
//         }
//     }
//     return getElementValue(position)
// }
//
// remove(key) {
//     const position = HashTable.loseloseHashCode(key)
//     const removeElementValue = index => {
//         if (this.table[index] === undefined) return false
//         if (Object.is(this.table[index].key, key)) {
//             this.table[index] = undefined
//             return true
//         } else {
//             return removeElementValue(index + 1)
//         }
//     }
//     return removeElementValue(position)
// }
//
// 作者：Surmon
// 链接：https://juejin.cn/post/6844903482432962573
//     来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。