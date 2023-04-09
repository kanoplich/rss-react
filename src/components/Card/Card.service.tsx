import { CardData } from 'types';

export async function fetchDataId(id: number): Promise<CardData> {
  return (await fetch(`https://rickandmortyapi.com/api/character/${id}`)).json();
}
