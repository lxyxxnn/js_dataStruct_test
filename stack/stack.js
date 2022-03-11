enqueue(element, priority){
    const queueElement = { element, priority }
    if (this.isEmpty) {
        this.items.push(queueElement)
    } else {
        const preIndex = this.items.findIndex((item) => queueElement.priority < item.priority)
        if (preIndex > -1) {
            this.items.splice(preIndex, 0, queueElement)
        } else {
            this.items.push(queueElement)
        }
    }
}

作者：Surmon
链接：https://juejin.cn/post/6844903482432962573
    来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。