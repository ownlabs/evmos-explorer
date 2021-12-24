import React, { FC } from "react";
import { Route, useHistory } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import {
  BlockDetail,
  Dashboard,
  GenericError,
  TransactionDetail,
  TransactionOverview,
  Validator,
  Block,
  ValidatorOverview,
  Results,
  CosmosTransactionOverview,
  CosmosTransactionDetail,
} from "../components";
import { ErrorBoundaryFallback, MainConatiner } from "../view";
import { NavigationBar } from "./navigation-bar";
import { route } from "../assets/util/routes";

export const Routes: FC = () => {
  const history = useHistory();

  const errorFallbackReset = (): void => {
    history.push(route.dashboard);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback} onError={errorFallbackReset}>
      <MainConatiner navigationBar={<NavigationBar />}>
        <Route exact path={route.dashboard} component={Dashboard} />
        <Route exact path={route.block} component={Block} />
        <Route path={`${route.block}/:number`} component={BlockDetail} />
        <Route exact path={route.evmtransactions} component={TransactionOverview} />
        <Route path={`${route.evmtransactions}/:hash`} component={TransactionDetail} />
        <Route exact path={route.cosmosTransactions} component={CosmosTransactionOverview} />
        <Route path={`${route.cosmosTransactions}/:id`} component={CosmosTransactionDetail} />
        <Route exact path={route.validator} component={ValidatorOverview} />
        <Route exact path={`${route.validator}/latest`} component={Validator} />
        <Route exact path={`${route.results}/:pattern`} component={Results} />
        <Route path={`${route.error}`} component={GenericError} />
      </MainConatiner>
    </ErrorBoundary>
  );
};
