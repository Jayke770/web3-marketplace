import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en' data-theme="teamdao">
            <Head />
            <body className='overflow-x-hidden'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}