import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CenterTitle from 'components/specific/center-title';
import styles from './styles.css';
import texts from './texts';

export default class HowtoCreate extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currency === 'xrp' || this.props.currency === 'xmr' || this.props.currency === 'etc') {
      return null;
    }
    const { currency } = this.props;
    const title = texts[currency]
      ? texts[currency].title
      : 'How to Create a Guarda Web Wallet';
    const video = texts[currency]
      ? texts[currency].video
      : 'https://www.youtube.com/embed/-f2-NJi1Pgs';
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <CenterTitle title={title} />
          <div className="row">
            <div className="col-xs-8 col-xs-offset-2 col-xs-offset-2">
              <iframe
                width="100%"
                height="380"
                src={video}
                frameBorder="0"
                title={title}
                allow="encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
