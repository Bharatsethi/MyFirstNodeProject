import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LocalisationInterpol from "./Localisation";

function HomePage() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  const addressVar="Sydney Australia";
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); 


  return (
    <div>
    <h1>Home</h1>
      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>

      <h1>{t('greeting', { name: 'John', address:'Delhi' })}</h1>
      
      <LocalisationInterpol name="BharatSethi" address={addressVar}></LocalisationInterpol>
    </div>
  );
}

export default HomePage;