import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function Cursor() {
    return (
        <AnimatedCursor
            innerSize={12}
            outerSize={30}
            color='225, 225, 225'
            outerAlpha={0.2}
            innerScale={0.8}
            outerScale={1.4}
            hasBlendMode={true}
            innerStyle={{
                backgroundColor: 'rgba(225,225,225, 0.6)'
            }}

            // outerStyle={{
            //     backgroundColor: 'rgba(195, 190, 171, 1)',
            //     mixBlendMode: 'exclusion'
            // }}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
                {
                    target: '.custom',
                    options: {
                        innerSize: 12,
                        outerSize: 20,
                        color: '255, 255, 255',
                        outerAlpha: 0.3,
                        innerScale: 0.7,
                        outerScale: 5
                    }
                }
            ]}
        />
    );
}