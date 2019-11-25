import React, { Component } from 'react';

import ReactRRuleGenerator, { translations } from '../lib';
import './index.css';

class App extends Component {
    state = {
        rrule: 'DTSTART:20190301T230000Z\nFREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1',
        isCopied: false,
        language: 'en',
    };

    getTranslation = () =>
        this.state.language === 'de' ? translations.german : undefined;

    handleChangeLanguage = event => {
        event.persist();
        const newLanguage = event.target.value;
        this.setState({ language: newLanguage });
    };

    handleChange = newRRule => {
        this.setState({ rrule: newRRule, isCopied: false });
    };

    handleCopy = () => {
        this.setState({ isCopied: true });
    };

    render() {
        const { rrule, isCopied } = this.state;

        return (
            <div>
                <div className="app-header">
                    <h1>React RRule Generator</h1>
                </div>

                <div className="app-desc">
                    Recurrence rules generator form built with React
                </div>

                <div className="app container">
                    <h5>
                        <strong>{'<RRuleGenerator />'}</strong>
                    </h5>

                    <ReactRRuleGenerator
                        onChange={this.handleChange}
                        value={this.state.rrule}
                        config={{
                            hideStart: false,
                        }}
                        translations={this.getTranslation()}
                    />
                </div>
            </div>
        );
    }
}

export default App;
