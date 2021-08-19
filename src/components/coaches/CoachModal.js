import React from 'react';
import './CoachModal.css';

const CoachModal = ({ coach }) => {
  return (
    <div className='modal-bg'>
      <div className='modal-container'>
        <img src={coach.image} alt='' className='coach-img modal-img' />
        <div className='coach-info'>
          <h1>{coach.name}</h1>
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
      </div>
    </div>
  );
};

export default CoachModal;
