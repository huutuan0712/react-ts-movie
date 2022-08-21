import React from 'react';
import Latest from './Latest/Latest';
import Popular from './Popular/Popular';
import TopRate from './TopRate/TopRate';

export default function Home() {
  return (
    <div className="p-2 ">
      <Latest />
      <TopRate />
      <Popular />
    </div>
  );
}
