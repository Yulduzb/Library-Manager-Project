import { useState } from "react"
import Button, { READ_TYPE, UPDATE_TYPE, DELETE_TYPE, SAVE_TYPE } from "./Button"



const Book = ({ bookInfo, deleteClick, readChangeClick,handleEdit }) => {
   const [editMood, setEditMood] = useState(false);
 
   return (

      <div className="d-flex justify-content-between align-items-center border p-3">
         <div>
            <form className="d-flex gap-1" onSubmit={(e)=>{
             e.preventDefault()
             handleEdit(bookInfo,e.target[0].value)
             setEditMood(false)
            }}>
               {/* düzenleme modundasa input değilsa başlik gösterir */}
            {editMood ? (<input className='form-control shadow'   defaultValue={bookInfo.bookTitle} />) :
             (<h5 style={{ textDecoration: bookInfo.isRead ? 'line-through' : 'none' }}>{bookInfo.bookTitle}</h5>)}
             {editMood ? (<Button title={'Kaydet'} type={SAVE_TYPE}/>) : (null)}
            </form>
            <p>{bookInfo.date}</p>
         </div>
         <div className="btn-group">
            <Button title={'Sil'} type={DELETE_TYPE} onClick={deleteClick} />
            <Button title={editMood ? 'Iptal et' : 'Düzenle'} type={UPDATE_TYPE} onClick={() => setEditMood(!editMood)} />
            <Button title={bookInfo.isRead === true ? 'Okundu' : 'Okunmadı'} type={READ_TYPE} onClick={readChangeClick} />

         </div>
      </div>
   )

}
export default Book