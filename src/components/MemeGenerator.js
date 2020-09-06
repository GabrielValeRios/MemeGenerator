import React from "react";
import {
  Container,
  Input,
  ImgContainer,
  TopText,
  BottomText,
  GenerateButtom,
  DivForm,
  MemeImg,
} from "../styled_configuration/MemeGeneratorStyles";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      memeImgs: [],
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({
          memeImgs: memes,
        });
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    event.preventDefault();

    const randomNumber = Math.floor(Math.random() * this.state.memeImgs.length);
    const randomMeme = this.state.memeImgs[randomNumber].url;
    this.setState({
      randomImg: randomMeme,
    });
  };

  render() {
    return (
      <Container className="row">
        <DivForm>
          <form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              name="topText"
              placeholder="Top Text"
              value={this.state.topText}
              onChange={this.handleChange}
            />
            <Input
              type="text"
              name="bottomText"
              placeholder="Bottom Text"
              value={this.state.bottomText}
              onChange={this.handleChange}
            />
            <GenerateButtom>Generate</GenerateButtom>
          </form>
        </DivForm>

        <ImgContainer>
          <MemeImg src={this.state.randomImg} alt="Meme Image!" />
          <TopText>{this.state.topText}</TopText>
          <BottomText>{this.state.bottomText}</BottomText>
        </ImgContainer>
      </Container>
    );
  }
}

export default MemeGenerator;
