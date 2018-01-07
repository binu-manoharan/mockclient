import { sayHello } from './greet';
import { DashboardController, DashboardOptions } from './dashboard/dashboard';

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");

function makeMagicHappen() {
    const jsonOptions =`
        {
            "panels": [
                {"title" : "First panel"}
            ] 
        }`;

    const options = JSON.parse(jsonOptions);
    let controller = new DashboardController(options);
    controller.showDashboard();
}

makeMagicHappen();

