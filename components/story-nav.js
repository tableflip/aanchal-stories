import React from 'react'
import UploadcareUrl from 'uploadcare-cdn'

export const StoryCard = ({url, name, photoSrc, intro}) => (
  <a href={url} className='dib tl no-underline bg-white center mw6 ba b--black-10 mv3 grow' title={`Listen to ${name}`}>
    <img src={UploadcareUrl(photoSrc).scaleCrop('444x246', 'center').quality('lighter')} className='w-100 db' alt={`Photo of ${name}`} />
    <h1 className='f5 dark-gray ma0 ph3 pt3 lh-title'>{name}</h1>
    <p className='ma0 pt2 pb3 ph3 f6 link lh-title black lh-copy'>{intro}</p>
  </a>
)

export const StoryNav = ({stories, relativePathToRoot, className}) => (
  <nav className={className}>
    <div className='center mw8 tc'>
      {stories.map((s) => {
        const { meta, name, intro, photoSrc } = s
        const url = `${relativePathToRoot}/${meta.name}`
        return (
          <article key={name} className='db dib-ns w-50-m w-third-l ph3 v-top'>
            <StoryCard title='Survior Story' name={name} url={url} intro={intro} photoSrc={photoSrc} />
          </article>
        )
      })}
    </div>
  </nav>
)

export const StoriesContainerHOC = (Component) => ({pages, content, start = 0, count, ...props}) => {
  const {relativePathToRoot} = content.meta
  const stories = Object.keys(pages)
    .filter(key => key.match(/story/))
    .slice(start, start + count)
    .map(key => pages[key].content)
  return <Component {...props} stories={stories} relativePathToRoot={relativePathToRoot} />
}

export default StoriesContainerHOC(StoryNav)
