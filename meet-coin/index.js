import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { getCurrenciesList } from 'libs/currency-info';
import { withI18N } from 'libs/i18n';
import DocumentMeta from 'react-document-meta';
import Header from 'components/specific/header';
import Footer from 'components/specific/footer';
import LatestNews from 'components/specific/latest-news';
import Poster from './components/poster';
import WhatIs from './components/what-is';
import ItsSecure from './components/its-secure';
import MobileWallet from './components/mobile-wallet';
import HowToBuy from './components/how-buy';
import ShouldKnow from './components/should-know';
import WhyGuarda from './components/why-guarda';
// import GetApp from './components/get-app';
import Extension from './components/extension';
import OpenSource from './components/open-source';
import HowToCreate from './components/how-to-create';
import HowToSetup from './components/how-to-setup';
import DesktopWallet from './components/desktop-wallet';
import HowToBuyRenew from './components/how-to-buy(renew)';
import HowToStore from './components/how-to-store';
import HowToOpen from './components/how-to-open';
import HowToSetupRenew from './components/how-to-setup(renew)';
import NotFound from '../404';
import meta from './meta';

class HomePage extends Component {
  static propTypes = {
    i18n: PropTypes.object,
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object,
  };

  render() {
    let currency = '';
    if (this.props.location.pathname.indexOf('/litecoin-wallet') > -1) {
      currency = 'ltc';
    } else if (this.props.location.pathname.indexOf('/tezos-wallet') > -1) {
      currency = 'xtz';
    } else if (this.props.location.pathname.indexOf('/ripple-wallet') > -1) {
      currency = 'xrp';
    } else if (this.props.location.pathname.indexOf('/monero-wallet') > -1) {
      currency = 'xmr';
    } else if (this.props.location.pathname.indexOf('/ethereum-classic-wallet') > -1) {
      currency = 'etc';
    } else if (this.props.location.pathname.indexOf('/bitcoin-wallet') > -1) {
      currency = 'btc';
    } else {
      currency = this.props.match.params.currency.toLowerCase();
    }
    const supported = getCurrenciesList()
      .filter(item => item.link !== undefined)
      .map(item => item.ticker);
    if (supported.indexOf(currency) === -1) {
      return <NotFound />;
    }
    return (
      <DocumentMeta extend {...meta(currency)(this.props.i18n)}>
        <Fragment>
          <Header />
          <Poster currency={currency} />
          <WhatIs currency={currency} />
          <DesktopWallet currency={currency} />
          <HowToBuyRenew currency={currency} />
          <HowToStore currency={currency} />
          <HowToOpen currency={currency} />
          <HowToSetupRenew currency={currency} />
          <ItsSecure currency={currency} />
          <MobileWallet currency={currency} />
          <HowToBuy currency={currency} />
          <ShouldKnow currency={currency} />
          <WhyGuarda currency={currency} />
          <HowToCreate currency={currency} />
          <HowToSetup currency={currency} />
          {/* <GetApp currency={currency} /> */}
          <Extension currency={currency} />
          <LatestNews />
          <OpenSource currency={currency} />
          <Footer />
        </Fragment>
      </DocumentMeta>
    );
  }
}

export default withI18N(HomePage);
