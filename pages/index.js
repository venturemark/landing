import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PlasmicLoader from "@plasmicapp/loader";

export default function Home() {
  return (
    <PlasmicLoader
      component="Landing"
      componentProps={{
      title: "Landing"
  }}
/>
  )
}
