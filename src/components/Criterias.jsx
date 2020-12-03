import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import Border from '../assets/border.png';

export default function Criterias(props) {
  const {
    gender_male,
    gender_female,
    ageValue,
    city,
    noShower,
    showerMonth,
    showerWeek,
  } = props.profile;
  return (
    <section className='criterias'>
      <form onSubmit={props.handleSubmit}>
        <fieldset className='gender'>
          <h3 className='find-title'>I want to find a : </h3>
          <img className='border-medieval' src={Border} alt='' />
          <br />
          <br />
          <div className="checkboxGender">
          <div className="inputs"><input
            type='checkbox'
            id='gender_male'
            name='gender_male'
            value={gender_male}
            onChange={props.handleChangeChkb}
          />
          <label htmlFor='gender_male'>Male</label>
          </div>
          <div className="inputs">
          <input
            type='checkbox'
            id='gender_female'
            name='gender_female'
            value={gender_female}
            onChange={props.handleChangeChkb}
          />
          <label htmlFor='gender_female'>Female</label>
         
          </div>
          </div>
        </fieldset>
        <fieldset className='age'>
          <h3>Age : </h3>
          <InputRange
            id='ageValue'
            className='inputRange'
            draggableTrack
            maxValue={55}
            minValue={15}
            formatLabel={(value) => `${value} years`}
            value={ageValue}
            onChange={(value) => props.handleAgeValue(value)}
          />
        </fieldset>
        <fieldset className='city'>
          <h3>City</h3>

          <textarea
            id='ville'
            name='city'
            column='3'
            value={city}
            placeholder='Verdun'
            onChange={props.handleChange}
          />
        </fieldset>

        <fieldset className='cleanliness align'>
          <h3>Cleanliness :</h3>
          <div className="inputs">
          <input
            type='checkbox'
            id='clean1'
            name='noShower'
            value={noShower}
            onChange={props.handleChangeChkb}
          />
          <label htmlFor='clean1'>Never heard about shower</label>
          </div>
          <div className="inputs">
          <input
            type='checkbox'
            id='clean2'
            name='showerMonth'
            value={showerMonth}
            onChange={props.handleChangeChkb}
          />
          <label htmlFor='clean2'>Only 1 per month</label>
          </div>
          <div className="inputs">
          <input
            type='checkbox'
            id='clean3'
            name='showerWeek'
            value={showerWeek}
            onChange={props.handleChangeChkb}
          />
          <label htmlFor='clean3'>More than 1 per week</label>
          </div>
        </fieldset>
        <fieldset  className='relationship inputs align'>
          <h3>I'm loooking for :</h3>
          <div className="inputs">
          <input
            type='radio'
            id='relation1'
            value='shortNight'
            name='relation'
            onChange={props.handleChange}
          />
          <label htmlFor='relation1'>A dirty night</label>
          </div>
          <div className="inputs">
          <input
            type='radio'
            id='relation2'
            value='longRelation'
            name='relation'
            onChange={props.handleChange}
          />
          <label htmlFor='relation2'>A dirty life companion</label>
          </div>
        </fieldset>
        <button type='submit' className='btn-form'>
          Find your perfect match
        </button>
      </form>
    </section>
  );
}
