import { Action } from "redux";

export enum FilterActions{
  UPDATE_TEXT = 'UPDATE_TEXT',
  UPDATE_TAGS = 'UPDATE_TAGS',
  UPDATE_MODE = 'UPDATE_MODE'
}

export interface IFilterUpdateSearchAction extends Action{
  payload:string[];
}


export interface IFilterUpdateSearchModeAction extends Action{
  payload: boolean;
}