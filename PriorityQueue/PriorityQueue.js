class PriorityQueue {
  constructor(item) {
      this.items = [] || item
  }

  enQueue(element,priority) {
      const queueelement = {element,priority}
      if(this.isEmpty()) {
          this.items.push(queueelement)
      } else {
          const preIndex = this.items.findIndex((item)=> queueelement.priority<item.priority
          )
          if(preIndex!=-1) {
              this.items.splice(preIndex,0,queueelement)
          } else {
              this.items.push(queueelement)
          }
      }
  }

  deQueue() {
      return this.items.shift()
  }

   get front() {
      return this.items[0]
  }

  clear() {
      this.items = []
  }

   get Size() {
      return this.items.length
  }


 isEmpty() {
      return !this.items.length
  }

  print() {
      console.log(this.items)
  }
  resetQueue(items) {
      this.items = items
  }
}

let queue = new PriorityQueue()
queue.enQueue('李星云',0)
queue.enQueue('姬如雪',2)
queue.enQueue('张子凡',1)
queue.enQueue('陆林轩',4)
queue.enQueue('李茂贞',3)

queue.print()
queue.enQueue('朱友文',0)
queue.print()
console.log(queue.deQueue())
queue.print()
console.log('--------------')
queue.resetQueue([1,2,3])
queue.deQueue()
queue.print()
