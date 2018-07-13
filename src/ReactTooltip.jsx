import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jss from 'jss'
import preset from 'jss-preset-default'
import jssNested from 'jss-nested'
import jssExpand from 'jss-expand'

jss.use(jssNested(), jssExpand());

const styles = {
  tooltip: {
    position: 'absolute',
    background: '#000',
    padding: '10px 20px',
    color: '#fff',
    opacity: 0,
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
  }

  handleMouseenter(selector) {
    return (e) => {
      selector.style.opacity = '0';
    }
  }

  handleMouseleave(selector) {
    return (e) => {
      selector.innerText = e.target.getAttribute('tooltip');
      const place = e.target.getAttribute('tooltip-place');
      const { customClass } = this.props;
      selector.style.opacity = '0.8';
      switch (place) {
        case 'top':
          selector.className = `vmo-fed-react-tooltip ${customClass} ${classes.tooltip} ${classes.top}`;
          this.showTop(e, selector);
          break;
        case 'right':
          selector.className = `vmo-fed-react-tooltip ${customClass} ${classes.tooltip} ${classes.right}`;
          this.showRight(e, selector);
          break;
        case 'bottom':
          selector.className = `vmo-fed-react-tooltip ${customClass} ${classes.tooltip} ${classes.bottom}`;
          this.showBottom(e, selector);
          break;
        case 'left':
          selector.className = `vmo-fed-react-tooltip ${customClass} ${classes.tooltip} ${classes.left}`;
          this.showLeft(e, selector);
          break;
        default:
          break;
      }
    }
  }

  showTop(e, selector) {
    selector.style.top = e.target.offsetTop - selector.clientHeight - 10 + 'px';
    selector.style.left = e.target.offsetLeft + e.target.clientWidth/2 - selector.clientWidth/2 + 'px';
  }

  showRight(e, selector) {
    selector.style.top = e.target.offsetTop + e.target.clientHeight/2 - selector.clientHeight/2 + 'px';
    selector.style.left = e.target.offsetLeft + e.target.clientWidth + 10 + 'px';
  }

  showLeft(e, selector) {
    selector.style.top = e.target.offsetTop + e.target.clientHeight/2 - selector.clientHeight/2 + 'px';
    selector.style.left = e.target.offsetLeft - selector.clientWidth - 10 + 'px';
  }

  showBottom(e, selector) {
    selector.style.top = e.target.offsetTop + e.target.clientHeight + 10 + 'px';
    selector.style.left = e.target.offsetLeft + e.target.clientWidth/2 - selector.clientWidth/2 + 'px';
  }

  componentDidMount() {
    const tooltipSelector = document.querySelector('.vmo-fed-react-tooltip');
    document.querySelectorAll('.app').forEach((selector) => {
      selector.addEventListener('mouseenter', this.handleMouseleave(tooltipSelector));
    })

    document.querySelectorAll('.app').forEach((selector) => {
      selector.addEventListener('mouseleave', this.handleMouseenter(tooltipSelector));
    })
  }

  render() {
    const { customClass } = this.props;
    return <div className={`vmo-fed-react-tooltip ${customClass} ${classes.tooltip}`}></div>;
  }
}

ReactTooltip.propTypes = propTypes;
ReactTooltip.defaultProps = defaultProps;

export default ReactTooltip;
