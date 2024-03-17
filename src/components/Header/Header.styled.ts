import styled from '@emotion/styled';

const HeaderContainer = styled.div<{ $isScrolled: boolean }>`
transition-duration: 150ms;
background-color: ${({ $isScrolled }) =>
  $isScrolled ? "transparent" : "transparent"};
`

const Logo = styled.a`

`

export {HeaderContainer , Logo}