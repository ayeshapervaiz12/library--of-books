import React from 'react'
import "./index.css"
const myBooks = [
    {
        myImage: "https://images-na.ssl-images-amazon.com/images/I/81XQ1+piiiL._AC_UL127_SR127,127_.jpg",
        title: "All Good People Here: A Novel",
        author: " Colleen Hoover"
    },
    {
        myImage: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL127_SR127,127_.jpg",
        title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad One",
        author: "James Clear"
    },
    {
        myImage:"https://images-na.ssl-images-amazon.com/images/I/61xkvfPVupL._AC_UL127_SR127,127_.jpg" ,
        title: "November 9: A Novel ",
         author: " Colleen Hoover",
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
    },
    {
        myImage: "https://images-na.ssl-images-amazon.com/images/I/71j0FLAauxL._AC_UL254_SR254,254_.jpg",
        title: "It Ends with Us: A Novel (1)",
        author: "Colleen Hoover."
    },

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