import {useState} from 'react'

import {v4 as uuidV4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainDiv,
  NoteDiv,
  InputEle,
  ButtonEle,
  ButtonDiv,
  MainDiv1,
  ImgEle,
  NoteListDiv,
  MainHeading,
  TextAreaEle,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [noteList, setNoteList] = useState([])

  const onChangeTile = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onClickAdd = event => {
    event.preventDefault()
    const newNote = {
      id: uuidV4(),
      Title: title,
      Note: note,
    }

    setNoteList(prevNoteList => [...prevNoteList, newNote])
    setNote('')
    setTitle('')
  }

  return (
    <MainDiv>
      <MainHeading>Notes</MainHeading>
      <form onSubmit={onClickAdd}>
        <NoteDiv>
          <InputEle placeholder="Title" value={title} onChange={onChangeTile} />
          <TextAreaEle
            placeholder="Take a Note..."
            value={note}
            onChange={onChangeNote}
          ></TextAreaEle>
          <ButtonDiv>
            <ButtonEle type="submit"> ADD </ButtonEle>
          </ButtonDiv>
        </NoteDiv>
      </form>
      {noteList.length === 0 ? (
        <MainDiv1>
          <ImgEle
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <h4>No notes Yet</h4>
          <p>Notes you add will appear here</p>
        </MainDiv1>
      ) : (
        <NoteListDiv>
          {noteList.map(each => (
            <NoteItem noteList={each} key={each.id} />
          ))}
        </NoteListDiv>
      )}
    </MainDiv>
  )
}

export default Notes
