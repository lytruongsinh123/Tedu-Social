import { IndexRoute } from './modules/index';
import App from './app'; // Assuming App is defined in a separate file
const routes = [new IndexRoute()]
const app = new App(routes);
app.listen();