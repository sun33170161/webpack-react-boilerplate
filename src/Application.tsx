import * as React from 'react';

export interface ApplicationProps {}

export interface ApplicationState {}

export class Application extends React.Component<ApplicationProps, ApplicationState> {
    constructor(props: ApplicationProps) {
        super(props);
    }

    public render() {
        return <div>Application</div>;
    }
}
