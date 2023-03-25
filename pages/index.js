import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          {`I'm a passionate FrontEnd Developer from Argentina.`} I enjoy
          working in a friendly environment with a committed team looking for
          the same common objectives.
        </p>
        <p>
          I enjoy working in a friendly environment with a committed team
          looking for the same common objectives.
        </p>
        <p>
          I truly believe that communication skills and respect are the basis of
          an unstoppable and unique team.
        </p>
        <p>
          You can contact me on{' '}
          <a
            href="https://www.linkedin.com/in/emmartinez-profile/"
            target="__blank"
            rel="no-referrer"
            aria-label="linkedin"
          >
            LinkedIn
          </a>{' '}
          or via{' '}
          <a href="mailto:emmartinez@me.com" aria-label="email">
            email
          </a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
