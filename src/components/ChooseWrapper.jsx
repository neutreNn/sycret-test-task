import { useEffect, useState } from 'react';
import { useCallApiMutation } from '../redux/apiSlice';
import LoadingComponent from './LoadingComponent';
import ChooseCertificate from './ChooseCertificate';
import { useNavigate } from 'react-router-dom';

function ChooseWrapper() {
  const [callApi, { isLoading }] = useCallApiMutation();
  const [data, setData] = useState([]);
  const [select, setSelect] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    callApi({
      MethodName: 'OSGetGoodList',
    })
      .unwrap()
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error('Ошибка запроса:', err);
        navigate('/error');
      });

  }, [callApi]);
  
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedCertificate = data.find(item => item.NAME === selectedValue);
    setSelect(selectedCertificate);
  };

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <ChooseCertificate data={data} handleChange={handleChange} select={select} />
      )}
    </>
  );
}

export default ChooseWrapper;
