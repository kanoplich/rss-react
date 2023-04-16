import React from 'react';
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import { useGetApiIdQuery, useGetApiQuery } from '../../store/reduсers/apiSlice';
import { useAppSelector } from '../../hook/redux';

const HomePage = () => {
  const { query, isSkip, id } = useAppSelector((state) => state.modalReducer);
  const { data, isLoading, isFetching, isError } = useGetApiQuery(query);
  const {
    data: dataId,
    isLoading: loading,
    isFetching: fetching,
  } = useGetApiIdQuery(id, { skip: isSkip });

  return (
    <>
      <Search />
      <div className="card__wrapper">
        {(isLoading || isFetching) && <div className="spinner"></div>}
        {isError && <div className="title">No card</div>}
        {!isError &&
          !isFetching &&
          data?.results &&
          data.results.map((item) => <Card key={item.id} data={item} />)}
      </div>
      <Modal data={dataId} loading={loading} fetching={fetching} />
    </>
  );
};

export default HomePage;
