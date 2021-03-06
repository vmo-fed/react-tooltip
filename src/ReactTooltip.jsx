import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';
import jss from 'jss';
import preset from 'jss-preset-default';
import jssNested from 'jss-nested';
import jssExpand from 'jss-expand';
import jssGlobal from 'jss-global';

jss.use(jssNested(), jssExpand(), jssGlobal());

const styles = {
  '@global': {
    '[tooltip] *': {
      'pointer-events': 'none'
    }
  },
  tooltip: {
    position: 'fixed',
    background: '#000',
    padding: '10px 20px',
    color: '#fff',
    opacity: 0,
    'border-radius': '3px',
    display: 'inline-block',
    transition: 'opacity 0.3s ease',
  },
  top: {
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      'border-bottom': 'none',
      'border-top': '7px solid #000',
      'border-left': '7px solid transparent',
      'border-right': '7px solid transparent',
      bottom: '-7px',
      left: '50%',
      'margin-left': '-7px'
    }
  },
  right: {
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      'border-left': 'none',
      'border-right': '7px solid #000',
      'border-top': '7px solid transparent',
      'border-bottom': '7px solid transparent',
      left: '-7px',
      top: '50%',
      'margin-top': '-7px'
    }
  },
  bottom: {
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      'border-top': 'none',
      'border-bottom': '7px solid #000',
      'border-left': '7px solid transparent',
      'border-right': '7px solid transparent',
      top: '-7px',
      left: '50%',
      'margin-left': '-7px'
    }
  },
  left: {
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      'border-right': 'none',
      'border-left': '7px solid #000',
      'border-top': '7px solid transparent',
      'border-bottom': '7px solid transparent',
      right: '-7px',
      top: '50%',
      'margin-top': '-7px'
    }
  }
}

const {classes} = jss.createStyleSheet(styles).attach()

const propTypes = {
  customClass: PropTypes.string
};

const defaultProps = {
  customClass: ''
}

class ReactTooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scopedClass: ''
    }
  }

  handleMouseout(selector) {
    return (e) => {
      if (e.target.getAttribute('tooltip')) {
        selector.style.opacity = '0';
        selector.style.left = '-999px';
        selector.style.top = '-999px';
      }
    }
  }

  handleMouseover(selector) {
    return (e) => {
      if (e.target.getAttribute('tooltip')) {
        selector.innerText = e.target.getAttribute('tooltip');
        const place = e.target.getAttribute('tooltip-place');
        const { customClass } = this.props;
        const scopedClass = classname({
          [e.target.getAttribute('tooltip-class')]: !!e.target.getAttribute('tooltip-class')
        });
        selector.style.opacity = '0.8';
        switch (place) {
          case 'top':
            selector.className = `vmo-fed-react-tooltip ${customClass} ${classes.tooltip} ${classes.top} ${scopedClass}`;
            this.showTop(e, selector);
            break;
          case 'right':
            selector.className = `vmo-fed-react-tooltip ${customClass} ${classes.tooltip} ${classes.right} ${scopedClass}`;
            this.showRight(e, selector);
            break;
          case 'bottom':
            selector.className = `vmo-fed-react-tooltip ${customClass} ${classes.tooltip} ${classes.bottom} ${scopedClass}`;
            this.showBottom(e, selector);
            break;
          case 'left':
            selector.className = `vmo-fed-react-tooltip ${customClass} ${classes.tooltip} ${classes.left} ${scopedClass}`;
            this.showLeft(e, selector);
            break;
          default:
            break;
        }
      }
    }
  }

  showTop(e, selector) {
    selector.style.top = e.target.getBoundingClientRect().y - selector.clientHeight - 10 + 'px';
    selector.style.left = e.target.getBoundingClientRect().x + e.target.getBoundingClientRect().width/2 - selector.clientWidth/2 + 'px';
  }

  showRight(e, selector) {
    selector.style.top = e.target.getBoundingClientRect().y + e.target.getBoundingClientRect().height/2 - selector.clientHeight/2 + 'px';
    selector.style.left = e.target.getBoundingClientRect().x + e.target.getBoundingClientRect().width + 10 + 'px';
  }

  showLeft(e, selector) {
    selector.style.top = e.target.getBoundingClientRect().y + e.target.getBoundingClientRect().height/2 - selector.clientHeight/2 + 'px';
    selector.style.left = e.target.getBoundingClientRect().x - selector.clientWidth - 10 + 'px';
  }

  showBottom(e, selector) {
    selector.style.top = e.target.getBoundingClientRect().y + e.target.getBoundingClientRect().height + 10 + 'px';
    selector.style.left = e.target.getBoundingClientRect().x + e.target.getBoundingClientRect().width/2 - selector.clientWidth/2 + 'px';
  }

  componentDidMount() {
    const tooltipSelector = document.querySelector('.vmo-fed-react-tooltip');
    document.body.addEventListener('mouseover', this.handleMouseover(tooltipSelector));
    document.body.addEventListener('mouseout', this.handleMouseout(tooltipSelector));
  }

  render() {
    const { customClass } = this.props;
    return <div className={`vmo-fed-react-tooltip ${customClass} ${classes.tooltip}`}></div>;
  }
}

ReactTooltip.propTypes = propTypes;
ReactTooltip.defaultProps = defaultProps;

export default ReactTooltip;
