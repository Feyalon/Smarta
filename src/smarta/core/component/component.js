import { underscore } from 'smarta'
export class Component {
    constructor(config){
        this.template = config.template
        this.selector = config.selector
        this.styles = config.styles
        this.el = null
    }
    render(){
        initStyles(this.styles)
        this.el = document.querySelector(this.selector)
        if(!this.el) throw new Error("Component with selector " + this.selector + " wasn foun")
        this.el.innerHTML = compileTemplate(this.template, this.data)
        this._initEvents()

    }
    _initEvents(){
        if(underscore.isUndefined(this.events)) return

        let events = this.events()
        Object.keys(events).forEach(key => {
            let listener = key.split(' ')
            console.log(listener)
            this.el
                .querySelector(listener[1])
                .addEventListener(listener[0], this[events[key]].bind(this))
        })
    }
    
    
    
}
function initStyles(styles){
    if(styles === undefined){
        return
    }
    let style = document.createElement('style')
    style.innerHTML = styles
    document.head.appendChild(style)
}


function compileTemplate( template, data ){
    if(data === undefined) return template

    let regex = /\{{(.*?)}}/g

    template = template.replace(regex, (str, d) => {
        let key = d.trim()

        return data[key]
    })
    return template
}
