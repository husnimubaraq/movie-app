import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TIcon } from 'types';
import { colors } from 'themes'

export const FavoriteOutlineIcon = (props: TIcon) => {
    const { color = colors.black, size = 20 } = props

    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={color}
            fill="none"
            {...props}>
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
        </Svg>
    )
};