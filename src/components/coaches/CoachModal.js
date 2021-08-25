import React from 'react';
import './CoachModal.scss';

const CoachModal = ({ coach, setCoachDisplay }) => {
  // document.addEventListener(
  //   'click',
  //   function (event) {
  //     if (
  //       (event.target.matches('.btn-close-modal') && setCoachDisplay) ||
  //       (!event.target.closest('.modal-container') && setCoachDisplay)
  //     ) {
  //       setCoachDisplay(false);
  //       document.body.style.overflow = 'scroll';
  //     }
  //   },
  //   false
  // );

  const hideCoach = () => {
    setCoachDisplay(false);
    document.body.style.overflow = 'scroll';
  };
  return (
    <div className='modal-bg'>
      <div className='modal-container'>
        <img src={coach.image} alt='' className='modal-img' />
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
          <button className='btn-close-modal' onClick={hideCoach}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachModal;
