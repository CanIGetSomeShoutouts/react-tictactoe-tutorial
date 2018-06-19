import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout';

export default class Home extends PureComponent {

    render() {
        return (
            <React.Fragment>
                <Layout>
                    <p>This is the Home Component.</p>
                    <p>
                        <Link to="/food">
                            Welcome to the Food Component
                        </Link>
                    </p>
                </Layout>
            </React.Fragment>
        )
    }
}