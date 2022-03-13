const {LinkTable} = require('../LinkTable/LinkTable')
console.log(LinkTable)

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

// 链表
class LinkedList {

    constructor() {
        this.head = null
        this.length = 0
    }

    // 追加元素
    append(element) {
        const node = new Node(element)
        let current = null
        if (this.head === null) {
            this.head = node
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }

    // 任意位置插入元素
    insert(position, element) {
        if (position >= 0 && position <= this.length) {
            const node = new Node(element)
            let current = this.head
            let previous = null
            let index = 0
            if (position === 0) {
                this.head = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            this.length++
            return true
        }
        return false
    }

    // 移除指定位置元素
    removeAt(position) {

        // 检查越界值
        if (position > -1 && position < length) {
            let current = this.head
            let previous = null
            let index = 0
            if (position === 0) {
                this.head = current.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.length--
            return current.element
        }
        return null
    }

    // 寻找元素下标
    findIndex(element) {
        let current = this.head
        let index = -1
        while (current) {
            if (element === current.element) {
                return index + 1
            }
            index++
            current = current.next
        }
        return -1
    }

    // 删除指定文档
    remove(element) {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    isEmpty() {
        return !this.length
    }

    size() {
        return this.length
    }

    // 转为字符串
    toString() {
        let current = this.head
        let string = ''
        while (current) {
            string += ` ${current.element}`
            current = current.next
        }
        return string
    }
}


class  HashTable {
    constructor() {
        this.table = []
    }
    static loseloseHashCode(key) {
        let hash
        for(let codePoint of key) {
            hash = hash + codePoint.charCodeAt()
        }
        return hash%37
    }

    put(key,value) {
        const position = HashTable.loseloseHashCode(key)
        if(this.table[position] === undefined) {
            this.table[position] = new LinkedList()
        }
        this.table[position].append({key,value})
    }

    get(key) {
        const position = HashTable.loseloseHashCode(key)
        let linkList = this.table[position]
        if(linkList!=null && !linkList.isEmpty()) {
            console.log(1)
            let current = linkList.head
            console.log(current)
            while(current!=null) {
                if(current.element.key === key) {
                    return current.element.value
                }
                else current = current.next
            }

        }
        return 234
    }

    remove(key) {
        const position = HashTable.loseloseHashCode(key)
        if(this.table[position] === undefined) return undefined
        const getElementValue = node =>{
            if(!node &&!node.element) { return false }
            if(Object.is(node.element.key,key)) {
                this.table[position].remove(node.element)
                if(this.table[position].isEmpty) {
                    this.table[position] = undefined
                }
                return true
            } else {
                return getElementValue(node.next)
            }
        }
        return getElementValue(this.table[position].head)
    }
}

const hashtable = new HashTable()
console.log(hashtable)
hashtable.put('Tyrion','23')  //千万不要加空格 不然根本找不到  犯了脑c错误
hashtable.put('Aaron','2')
console.log(hashtable.get('Tyrion'))
