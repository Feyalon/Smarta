import { Module } from "smarta";
import { appComponent } from './app.component';
import { appRouter } from "./map.router";
class MapModule extends Module{
    constructor(config){
        super(config)
    }
}
export const mapModule = new MapModule({
    components: [
        
        
    ],
    
    bootstrap: appComponent,
    routes: appRouter

})