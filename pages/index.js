import Link from 'next/link';
import Head from 'next/head';


function Index () {
    return(
        <>
            <Head>
                <title>Alex's WebSite</title>
            </Head>
            <div>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <h1>
                    Home
                </h1>
                <p>
                    Eliott t'es pd
                </p>
            </div>
            <style jsx global>{`
            h1 {
                font-family: 'Arial'
            }

            p{
                font-family: 'Arial'
            }

            body {
                margin: 0;
            }
            `}</style>
        </>
    );
}

export default Index