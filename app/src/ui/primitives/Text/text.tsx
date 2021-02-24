import styled from 'styled-components';

const BaseText = styled.p`
  font-family: 'Varela Round', sans-serif;
  margin: 0px;
`;

const TitleText = styled(BaseText)`
  font-size: 3rem;
`;

const SubtitleText = styled(BaseText)`
  font-size: 1.5rem;
`;

export const Text = {
  Text: BaseText,
  Title: TitleText,
  Subtitle: SubtitleText,
};
