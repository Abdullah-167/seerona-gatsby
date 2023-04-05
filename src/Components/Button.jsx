import React from 'react'

const Button = ({ text, background, padding, color, borderRadius, fontWeight, border, borderWidth}) => {
    return (
        <div>
            <button className='main-btn'
                style={
                    {
                        padding: padding,
                        backgroundColor: background,
                        color: color,
                        fontWeight: fontWeight,
                        borderRadius: borderRadius,
                        borderColor: border,
                        borderWidth: borderWidth,
                        borderStyle: border ? 'solid' : 'none',
                    }
                }
            >
                {text}
            </button>
        </div>
    )
}

export default Button