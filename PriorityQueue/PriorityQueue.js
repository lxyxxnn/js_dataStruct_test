class PriorityQueue{
    constructor() {
        this.items = []
    }
    enQueue(element,priority) {
        const queueElement= {element,priority};
        if(this.isEmpty) {
            this.items.push(queueElement)
        } else {
            const prePriority = this.items.findIndex((item)=>
                 queueElement.priority<item.priority
            )
            if(prePriority > -1) {
                this.items.splice(prePriority,0,queueElement)
            } else {
                this.items.push(queueElement)
            }
        }
    }

    isEmpty() {
            return !this.items.length

    }

    deQueue() {
        return this.items.shift()
    }
    front() {
        return this.items[0]
    }

    getSize() {
        return this.items.length
    }
    print() {
        console.log(this.items)
    }
}
const priorityQueue = new PriorityQueue()
priorityQueue.enQueue('John', 2)
priorityQueue.enQueue('Jack', 1)
priorityQueue.enQueue('Camila', 1)
priorityQueue.enQueue('Surmon', 3)
priorityQueue.enQueue('skyRover', 2)
priorityQueue.enQueue('司马萌', 1)
priorityQueue.print()

priorityQueue.enQueue('axb',0)
priorityQueue.print()

console.log(priorityQueue.isEmpty(), priorityQueue.getSize()) // false 6
