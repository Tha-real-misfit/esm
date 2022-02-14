import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const ReachOutStyles = styled.div`
  .reach {
    height: 100vh;
    display: flex;
    background-color: #f8f8ff;
  }
  .reach-bg {
    width: 20px;
    height: 100%;
    /* background-color: #ff69b4; */
    position: absolute;
  }
  .reach-wrapper {
    /* padding: 50px; */
    display: flex;
  }
  .reach-left {
    flex: 1;
  }
  .reach-right {
    flex: 1;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
  }

  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gary-1);
    background-color: var(--mediumSlateTeal);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
    font-family: 'Poppins', sans-serif;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }

  button {
    border: none;
    padding: 15px;
    background-color: var(--mediumSlateTeal);
    color: white;
    cursor: pointer;
    border-radius: 10px;
  }

  .result {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    .reach-wrapper {
      flex-direction: column;
      padding: 0px 50px;
    }

    .reach-title {
      font-size: 30px;
    }

    .reach-info-item {
      margin: 20px 0px;
      width: 100%;
    }

    .reach-desc {
      display: none;
    }

    form {
      margin-top: 0px;
      display: flex;
      flex-wrap: wrap;
    }

    input {
      width: 45%;
      height: 40px;
      margin: 10px;
      margin-left: 0;
      font-size: 15px;
    }

    button {
      margin-top: 10px;
    }
  }
`;

export default function ReachOut() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // e.reset();
    emailjs
      .sendForm(
        'service_u2j45ya',
        'template_5g28etj',
        formRef.current,
        'user_K7OgSk2J9ijLBjMun4dSs'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ReachOutStyles className="reach" id="reachOut">
      <div className="reach-bg" />
      <div className="reach-wrapper">
        <div className="reach-right">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />

            <button type="submit">Submit</button>
            {done && (
              <b className="result"> Thank you, i will be in touch... </b>
            )}
          </form>
        </div>
      </div>
    </ReachOutStyles>
  );
}
