import React from 'react';

export function AtomLoader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
      <p className="text-white font-normal text-base mt-4 animate-pulse">Loading...</p>
    </div>
  );
}
