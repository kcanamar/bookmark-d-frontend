import Form from '../components/Form'

export default function Edit({ bookmark }) {
  return(
    <div>
      <h1>Let's Edit your Bookmark</h1>
      <div>
        <h2>{bookmark.title} ({bookmark.url})</h2>
        <Form />
      </div>
    </div>
  )
}