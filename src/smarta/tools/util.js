const underscore = {
    delay(ms = 1000){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, ms)
        })
    },
    isUndefined(d){
        return typeof d === 'undefined'
    },
    isNull(d){
        return d === null
    },
    iString(d){
        return typeof d === 'string'
    }
}
export { underscore }