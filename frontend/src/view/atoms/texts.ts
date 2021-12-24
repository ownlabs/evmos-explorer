import styled from "styled-components";

import { fontSize, fontWeight } from "../../design-system";

export const Heading = styled.h1`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.heading};
  :first-letter {
    text-transform: capitalize;
  }
`;

export const SubHeading = styled.h2`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.subHeading};
  line-height: 61px;
  :first-letter {
    text-transform: capitalize;
  }
`;

export const Title = styled.h3`
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.medium};
  line-height: 36px;
  :first-letter {
    text-transform: capitalize;
  }
`;

export const Label = styled(Title)`
  text-transform: uppercase;
`;

export const SubTitle = styled.h3`
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.subtitle};
  line-height: 24px;
  :first-letter {
    text-transform: capitalize;
  }
`;

export const GeneralText = styled.h3`
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.large};
  line-height: 48px;
  :first-letter {
    text-transform: capitalize;
  }
`;

export const NavigationText = styled(SubTitle)`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.medium};
`;
