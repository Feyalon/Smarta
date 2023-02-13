import { Component } from "smarta";
import template from "./app.component.html"
import style from './app.style.css'
class AppComponent extends Component{
    constructor(config) {

        super(config)

        
        this.data = {}
        
    }
    events(){
        return {
            'mouseover .hello': 'helloclick'
        }
    }
    helloclick(){
        console.log("hello")
    }
    
    
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: template,
    style: style,
    
    
}
)

