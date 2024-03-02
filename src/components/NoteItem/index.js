import {MainDiv} from './styledComponents'

const NoteItem = props => {
  const {noteList} = props
  const {Title, Note} = noteList

  return (
    <MainDiv>
      <h1>{Title}</h1>
      <p>{Note}</p>
    </MainDiv>
  )
}

export default NoteItem
