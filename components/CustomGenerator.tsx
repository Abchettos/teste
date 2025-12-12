import React, { useState } from 'react';
import { Sparkles, Copy, Check, Loader2 } from 'lucide-react';
import { generateCustomArgument } from '../services/geminiService';

interface CustomGeneratorProps {
  customerName: string;
}

const CustomGenerator: React.FC<CustomGeneratorProps> = ({ customerName }) => {
  const [reason, setReason] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!reason.trim()) return;
    
    setLoading(true);
    setGeneratedText(''); // Clear previous
    
    const result = await generateCustomArgument(customerName, reason);
    
    setGeneratedText(result);
    setLoading(false);
  };

  const handleCopy = async () => {
    if (!generatedText) return;
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg text-white p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
          <Sparkles className="text-yellow-300" size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold">Gerador de Argumento Personalizado (IA)</h2>
          <p className="text-blue-100 text-sm opacity-90">Combine o perfil do cliente com o motivo específico.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-blue-100 mb-2">
            Motivo do cancelamento
          </label>
          <div className="relative">
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Ex: Achou caro, não tem tempo de ler, prefere concorrente..."
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !reason.trim()}
              className="absolute right-2 top-2 bottom-2 bg-white text-blue-700 px-4 rounded-lg font-semibold text-sm hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" size={16} /> : 'Gerar'}
            </button>
          </div>
        </div>

        {generatedText && (
          <div className="mt-6 bg-black/20 rounded-xl p-4 border border-white/10 animate-fade-in">
            <p className="leading-relaxed mb-4 text-blue-50">
              {generatedText}
            </p>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              {copied ? <Check size={16} className="text-green-300" /> : <Copy size={16} />}
              {copied ? 'Copiado para área de transferência!' : 'Copiar argumento'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomGenerator;