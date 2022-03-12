const Queue  = require('./Queue')
console.log(Queue)

class LoopQueue extends  Queue{
    constructor(items) {
        super(items)
    }
    getIndex(index) {
        const length = this.items.length
        return index>length? index%length : index
    }

    find(index) {
        if(!this.isEmpty) {
            if (index > this.items.length) {
                return this.items[this.getIndex(index)]
            } else {
                return this.items[this.getIndex(index)]
            }
        } else {
            return null
        }
    }
}

const loopQueue = new LoopQueue(['黑无常','白无常','钟小葵','孟婆'])
loopQueue.print()
loopQueue.dequeue()
loopQueue.print()
console.log(loopQueue.getIndex(10))
console.log(loopQueue.find(10))


