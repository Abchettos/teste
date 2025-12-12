import React, { useState, useEffect } from 'react';
import { Copy, Check, Quote } from 'lucide-react';
import { ArgumentCardProps } from '../types';

const ArgumentCard: React.FC<ArgumentCardProps> = ({ title, template, customerName }) => {
  const [copied, setCopied] = useState(false);
  
  // Replace {name} placeholder with actual name or default
  const finalText = template.replace(/{name}/g, customerName || 'Sr(a).');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(finalText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
      <div className="p-5 flex-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
            <Quote size={18} />
          </div>
          <h3 className="font-semibold text-slate-800">{title}</h3>
        </div>
        <p className="text-slate-600 leading-relaxed text-sm">
          {finalText}
        </p>
      </div>
      <div className="px-5 pb-5 pt-0">
        <button
          onClick={handleCopy}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            copied
              ? 'bg-green-100 text-green-700 border border-green-200'
              : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          {copied ? (
            <>
              <Check size={16} />
              Copiado!
            </>
          ) : (
            <>
              <Copy size={16} />
              Copiar Texto
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ArgumentCard;