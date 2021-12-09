import React from "react";
import "./WritePage.scss";

export default function WritePage() {
  return (
    <div className="WritePage">
        <img src='https://tecnotril.com/wp-content/uploads/2019/04/placeholder-image.png'
        alt=''
        className='WritePage__img'
        />
      <form className="WritePage__form">
        <div className="WritePage__form__container">
          <label htmlFor="fileInput">
            <i className="WritePage__form__container__icon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" className='WritePage__form__container__fileInput' />
          <input type="text" placeholder="Title" className='WritePage__form__container__textInput' autoFocus={true} />
        </div>
        <div className="WritePage__form__container">
            <textarea placeholder='Tell your story' type='text' className='WritePage__form__container__textInput WritePage__form__container__writeText'></textarea>
        </div>
        <button className="WritePage__form__submit">Publish</button>
      </form>
    </div>
  );
}
