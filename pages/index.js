import Link from 'next/link';


function Index () {
    return(
        <>
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