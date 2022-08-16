import React from 'react'
import "./index.css"
const myBooks = [
    {
        myImage: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
        title: "I Love You to the Moon and Back",
        author: "Amelia Hepworth"
    },
    {
        myImage: "https://images-na.ssl-images-amazon.com/images/I/61Bdp7XZhDL._AC_UL604_SR604,400_.jpg",
        title: "The Silent Patient",
        author: "Alex Michaelides"
    },
    {
        myImage: "https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL604_SR604,400_.jpg",
        title: "The 48 Laws of Power",
        author: "Robert Greene"
    },
    {
        myImage: "https://images-na.ssl-images-amazon.com/images/I/81ZylhG5VnL._AC_UL604_SR604,400_.jpg",
        title: "The Hotel Nantucket",
        author: "Elin Hilderbrand"
    },
    {
        myImage: "https://images-na.ssl-images-amazon.com/images/I/81EVdWdmOKL._AC_UL604_SR604,400_.jpg",
        title: "Brown Bear, Brown Bear, What Do You See?",
        author: "Bill Martin Jr."
    }
]
const Booklist = () => {
    return (
        <div className='bookList'>
            {/* <Books myImage={firstBook.myImage} bookTitle={firstBook.title} bookAuthor={firstBook.author}  />
        <Books myImage={secondBook.myImage} bookTitle={secondBook.title} bookAuthor={secondBook.author} >
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque earum sapiente aspernatur voluptate voluptas facilis animi nesciunt fuga tenetur officia.</p>
        </Books>
        <Books myImage={thirdBook.myImage} bookTitle={thirdBook.title} bookAuthor={thirdBook.author} randomVar={randomVar}/>
        <Books myImage={fourthBook.myImage} bookTitle={fourthBook.title} bookAuthor={fourthBook.author} randomVar={randomVar}/> */}
            {myBooks.map((book) => {
                return <Books random={book} />
            })}

        </div>
    )
}
const Books = (props) => {
    console.log(props);
    const {myImage, title, author} = props.random
    // let a = 10;
    // let b = a;
    // console.log(b);
    return (
        <div className='books'>
            {/* <img src={props.random.myImage} alt="" />
            <h3>{props.random.title}</h3>
            {props.children}
            <h5>{props.random.author}</h5> */}
            <img src={myImage} alt="" />
            <h3>{title}</h3>
            {props.children}
            <h5>{author}</h5>
        </div>
    )
}

export default Booklist 