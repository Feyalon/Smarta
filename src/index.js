import { bootstrap, underscore } from './smarta';
import { mapModule } from './app/map.module';
underscore.delay(2000).then(() => {
    bootstrap(mapModule)
})
