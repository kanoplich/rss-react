import React, { useEffect } from 'react';
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
// import { useGetApiIdQuery, useGetApiQuery } from '../../store/reduсers/apiSlice';
import { fetchData, fetchDataId } from '../../store/reduсers/apiSlice';
import { useAppDispatch, useAppSelector } from '../../hook/redux';

const HomePage = () => {
  const { query, isSkip, id } = useAppSelector((state) => state.modalReducer);
  const { data, isLoading, isError, dataId, modalLoading } = useAppSelector(
    (state) => state.apiSlice
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData(query));
  }, [query, dispatch]);

  useEffect(() => {
    dispatch(fetchDataId({ id, isSkip }));
  }, [id, isSkip, dispatch]);

  return (
    <>
      <Search />
      <div className="card__wrapper">
        {isLoading && <div className="spinner"></div>}
        {isError && <div className="title">{isError}</div>}
        {!isError &&
          data?.results &&
          data.results.map((item) => <Card key={item.id} data={item} />)}
      </div>
      <Modal data={dataId} loading={modalLoading} />
    </>
  );
};

export default HomePage;
