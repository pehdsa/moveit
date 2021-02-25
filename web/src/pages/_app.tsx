import '../styles/css/global.css';

import { ChallangeProvider } from '../contexts/ChallangesContext';


function MyApp({ Component, pageProps }) {
    return (
        <ChallangeProvider>            
            <Component {...pageProps} />            
        </ChallangeProvider>
    )
}

export default MyApp
