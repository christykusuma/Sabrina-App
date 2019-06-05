import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import { Card, CardSection, Input, Button, Spinner } from '../../common';

class LoginForm extends Component {
    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }

    onButtonPress = () => {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError = () => {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton = () => {
        if (this.props.loading) {
            return <Spinner size="small" />;
        } 

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        onChangeText={text => this.onEmailChange(text)}
                        value={this.props.email}
                        placeholder="user@gmail.com"
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Password"
                        onChangeText={text => this.onPasswordChange(text)}
                        value={this.props.password}
                        placeholder="password"
                        secureTextEntry
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ user }) => {
    const { email, password, error, loading } = user;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser 
})(LoginForm);
