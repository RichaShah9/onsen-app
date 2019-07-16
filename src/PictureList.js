import React, { Component } from 'react';
import { Page, Button, Toolbar, Icon, Input, ToolbarButton, Row, BottomToolbar } from 'react-onsenui';
import ons from 'onsenui';
import logo from './logo.svg';

export default class PictureList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    signIn() {
        ons.notification.alert({
            message: `You entered '${this.state.email}' & '${this.state.password}' `
        });
    }

    forgotPassword() {
        ons.notification.prompt({
            message: 'What is your email?',
            callback(email) {
                ons.notification.alert({
                    message: 'The new password will be send to ' + email
                });
            }
        });
    }

    emailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    passwordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        let toolbarButton;
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Page className="login"
                        renderToolbar={() =>
                            <Toolbar>
                                <div className="center" style={{ color: 'teal', fontWeight: 'bold' }}>LOGIN</div>
                                <div>
                                    {toolbarButton}
                                </div>
                            </Toolbar>
                        }>
                        <div>
                            <img src={logo} style={{ height: 100, width: 100 }} />
                        </div>
                        <div>
                            <Input style={{ marginTop: 10 }}
                                value={this.state.email}
                                onChange={(e) => this.emailChange(e)}
                                placeholder="Email"
                                type="text"
                                modifier="material" /><br />

                            <Input
                                style={{ marginTop: 10 }}
                                value={this.state.password}
                                onChange={(e) => this.passwordChange(e)}
                                placeholder="Password"
                                type="password"
                                modifier="material" /><br />

                            <Button style={{ marginTop: 20, backgroundColor: 'teal' }}
                                onClick={() => this.signIn()}
                                modifier="material">Sign In</Button><br />

                            <Button style={{ marginTop: 10, color: 'teal' }}
                                onClick={() => this.forgotPassword()}
                                modifier="quiet">FORGOT PASSWORD?</Button><br />
                        </div>
                        <BottomToolbar
                            modifier="aligned"
                            style={{ justifyContent: 'center', color: 'teal', fontWeight: 'bold' }}> Developed by Axelor </BottomToolbar>
                    </Page>
                </div>
            </div>
        )
    }
}