import { underscore } from 'smarta';
import { router } from 'smarta';
export class Module {

    constructor(config){
        this.components = config.components
        this.functions = config.functions
        this.bootstrapComponent = config.bootstrap
        this.routes = config.routes
    }
    start() {
        this.initComponents()
        if(this.routes) this.initRoutes()
        
    }
    initComponents(){
        this.bootstrapComponent.render()
        this.components.forEach(this.renderComponent.bind(this));

    }
    
    
    initRoutes(){
        window.addEventListener('hashchange', this.renderRoute.bind(this))
        this.renderRoute()
    }
    renderRoute(){
        let url = router.getUrl()
        let route = this.routes.find(r => r.path == url)
        if (underscore.isUndefined(route)){
            route = this.routes.find(r => r.path === '**')
        }
        document.querySelector('router-output').innerHTML = `<${route.component.selector}></${route.component.selector}>`
        this.renderComponent(route.component)
    }

    renderComponent(c){
        c.render()
    }
}