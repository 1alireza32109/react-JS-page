import './styles/index.global.css';
import './styles/grid.global.css';

import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import { createI18nProvider } from 'libs/i18n';
import { hot } from 'react-hot-loader';
import { messagesByLocale, supportedLanguages, defaultLanguage } from 'src/localization';
import PropTypes from 'prop-types';
import CookieBanner from 'components/specific/cookie-banner';

import HomePage from './pages/home';
import AboutPage from './pages/about';
import GuardaExtension from './pages/guarda-extension';
import NotFound from './pages/404';
import MeetCoin from './pages/meet-coin';
import ContactPage from './pages/contact';
import PrepaidCardsPage from './pages/prepaid-cards';
import HardwareWalletsPage from './pages/hardware-wallets';
import ExchangePage from './pages/exchange';
import ExchangeStep2Page from './pages/exchange/step-2';
import ExchangeStep3Page from './pages/exchange/step-3';
import ExchangeStep4Page from './pages/exchange/step-4';
import ExchangeStep5Page from './pages/exchange/view';
import SupportedCurrencies from './pages/supported-currencies';
import BuyPage from './pages/buy';
// import BuyAccountPage from './pages/buy/account';
// import BuyAmountPage from './pages/buy/amount';
// import BuyConfirmPage from './pages/buy/confirm';
// import BuyPaymentPage from './pages/buy/payment';
// import BuyStatusPage from './pages/buy/status';
import MediaKitPage from './pages/media-kit';
import TermsPage from './pages/terms-of-service';
import PrivacyPage from './pages/privacy-policy';
import PublicAPI from './pages/public-api';
import WebWalletLanding from './pages/web-wallet';
import DesktopLanding from './pages/desktop';
import MultiWalletLanding from './pages/multi-wallet';
import TokenGenerator from './pages/token-generator';
import PressMedia from './pages/press-media';

import meta from './meta';

const I18nProvider = createI18nProvider({ messagesByLocale });

const LocalizeComponent = ({ match, staticContext }) => {
  staticContext = staticContext || {}; // eslint-disable-line
  let locale = match.params && match.params.locale ? match.params.locale : '';
  if (!supportedLanguages.includes(locale)) {
    locale = '';
  }
  Object.assign(staticContext, { locale: locale || defaultLanguage });
  locale = locale ? '/:locale/' : '/'; // eslint-disable-line
  return (
    <I18nProvider rootPathLocale={locale}>
      <Switch>
        <Route exact path={`${locale}`} component={HomePage} />
        <Route exact path={`${locale}guarda-extension`} component={GuardaExtension} />
        <Route exact path={`${locale}supported-cryptocurrencies`} component={SupportedCurrencies} />
        <Redirect exact from={`${locale}cryptocurrency-ltc`} to={`${locale}litecoin-wallet`} component={MeetCoin} />
        <Redirect exact from={`${locale}cryptocurrency-xtz`} to={`${locale}tezos-wallet`} component={MeetCoin} />
        <Redirect exact from={`${locale}cryptocurrency-xrp`} to={`${locale}ripple-wallet`} component={MeetCoin} />
        <Redirect exact from={`${locale}cryptocurrency-xmr`} to={`${locale}monero-wallet`} component={MeetCoin} />
        <Redirect exact from={`${locale}cryptocurrency-btc`} to={`${locale}bitcoin-wallet`} component={MeetCoin} />
        <Redirect exact from={`${locale}cryptocurrency-etc`} to={`${locale}ethereum-classic-wallet`} component={MeetCoin} />
        <Route exact path={`${locale}cryptocurrency-:currency`} component={MeetCoin} />
        <Route exact path={`${locale}tezos-wallet`} component={MeetCoin} />
        <Route exact path={`${locale}litecoin-wallet`} component={MeetCoin} />
        <Route exact path={`${locale}ripple-wallet`} component={MeetCoin} />
        <Route exact path={`${locale}monero-wallet`} component={MeetCoin} />
        <Route exact path={`${locale}bitcoin-wallet`} component={MeetCoin} />
        <Route exact path={`${locale}ethereum-classic-wallet`} component={MeetCoin} />
        <Route exact path={`${locale}buy`} component={BuyPage} />
        {/* <Route exact path={`${locale}buy/account`} component={BuyAccountPage} />
        <Route exact path={`${locale}buy/amount`} component={BuyAmountPage} />
        <Route exact path={`${locale}buy/confirm`} component={BuyConfirmPage} />
        <Route exact path={`${locale}buy/payment`} component={BuyPaymentPage} />
        <Route exact path={`${locale}buy/status`} component={BuyStatusPage} /> */}
        <Route exact path={`${locale}about`} component={AboutPage} />
        <Route exact path={`${locale}desktop`} component={DesktopLanding} />
        <Route exact path={`${locale}exchange`} component={ExchangePage} />
        <Route exact path={`${locale}exchange/step-2`} component={ExchangeStep2Page} />
        <Route exact path={`${locale}exchange/step-3`} component={ExchangeStep3Page} />
        <Route exact path={`${locale}exchange/step-4/:txId`} component={ExchangeStep4Page} />
        <Route exact path={`${locale}exchange/view/:txId`} component={ExchangeStep5Page} />
        <Route exact path={`${locale}contact`} component={ContactPage} />
        <Route exact path={`${locale}prepaid-cards`} component={PrepaidCardsPage} />
        <Route exact path={`${locale}hardware-wallets`} component={HardwareWalletsPage} />
        <Route exact path={`${locale}media-kit`} component={MediaKitPage} />
        <Route exact path={`${locale}terms-of-service`} component={TermsPage} />
        <Route exact path={`${locale}privacy-policy`} component={PrivacyPage} />
        <Route exact path={`${locale}web-wallet`} component={WebWalletLanding} />
        <Route exact path={`${locale}mobile-wallet`} component={MultiWalletLanding} />
        <Route exact path={`${locale}public-api`} component={PublicAPI} />
        <Route exact path={`${locale}token-generator`} component={TokenGenerator} />
        <Route exact path={`${locale}press-media`} component={PressMedia} />
        <Route component={NotFound} />
      </Switch>
      <CookieBanner />
    </I18nProvider>
  );
};

LocalizeComponent.propTypes = {
  match: PropTypes.object,
  staticContext: PropTypes.object,
};

const Module = () => (
  <DocumentMeta {...meta}>
    <Switch>
      <Route path="/:locale?" component={LocalizeComponent} />
    </Switch>
  </DocumentMeta>
);

export default hot(module)(Module);
