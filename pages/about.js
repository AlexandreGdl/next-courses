import Link from 'next/link';


function About () {
    return(
        <>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <h1>
                    About
                </h1>
            </div>
            <style jsx global>{`
            h1 {
                font-family: 'Arial'
            }

            body {
                margin: 0;
            }
            `}</style>
        </>
    );
}

export default About