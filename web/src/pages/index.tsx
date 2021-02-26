import { useContext } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallengers from '../components/CompletedChallengers';
import CountDown from '../components/CountDown';
import ChallangeBox from '../components/ChallangeBox';

import { CountDownProvider } from '../contexts/CountDownContext';
import { ChallangeProvider } from '../contexts/ChallangesContext';

interface HomeProps {
    level: number,
    currentExp: number,
    challangesCompleted: number
}

export default function Home(props: HomeProps) {   

    return (
        <ChallangeProvider
            level={ props.level }
            currentExp={ props.currentExp }
            challangesCompleted={ props.challangesCompleted }
        >  
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
        </ChallangeProvider>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { level, currentExp, challangesCompleted } = ctx.req.cookies;
    console.log(level, currentExp, challangesCompleted);
    return {
        props: {
            level: Number(level),
            currentExp: Number(currentExp),
            challangesCompleted: Number(challangesCompleted)
        }
    }
}
