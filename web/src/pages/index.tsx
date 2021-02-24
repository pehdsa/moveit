import Head from 'next/head';

import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallengers from '../components/CompletedChallengers';
import CountDown from '../components/CountDown';

export default function Home() {
    return (
        <div className="container">
            
            <Head>
                <title>Início | Move It</title>
            </Head>
            
            <ExperienceBar />

            <section>
                <div className="left-container">
                    <Profile />
                    <CompletedChallengers />
                    <CountDown />
                </div>
                <div></div>
            </section>

        </div>
    )
}
