/* eslint max-len: [1, 1000] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import I18nText from 'libs/i18n/text';
import CenterTitle from 'components/specific/center-title';
// import IconCurrency from 'components/global/icon-currency';
// import StoreButtons from '../../../desktop/components/store-buttons';

// import { NavLink } from 'components/global/link';
// import texts from './texts';
import styles from './styles.css';
import XrpImage from './images/xrp.png';

export default class HowToStore extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currency !== 'xrp') {
      return null;
    }
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <CenterTitle
              title="How to store Ripple XRP?"
              className={styles.title}
            />
            <img
              className={styles.xrpImage}
              src={XrpImage}
              alt="Best Ripple wallet"
            />
            <div className="col-xs-12">
              <div className={styles.wrapperText}>
                <p>
                  Most wallets offer their support for Ripple XRP
                  cryptocurrency. Due to this, the users need to be cautious
                  when choosing the right crypto wallet for their coins. First
                  of all, there are some essential rules for finding the{' '}
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    best XRP wallet
                  </a>{' '}
                  :<br />
                  <br />
                  1. When choosing a wallet, it is better to turn to
                  non-custodial services. Free of custody wallets are a way for
                  users to fully control their funds and personal information.
                  You can read more on the benefits of non-custodial crypto
                  wallets in our blog{' '}
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    post
                  </a>
                  . Security is what we all seek, after all.
                  <br /> 3. Pay attention to the functionality of the wallet.
                  The best Ripple XRP wallets are the ones offering multiple
                  features – fast exchanges, cryptocurrency purchases and more.
                  <br />
                  3. Check the wallet’s social networks and general activity.
                  When it comes to communication, it is better to find a wallet
                  that is ready to answer the user’s questions. When it comes to
                  Guarda, you can stay tuned for the updates and the essential
                  information through:
                  <br />{' '}
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    Twitter
                  </a>
                  <br />
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    Reddit
                  </a>
                  <br />
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    Facebook
                  </a>
                  <br />
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    Telegram
                  </a>
                  <br />
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    Blog
                  </a>
                  <br />
                  4. Find out more on the wallet’s support. If you are new to
                  the cryptocurrency world, you may stumble on lots of questions
                  in need of an answer. The more efficient the support line is,
                  the better. Guarda’s support line is one of the fastest
                  currently offered – our specialists answer with the maximum
                  response time of 5 minutes. No more waiting! You can also
                  check all the information on the wallets in our Support’s{' '}
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    Freshdesk.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
