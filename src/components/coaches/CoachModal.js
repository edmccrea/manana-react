import React, { Fragment } from 'react';
import './CoachModal.scss';

const CoachModal = ({ coach, modalHandler }) => {
  return (
    <Fragment>
      <div className='modal-bg' onClick={modalHandler}></div>
      <div className='modal-container'>
        <p className='close-btn' onClick={modalHandler}>
          x
        </p>
        <div className='coach-info'>
          <h2 className='coach-name'>{coach.name}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis dignissimos alias placeat cupiditate, quisquam rem,
            earum eius non sapiente, dolores cumque vero deleniti. Magni soluta
            aut excepturi quaerat culpa nostrum vitae, maxime eveniet laboriosam
            iure illum nihil aliquid quo sapiente facilis blanditiis corporis
            qui? Praesentium quos consequatur suscipit natus magni ducimus
            placeat. Sequi mollitia illum minima? Suscipit veniam laborum
            delectus alias fuga. Obcaecati quos ut, enim cupiditate iste omnis
            aut?
          </p>
        </div>
        <div className='modal-img-container'>
          <img src={coach.image} alt='' className='modal-img' />
        </div>
      </div>
    </Fragment>
  );
};

export default CoachModal;
