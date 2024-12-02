import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 4vw;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  transition: transform 0.3s ease;
  z-index: 2;

  &:hover {
    transform: scaleX(1);
  }
`;

export const Content = styled.div`
  margin-left: 6vw;
  padding-top: 5vh;
  padding-left: 5rem;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_DARK};
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: scroll;
  transition: margin-left 0.3s ease;

  .voting-registration {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2vh;
    width: 80vw;
    text-align: right;
  }

  .tab-content {
    overflow-y: auto;
    width: 80vw;
    padding: 0.5rem;
    height: 48vh;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }

  h2 {
    font-size: 3.4rem;
    margin: 0;
  }

  h3 {
    font-size: 2rem;
    margin: 0;
    color: red;
  }

  .header-newelection {
    display: flex;
    width: 80vw;
  }

  .header {
    width: 50% !important;
  }

  .newelection {
    position: relative;
    align-items: end;
  }

  .newelection-box {
    display: flex;
    float: right;
    align-items: center;
    text-align: center;
    width: 50%;
    height: 70%;
    background-color: ${({ theme }) => theme.COLORS.BABY_BLUE};
    border-radius: 8px;
    margin-top: 1.5vw;
    cursor: pointer;
  }

  .newelection-text {
    font-size: 3rem;
    font-weight: bold;
  }

  .newelection-image {
    height: auto;
    width: auto;
  }

  .image {
    width: 8vw;
    height: auto;
    margin: 0;
    border-radius: 50%;
  }

  .seach_filter {
    width: 80vw;
    display: flex;
    padding: 2vw 0;
    vertical-align: middle;
    align-items: center;
  }

  .inputs_title {
    margin: 0;
    padding: 0;
  }

  .inputs {
    margin: 0.5vw 0;
    padding: 0.5vw 0;
  }

  .search_input,
  .filter_select {
    height: 2.5vw;
    margin: 0 !important;
    pading: 0 !important;
    border-radius: 8px;
  }

  .search_input {
    background: url(images/comment-author.gif) no-repeat scroll 7px 7px;
    padding-left: 30px;
  }

  .inputs_title {
  }

  .election-container {
    height: 10vw;
    width: 80vw;
    display: flex;
    vertical-align: middle;
    border-radius: 8px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .election-container:hover {
    background-color: #f0f0f0; /* Change background color when hovering */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow on hover */
  }

  .election_image {
    width: 15%;
    text-align: center;
  }

  .election_data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1vw;
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vh;
  width: 80vw;

  .tab {
    flex-grow: 1;
    padding: 1.5vh;
    border: 0.1rem solid black;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_DARK_300};
    text-align: center;
    cursor: pointer;
    border-radius: 0;
    font-weight: normal;
  }

  .active {
    font-weight: bold;
    font-size: 1.8rem;
  }
`;
