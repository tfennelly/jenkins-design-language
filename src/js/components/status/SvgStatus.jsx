// @flow

import React, { Component, PropTypes } from 'react';
const { string, object } = PropTypes;

const results = {
    success: {
        fill: '#8cc04f',
        stroke: '#7cb445',
    },
    failure: {
        fill: '#d54c53',
        stroke: '#cf3a41',
    }
};

export default class SvgStatus extends Component {
    render() {
        const {
            result = 'failure',
            title = 'No title',
            width = '32px',
            height = '32px',
            colors = {
                backgrounds: {
                    box: 'none',
                    inner: results[result.toLowerCase()] ? results[result.toLowerCase()].fill : 'none',
                },
                strokes: {
                    inner: results[result.toLowerCase()] ? results[result.toLowerCase()].stroke : 'none',

                },
            },
        } = this.props;

        return (<svg xmlns="http://www.w3.org/2000/svg" 
                     width={width} 
                     height={height} 
                     viewBox="0 0 100 100"
                     preserveAspectRatio="xMidYMid" 
                     className="svgResultStatus"
        >
            <title>{title}</title>
            <rect
              x="0"
              y="0"
              width="100"
              height="100"
              fill={colors.backgrounds.box}
              className="bk"
            />

            <circle
              className={result}
              cx="50"
              cy="50"
              r="40"
              stroke={colors.strokes.inner}
              fill={colors.backgrounds.inner}
              strokeWidth="0.5"
              strokeLinecap="round"
            />

        </svg>);
    }
}

SvgStatus.propTypes = {
    title: string,
    result: string,
    width: string,
    height: string,
    colors: object,
};
