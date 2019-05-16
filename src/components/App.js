import React, { useState } from 'react';
import TopQuotes from './TopQuotes';

export default function App() {
  const [quotes, updateQuotes] = useState('top');

  return (
    <>
    <button onClick={() => updateQuotes('top')}>Top Quotes</button>
    {quotes === 'top' && <TopQuotes />}
    </>
  );
}
