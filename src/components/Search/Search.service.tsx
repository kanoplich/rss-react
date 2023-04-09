import { FetchData } from 'types';

export async function fetchRequest(query: string): Promise<FetchData> {
  return (await fetch(`https://rickandmortyapi.com/api/character/?page=1&name=${query}`)).json();
}
