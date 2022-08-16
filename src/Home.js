import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import firstimg from "./images/firstimg.jfif";
import secondimg from "./images/secondimg.jfif";
import thirdimg from "./images/thirdimg.jfif";
import "./home.css"
import Booklist from "./Booklist.js";


const Home = () => {
  return (
    <div>

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={secondimg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Are you searching a Book?</h3>
            <h1>BIGGEST LIBRARY</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={firstimg}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Are you searching a Book?</h3>
            <h1>BIGGEST LIBRARY</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={thirdimg}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Are you searching a Book?</h3>
            <h1>
              BIGGEST LIBRARY
            </h1>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='header'>
        <form>
          <div className='box'>
            <input type="text" className='searchfield' placeholder='First Name'></input>
            <input type="text" className='searchfield' placeholder='Middle Name'></input>
            <input type="text" className='searchfield' placeholder='Last Name'></input>
            <input type="text" className='searchtext' placeholder='Author Name'></input>

          </div>
        </form>

      </div>
      <div className='para'>
        <h2><b> WELCOME TO THE LIBRARY</b></h2>

      </div>
      <div className='secondpara' >
        <h6>welcome to the most popular library</h6>
        
      </div>
      <span className='line'>
          <hr />
        </span>

      <div className="cards">
        <div className="card">
          <div className="font">
            <i className="fa-solid fa-address-book"></i></div>
          <h3> Ebook</h3>
          <h6>In electronic verson of a printed took that can be read on the computer.</h6>
          <button id="btn"> Read more</button>

        </div>
        <div className="card">
          <div className="font">
            <i className="fa-solid fa-address-book"></i></div>
          <h3>AudioBook</h3>
          <h6>In audio cassette or CD recording of a reading of a book. typically a novel .</h6>
          <button id="btn"> Read more</button>

        </div>
        <div className="card">
          <div className="font">
            <i className="fa-solid fa-address-book"></i></div>
          <h3>Magazines</h3>
          <h6>A preiodically obtaining artical and informatio</h6>
          <button id="btn"> Read more</button>

        </div>
        <div className="card">
          <div className="font">
            <i className="fa-solid fa-address-book"></i></div>
          <h3>Tean & Kids</h3>
          <h6>the years of the person age from 13 to 19 and are the kids and teens.</h6>
          <button id="btn"> Read more</button>

        </div>
      </div>
      <div className='secondsection'>
        <h1> Our Top Categories</h1>
        <div>
          <h6>Here are some of the Top categories Of the Books Available </h6>
        </div>
        <span className='line'>
          <hr />
        </span>
        <div className='fourthsection'>

          <Button variant="outline-warning">Art and photography</Button>{' '}
          <Button variant="outline-warning">Biographics & memories   </Button>{' '}
          <Button variant="outline-warning">Business</Button>{' '}
          <Button variant="outline-warning">Computer and Internet</Button>{' '}
        </div>

        {/* <div className='books'> */}
          <Booklist />
        {/* </div> */}
      </div>
    </div>
  );
}

export default Home
