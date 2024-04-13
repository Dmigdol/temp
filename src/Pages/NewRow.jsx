import { useState } from "react";
import '../Sass/NewRow.scss'
import Select from 'react-select'
import Conditionals from './Components/Conditionals.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-275899ac10/icons'



function NewRow({slide, rowObj, setSlide}) {

  console.log('font aw', byPrefixAndName.fas['door-closed'])

  const frameOptions = [
    {value: 'standard', label: 'Standard'},
    {value: 'ins', label: 'In-Swing'},
    {value: 'pivot', label: 'Pivot'}
  ]


  const standardFrame = {
    single: {
      height: `36" up`,
      strike: {
        type: {
          default: [`Lip 2 1/4" Radius`, `Lip 2 1/4" Square`, `T-Strike 1 1/8" x 2 3/4"`,
                      `ASA-Strike 1 1/4" x 4 7/8"`, `No Strike`],
          deadbolt: [`1" x 2 1/4" Radius`, `1" x 2 1/4" Square`, `1 1/8" x 2 3/4" Radius`, `1 1/8" x 2 3/4" Square`]
        },
      },
      hinge: {
        '<72' : [`(2)CalRoyal CR3D51`, `(2)Tectus 340 3D`, `(2) 4x4 butt hinge`],
        '72-84' : [`(3)CalRoyal CR3D51`, `(3)Tectus 340 3D`, `(3) 4x4 butt hinge`],
        '84-96' : [`(3)CalRoyal CR3D62`, `(3)Tectus 540 3D`, `(4) 4x4 butt hinge`],
        '>96' :  [`(4)CalRoyal CR3D62`, `(4)Tectus 540 3D`, `(4) 4x4 butt hinge`]
      }
    },
    double : 'etc...'
  }

  console.log('rowOBJ', rowObj.calcPrice())


  const [row, changeRow] = useState(rowObj);
  const [double, setDouble] = useState('single');

  // Data
  const [item, setItem] = useState({});

  const handleInput = (e) => {
    e.preventDefault()
    row[e.target.name] = e.target.value;
    console.log(row)
    // const name = e.target.name
    // const value = e.target.value
    // console.log('INPUT ',name,)
    // changeRow(values => ({...values, [name]: value  }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('prevented')
  }

  return (
    <div className={slide ? 'Entry-frame init' : 'Entry-frame'}>
      <div className='form-header'>
        <span className='form-header-text'>{`Entry #${rowObj.num}`}</span>
      </div>
      <span className='x-button'
        onClick={() => {
          setSlide(0)
        }}
      >&#x2715;</span>
      <div className='Input-container'>
        <div className='Form-container'>
          <form className='form-input'>
            <label className='item-id'>
              <span className='item-id-text'>
              {`Item ID : `}
              </span>
              <input
              className='Label-input'
              autoComplete="off"
              name='id'
              type='text'
              defaultValue={row.id || ''}
              onChange={e => {
                handleInput(e)
                e.preventDefault()
              }}
              onSubmit={e =>{
                handleSubmit(e)
                e.preventDefault()
              }}
              />
            </label>
            <div className='button-headers'>
              <span className='button-headers-single'>Single</span>
              <span className='button-headers-double'>Double</span>
            </div>
            <div className='selection-container'>
              <div className='single-door'>
                <FontAwesomeIcon className='single-door-img' icon={byPrefixAndName.fass['door-closed']} style={{color: "#224e90"}} />
              </div>
              <div className='double-door'>
                <FontAwesomeIcon className='single-door-img' icon={byPrefixAndName.fass['door-closed']}/>
              </div>
            </div>
            <label className='height-id'>
              <span className='height-id-text'>
              {`Height (in) : `}
              </span>
              <input
              className='Height-input'
              type='number'
              name='height'
              defaultValue={row.height || ''}
              onChange={handleInput}
              />
            </label>
            <label className='width-id'>
              <span className='width-id-text'>
               {`Width (in) : `}
              </span>
              <input
              className='Width-input'
              type='number'
              name='width'
              defaultValue={row.width || ''}
              onChange={handleInput}
              />
            </label>
              <label className='frame-id'>
              <span className='frame-id-text'>
              {`Frame Type: `}
              </span>
                <Select
                className='frame-dropdown'
                options={frameOptions} />
            </label>
          </form>
        </div>
      </div>
      <span className='form-submit' type='submit'>Continue</span>
      <div className='Drop-container'>
        <div className='DoorFrame selection'>
        </div>
        <div className='Checkbox'>
          {/* single or double? */}
        </div>
        <div className='Hinge selection'>
        </div>
      </div>
    </div>
  )
}

export default NewRow;