export interface PanelOptions {
    panelTitle: string;
}

export interface DashboardOptions {
    panels : [PanelOptions];
}

export class DashboardController {
    private model: DashboardModel;
    private view: DashboardView;

    constructor(options: DashboardOptions) {
        this.model = new DashboardModel(options);
        this.view = new DashboardView(this.model);
    }

    public showDashboard() {
        const container = document.getElementById('container') as HTMLDivElement;
        this.view.render(container);
    }
}

export class DashboardModel {
    constructor(private options: DashboardOptions) {

    }
}

export class DashboardView {
    constructor(private model: DashboardModel) {

    }

    public render(container: HTMLDivElement) {
        const dashboardContainer = document.createElement('div');
        dashboardContainer.classList.add('dashboard-container');
        container.appendChild(dashboardContainer);
    }
}
