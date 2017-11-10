import React from 'react'
import UploadcareUrl from 'uploadcare-cdn'

export const StoryCard = ({url, name, photoSrc, intro}) => (
  <a href={url} className='dib tl no-underline bg-white center mw6 ba b--black-10 mv3' title={`Listen to ${name}`}>
    <div className='pv2 ph3'>
      <h1 className='f6 ttu tracked'>{name}</h1>
    </div>
    <img src={UploadcareUrl(photoSrc).scaleCrop('444x246', 'center').quality('lighter')} className='w-100 db' alt={`Photo of ${name}`} />
    <div className='pa3'>
      <span className='link dim lh-title black'>{intro}</span>
    </div>
  </a>
)

export const StoryNav = ({stories, relativePathToRoot, className}) => (
  <nav className={className}>
    <div className='center mw8 tc'>
      {stories.map((s) => {
        const { meta, name, intro, photoSrc } = s
        const url = `${relativePathToRoot}/${meta.name}`
        return (
          <article key={name} className='db dib-ns w-50-m w-25-l ph3 v-top'>
            <StoryCard title='Survior Story' name={name} url={url} intro={intro} photoSrc={photoSrc} />
          </article>
        )
      })}
    </div>
  </nav>
)

export const StoriesContainerHOC = (Component) => ({pages, content, ...props}) => {
  const {relativePathToRoot} = content.meta
  const stories = Object.keys(pages)
    .filter(key => key.match(/story/))
    .map(key => pages[key].content)
  return <Component {...props} stories={stories} relativePathToRoot={relativePathToRoot} />
}

export default StoriesContainerHOC(StoryNav)
