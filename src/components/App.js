import React, { Component } from 'react';
import {
  IframeWrapper,
  MainPage,
  ScrollDown,
  Subtitle,
  Title,
  TitleWrapper,
  VimeoWrapper,
  Wrapper,
} from '../styles/App';

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollDown = this.scrollDown.bind(this);
  }

  scrollDown() {
    this.refs.mainPage.scrollIntoView({behavior: "smooth"});
  }

  render() {
    return (
      <div className="App">
        <div>
          <VimeoWrapper>
             <IframeWrapper src="https://player.vimeo.com/video/247917721?background=1&autoplay=1&loop=1&byline=0&title=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></IframeWrapper>
             <header className="App-header">
               <Wrapper>
                 <TitleWrapper>
                   <Title>THE BREAKING WAVES PROJECT</Title>
                   <Subtitle>cultivating culture | shift connections</Subtitle>
                 </TitleWrapper>
                 <ScrollDown onClick={this.scrollDown}>
                   v
                 </ScrollDown>
               </Wrapper>
             </header>
          </VimeoWrapper>
        </div>
        <MainPage ref="mainPage">

        </MainPage>
      </div>
    );
  }
}

export default App;
