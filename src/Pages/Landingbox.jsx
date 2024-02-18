import { useEffect, useState } from "react";
import '../Sass/Landingbox.scss';
import RenderRecent from './Components/RenderRecent'
import axios from 'axios';
import testData from './Components/testData.js'

function box({context}) {

  return (
    <div className='recent'>
      <div className='headbar box'>
        <p className='headbar-text'>Recent {context}s</p>
      </div>
      <div className='large-box'>
        <div className='entry-container'>
          <RenderRecent id={context} context={context} testData={testData}/>
        </div>
      </div>
      <div className='bottombar box'>
        <span className='Viewmore'
        onClick={() => {
          alert(`View more ${context}s clicked`)
        }}
        >View more</span>
      </div>
    </div>
  )
}

export default box;

/*
<div className='headbar box'>
        <p className='headbar-text'>Recent {context}s</p>
      </div>
      <div className='info-box'>
      <div className='Name-container'>
        <ul className='number-list'>
          <li className='list-entry'>11232</li>
          <li className='list-entry'>24312</li>
          <li className='list-entry'>34322</li>
          <li className='list-entry'>43422</li>
          <li className='list-entry'>54324</li>
        </ul>
      </div>
      <div className='Name-container'>
        <ul className='name-list'>
          <li className='list-entry'>Dill</li>
          <li className='list-entry'>Joe</li>
          <li className='list-entry'>Trevor</li>
          <li className='list-entry'>Levi</li>
          <li className='list-entry'>Paul</li>
        </ul>
      </div>
      </div>
      <div className='bottombar box'>
        <span className='Viewmore'>View more</span>
      </div>
*/