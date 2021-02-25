import Head from 'next/head';

import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallengers from '../components/CompletedChallengers';
import CountDown from '../components/CountDown';
import ChallangeBox from '../components/ChallangeBox';

import { CountDownProvider } from '../contexts/CountDownContext';

export default function Home() {
    return (
        <div className="container">
            
            <Head>
                <title>Início | Move It</title>
            </Head>
            
            <ExperienceBar />

            <CountDownProvider>
                <section>
                    <div className="left-container">
                        <Profile />
                        <CompletedChallengers />
                        <CountDown />
                    </div>
                    <div>
                        <ChallangeBox />
                    </div>
                </section>
            </CountDownProvider>

        </div>
    )
}
