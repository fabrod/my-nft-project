import Head from 'next/head'
import NFTDropPage from './NFTDropPage'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Fabrod NFT Market Place</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <NFTDropPage />
     
    </div>
  )
}
