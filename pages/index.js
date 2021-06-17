import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import HomePage from '../components/home-page/home-page'
import Footer from '../components/foot-page/footer'


export default function home() {
  return (
    <Fragment>
    <HomePage/>
    <Footer/>
    </Fragment>
  )
}