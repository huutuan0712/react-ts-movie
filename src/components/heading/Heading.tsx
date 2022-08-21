import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onBack?: () => void;
  onNext?: () => void;
  isHeader?: boolean;
}

export default function Heading({
  onBack,
  onNext,
  isHeader = true,
  children,
}: Props) {
  return (
    <div className="p-2 flex items-center justify-between mb-3">
      <h1 className="font-bold text-gray-200 text-2xl">{children}</h1>
      {isHeader && (
        <div className="flex gap-3">
          <button className="btn btn-sm" type="button" onClick={onBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
          </button>
          <button className="btn btn-sm" type="button" onClick={onNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
