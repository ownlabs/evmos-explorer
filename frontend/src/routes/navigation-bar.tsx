import React, { FC } from "react";

import { NavigationLinkContainer, NavigationSection, SearchBar } from "../view";
import { route } from "../assets/util";
import { dashboard, transactions, evm, blocks, validators, cosmos } from "../assets/text";
import { NavigationBarContainer } from "./styles";

export const NavigationBar: FC = () => {
  return (
    <NavigationBarContainer>
      <SearchBar />
      <NavigationSection
        route={route.dashboard}
        isActive={(_match, location) => {
          return Boolean(location.pathname === route.dashboard);
        }}
      >
        <NavigationLinkContainer routeName={dashboard} />
      </NavigationSection>
      <NavigationSection
        route={route.block}
        isActive={(_match, location) => {
          return Boolean(location.pathname.startsWith(route.block) || location.pathname === route.block);
        }}
      >
        <NavigationLinkContainer routeName={blocks} />
      </NavigationSection>
      <NavigationSection
        route={route.evmtransactions}
        isActive={(_match, location) => {
          return Boolean(location.pathname.startsWith(route.evmtransactions) || location.pathname === route.evmtransactions);
        }}
      >
        <NavigationLinkContainer routeType={evm} routeName={transactions} />
      </NavigationSection>
      <NavigationSection
        route={route.cosmosTransactions}
        isActive={(_match, location) => {
          return Boolean(location.pathname.startsWith(route.cosmosTransactions) || location.pathname === route.cosmosTransactions);
        }}
      >
        <NavigationLinkContainer routeType={cosmos} routeName={transactions} />
      </NavigationSection>
      <NavigationSection
        route={route.validator}
        isActive={(_match, location) => {
          return Boolean(location.pathname.startsWith(route.validator) || location.pathname === route.validator);
        }}
      >
        <NavigationLinkContainer routeName={validators} />
      </NavigationSection>
    </NavigationBarContainer>
  );
};
