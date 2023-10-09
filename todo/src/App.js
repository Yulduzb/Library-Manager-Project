import React, { useState } from 'react';
import Book from './component/Book';
import Button from './component/Button';
import { ADD_TYPE } from './component/Button';
import { toast } from 'react-toastify';

const App = () => {
  const [bookName, setBookName] = useState('')

  //kitab dizisi için bir state oluşturalim
  const [bookList, setBookList] = useState([])

  //yeni kitab objesi oluşturulmasi
  const addBook = (e) => {
    e.preventDefault()

    const newBook = {
      id: new Date().getTime(),
      bookTitle: bookName,
      date: new Date().toLocaleString(),
      isRead: false
    };
    //spread operator ile yeni kitab objesini  diziye ekler
    setBookList([...bookList, newBook])

    //inputdan yaziyi temizler
    setBookName('')
    //bidirim için
    toast.success('Kitabliğa yeni kitab eklendi')

  };

  //Sil buttonuna basilacak fonksiyon
  const handleDelete = (deleteId) => {
    const filteredList = bookList.filter((book) => book.id !== deleteId)
    setBookList(filteredList);
    //bildirim için
    toast.error('Kitabliktan bir kitab silindi')
  }


  // okundu buttonu fonksiyonu
  // const handleReadChange=(book)=>{

  //   //Parametre olarak gelen kitap nesnesinin 
  //   //kopyasını oluşturur. Bu yeni nesne, isRead özelliğini tersine çevirerek, kitabın "okundu" durumunu değiştirir. 
  //   const changeReadInfo={...book,isRead:!book.isRead}
  // //bookList adlı bir dizinin kopyasını oluşturur. Bu, mevcut kitap listesinin bir yedeği olarak kullanılacaktır.
  // const cloneBookList=[...bookList]

  // const bookIndex=cloneBookList.findIndex((item)=>item.id===book.id)
  // cloneBookList.splice(bookIndex,1,changeReadInfo)
  // setBookList(cloneBookList)


  // }
  //değer Yolla okundu bilgisi değiştirme
  const handleReadChange = (book) => {
    setBookList((prevBookList) => {
      return prevBookList.map((item) =>
        item.id === book.id ? { ...item, isRead: !item.isRead } : item
      );
    });
  };

  // Düzenlenen kitab ismini kaydeden Fonksiyonu
  const handleEdit = (book, newTitle) => {
    const updateBook = { ...book, bookTitle: newTitle }
    //kitablar dizisini guncelleme
    const newList =
      bookList.map((book) => book.id !== updateBook.id ? book : updateBook)
    setBookList(newList)
    //bidirim ver
    toast.info('Kitab adı güncellendi')
  }

  return (
    <div>

      <header className='bg-dark text-light py-2 text-center fs-5'>Kitab Kurdu</header>

      <div className='container border pb-5'>
        {/*kitab ekleme Formu*/}
        <form className='d-flex gap-3 mt-4' onSubmit={addBook}>
          <input type='text'
            value={bookName}
            className='form-control shadow'
            placeholder='Kitab Ismini Giriniz'
            onChange={(e) => setBookName(e.target.value)} />
          <Button title={'Ekle'} type={ADD_TYPE} onClick={addBook} />

        </form>

        {/*kitab listeleme container*/}
        <div className='d-flex flex-column gap-5 mt-3'>

          {bookList.length === 0 ? (

            <p>Henüz herhangi bir kitab eklenmedı</p>
          ) : (
            bookList.map((book) => {
              return (<Book
                handleEdit={handleEdit}
                readChangeClick={() => handleReadChange(book)}
                deleteClick={() => handleDelete(book.id)}
                bookInfo={book} />
              );
            })
          )}
        </div>
      </div>
    </div>
  )
}
export default App