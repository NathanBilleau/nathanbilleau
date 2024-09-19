import React, { FC } from "react";
import './Tag.scss';

export type State = 'done' | 'wip' | 'stopped';

interface Props {
  state: State;
}

export const StateTag: FC<Props> = ({ state }) => {
  if (state === 'done') {
    return <span className="stateTag done">Terminé</span>;
  }

  if (state === 'wip') {
    return <span className="stateTag wip">En cours</span>;
  }

  if (state === 'stopped') {
    return <span className="stateTag stopped">Arrêté</span>;
  }

  return null;
};