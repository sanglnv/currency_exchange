import { STORE_INJECT } from './../store/registry/middleware';

export const injectReducers = (reducers) => ({ [STORE_INJECT]: { reducers } });