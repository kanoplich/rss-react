interface InfoData {
  count: string;
  pages: string;
  next: string;
  prev: string;
}

export type FetchData = {
  info: InfoData;
  results: CardData[];
};

export type CardData = {
  id: number;
  name: string;
  status: string;
  url: string;
  image: string;
  species: string;
  gender: string;
  location: {
    name: string;
  };
};

export type CardFormType = {
  name: string;
  birthday: string;
  country: string;
  gender: string;
  image: FileList;
  terms: boolean;
};

export type CardFormTypeSubmit = {
  name: string;
  birthday: string;
  country: string;
  gender: string;
  image: string;
};
