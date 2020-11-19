import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

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
          <h3>I want a : </h3>
          <input
            type='checkbox'
            id='gender_male'
            name='gender_male'
            value={gender_male}
            onChange={props.handleChangeChkb}
          />
          <label htmlFor='gender_male'>Male</label>
          <input
            type='checkbox'
            id='gender_female'
            name='gender_female'
            value={gender_female}
            onChange={props.handleChangeChkb}
          />
          <label htmlFor='gender_female'>Female</label>
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
          <h3> City </h3>

          <input
            type='text'
            id='ville'
            name='city'
            value={city}
            onChange={props.handleChange}
          />
        </fieldset>

        <fieldset className='cleanliness'>
          <h3>Degree of cleanliness :</h3>
          <input
            type='checkbox'
            id='clean1'
            name='noShower'
            value={noShower}
            onChange={props.handleChangeChkb}
          />
          <label htmlFor='clean1'>Never heard about shower</label>
          <input
            type='checkbox'
            id='clean2'
            name='showerMonth'
            value={showerMonth}
            onChange={props.handleChangeChkb}
          />
          <label htmlFor='clean2'>Only 1 per month</label>
          <input
            type='checkbox'
            id='clean3'
            name='showerWeek'
            value={showerWeek}
            onChange={props.handleChangeChkb}
          />
          <label htmlFor='clean3'>More than 1 per week</label>
        </fieldset>
        <fieldset id='relationship' className='relationship'>
          <h3>I'm loooking for :</h3>
          <input
            type='radio'
            id='relation1'
            value='shortNight'
            name='relation'
            onChange={props.handleChange}
          />
          <label htmlFor='relation1'>A dirty night</label>
          <input
            type='radio'
            id='relation2'
            value='longRelation'
            name='relation'
            onChange={props.handleChange}
          />
          <label htmlFor='relation2'>A dirty life companion</label>
        </fieldset>
        <button type='submit' className='btn-form'>
          Trouver votre gueux
        </button>
      </form>
    </section>
  );
}
