import React from "react";

import { PrefixContainer, SuffixContainer, TitleContainer } from "./styles";

interface DualColorTitleProps {
  prefixColor?: string;
  suffixColor?: string;
  prefix: React.ReactNode;
  suffix: React.ReactNode;
}
export const DualColorTitle = ({ prefix, suffix, prefixColor, suffixColor }: DualColorTitleProps): React.ReactElement => {
  return (
    <TitleContainer>
      <PrefixContainer customColor={prefixColor}>{prefix}</PrefixContainer>
      <SuffixContainer customColor={suffixColor}>{suffix}</SuffixContainer>
    </TitleContainer>
  );
};
