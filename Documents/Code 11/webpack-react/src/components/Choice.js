import React, { PureComponent } from 'react'
import Layout from './Layout'

export default class Choice extends PureComponent {

    render() {
        return (
            <React.Fragment>
                <Layout>
                    <p>This is the Choice Component.</p>
                </Layout>
            </React.Fragment>
        )
    }
}