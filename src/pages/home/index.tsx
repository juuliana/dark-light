import { TbLamp, TbLampOff } from "react-icons/tb";

import GlobalStyle from "../../global";

import { Container, Title } from "./styles";

export function Home() {
  const iconProps = {
    size: 100,
    color: "#fff",
  };

  return (
    <>
      <GlobalStyle />

      <Container>
        <TbLampOff {...iconProps} />
        {/* <TbLamp {...iconProps} /> */}

        <Title>Dark/Light</Title>
      </Container>
    </>
  );
}
