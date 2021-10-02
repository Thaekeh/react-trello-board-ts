import React, { ChangeEvent, useState } from "react";
import "./AddCard.scss";

interface Props {
  onCreateNewCard: (cardTitle: string) => void;
}

export const AddCard: React.FC<Props> = ({ onCreateNewCard }) => {
  const [inputIsActive, setInputIsActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateNewCard(inputValue);
    setInputIsActive(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div className="add-card">
      {inputIsActive ? (
        <form className="add-card__form" onSubmit={handleSubmit}>
          <input
            className="add-card__form__input-field"
            autoFocus
            onChange={handleChange}
            onBlur={handleSubmit}
          />
          <button type="submit" className="add-card__form__submit-button">
            +
          </button>
        </form>
      ) : (
        <div
          className="add-card__inactive"
          onClick={() => setInputIsActive(true)}
        >
          <p className="add-card__inactive__text">Add New Card</p>
        </div>
      )}
    </div>
  );
};
