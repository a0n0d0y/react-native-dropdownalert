import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { DEFAULT_IMAGE_DIMENSIONS } from './constants';

export default class ImageView extends Component {
  static propTypes = {
    style: PropTypes.object,
    containerStyle: PropTypes.object,
    source: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imageProps: PropTypes.object,
  };
  static defaultProps = {
    style: {
      padding: 8,
      width: DEFAULT_IMAGE_DIMENSIONS,
      height: DEFAULT_IMAGE_DIMENSIONS,
      alignSelf: 'center',
    },
    source: null,
    imageProps: {},
    containerStyle: {}
  };
  render() {
    const { source, style, imageProps, containerStyle } = this.props;
    if (source != null) {
      const isRemote = typeof source === 'string';
      if (!style['width']) {
        style['width'] = DEFAULT_IMAGE_DIMENSIONS;
      }
      if (!style['height']) {
        style['height'] = DEFAULT_IMAGE_DIMENSIONS;
      }
      return (
        <View style={containerStyle}>
          <Image style={style} source={isRemote ? { uri: source } : source} {...imageProps} />
        </View>
      );
    }
    return null;
  }
}
