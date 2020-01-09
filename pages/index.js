import Link from 'next/link';
import Head from 'next/head';
import React, { Component } from 'react';


class Index extends Component {
    render(){
        return(
            <>
                <Head>
                    <title>Alex's website</title>
                </Head>
                <Link href="/about" >
                    <a title="About Page">About</a>
                </Link>
            </>
        )
    }
}


export default Index