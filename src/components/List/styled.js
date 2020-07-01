import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${(props) => (props.done ? 0.6 : 1)};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.5);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500px;
      font-size: 16px;
      padding: 0px 10px;
    }

    button {
      width: 42px;
      height: 42px;
      background: #3b4bfb;
      border-radius: 18px;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
