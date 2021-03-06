import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    //static contextType = LanguageContext

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => language === 'english' ? 'Submit' : '提交'}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        //const text = this.context === 'english' ? 'Submit' : '提交';
        //return<button className="ui button primary">{text}</button>;
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}
//or Button.contextType = LanguageContext;

export default Button;