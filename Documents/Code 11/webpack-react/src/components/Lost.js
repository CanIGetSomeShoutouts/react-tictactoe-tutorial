import React, { PureComponent } from 'react'
import Layout from './Layout';

export default class Lost extends PureComponent {

    render() {
        return (
            <React.Fragment>
                <Layout>
                    <p>Can't find the page you are looking for.</p>
                </Layout>
            </React.Fragment>
        )
    }
}