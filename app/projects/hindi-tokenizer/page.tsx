"use client"
import React, { useEffect } from 'react';

const HuggingFaceEmbed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://gradio.s3-us-west-2.amazonaws.com/4.44.0/gradio.js';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="flex flex-col gap-4 w-full">
            <script
                type="module"
                src="https://gradio.s3-us-west-2.amazonaws.com/5.9.1/gradio.js"
            ></script>
            <gradio-app src="https://nishantb06-hindi-tokenizer-bpe-v2.hf.space"></gradio-app>

        </div>
    );
}

export default HuggingFaceEmbed;