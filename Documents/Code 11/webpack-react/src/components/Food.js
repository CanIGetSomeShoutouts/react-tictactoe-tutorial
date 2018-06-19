import React, { PureComponent } from 'react'
import Layout from './Layout';

export default class Food extends PureComponent {

    render() {
        return (
            <React.Fragment>
                <Layout>
                    <p>This is the Food Component.</p>
                </Layout>
            </React.Fragment>
        )
    }
}