import { Header } from './components/Header'
import { Post, PostProps } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts: PostProps[] = [
  {
    author: {
      avatarUrl: 'https://github.com/StephaniEngell.png',
      name: 'Stephani Engel',
      role: 'FrontEnd Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'github.com/StephaniEngell' },
    ],
    publishedAt: new Date('2022-01-12 20:00:00'),
  },

  {
    author: {
      avatarUrl: 'https://github.com/RafaelYokoyama.png',
      name: 'Rafael Yokoyama',
      role: 'FrontEnd Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'github.com/StephaniEngell' },
    ],
    publishedAt: new Date('2022-11-12 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post: PostProps, index) => {
            return (
              <Post
                key={index}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
