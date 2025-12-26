
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Image as ImageIcon, Video, Mic, Loader2, AlertTriangle, CheckCircle2, FileText } from 'lucide-react';

const AILab: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'image' | 'video' | 'audio'>('image');
  const [isRecording, setIsRecording] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handleAIAction = async (prompt: string, modelName: string, parts: any[]) => {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: modelName,
        contents: { parts: [...parts, { text: prompt }] },
      });
      setResult(response.text || "Analysis complete but no text returned.");
    } catch (err: any) {
      console.error(err);
      setError("AI analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Data = (reader.result as string).split(',')[1];
      const prompt = "Analyze this screenshot for manipulative design patterns, dark patterns, or deceptive UX. Identify the Harm-Null level and explain why.";
      await handleAIAction(prompt, 'gemini-3-pro-preview', [{
        inlineData: {
          data: base64Data,
          mimeType: file.type
        }
      }]);
    };
    reader.readAsDataURL(file);
  };

  const onVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // For large videos, we would ideally use a proper URI, 
    // but for this lab demo we convert small clips to base64 for direct part submission.
    const reader = new FileReader();
    reader.onload = async () => {
      const base64Data = (reader.result as string).split(',')[1];
      const prompt = "This video shows a user journey. Identify moments of forced continuity, hidden costs, or nagging behaviors.";
      await handleAIAction(prompt, 'gemini-3-pro-preview', [{
        inlineData: {
          data: base64Data,
          mimeType: file.type
        }
      }]);
    };
    reader.readAsDataURL(file);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      
      mediaRecorderRef.current.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };
      
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.onload = async () => {
          const base64Data = (reader.result as string).split(',')[1];
          const prompt = "Transcribe this audio of a user describing a deceptive web experience.";
          await handleAIAction(prompt, 'gemini-3-flash-preview', [{
            inlineData: {
              data: base64Data,
              mimeType: 'audio/webm'
            }
          }]);
        };
        reader.readAsDataURL(audioBlob);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      setError("Microphone access denied.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const getFastDefinition = async () => {
    const prompt = "Quickly define what 'Confirmshaming' is in 2 sentences.";
    await handleAIAction(prompt, 'gemini-2.5-flash-lite', []);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3 h-3" /> Experimental AI Lab
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Transparency Intelligence</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Test our experimental analysis engines. Upload screenshots, videos, or record descriptions of manipulative experiences to see the AI's classification.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <div className="flex gap-2 mb-8">
              <button 
                onClick={() => setActiveTab('image')}
                className={`flex-1 flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${activeTab === 'image' ? 'bg-violet-500/10 border-violet-500 text-violet-400' : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700'}`}
              >
                <ImageIcon className="w-6 h-6" />
                <span className="text-xs font-bold uppercase">Screenshot</span>
              </button>
              <button 
                onClick={() => setActiveTab('video')}
                className={`flex-1 flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${activeTab === 'video' ? 'bg-violet-500/10 border-violet-500 text-violet-400' : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700'}`}
              >
                <Video className="w-6 h-6" />
                <span className="text-xs font-bold uppercase">Video Loop</span>
              </button>
              <button 
                onClick={() => setActiveTab('audio')}
                className={`flex-1 flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${activeTab === 'audio' ? 'bg-violet-500/10 border-violet-500 text-violet-400' : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700'}`}
              >
                <Mic className="w-6 h-6" />
                <span className="text-xs font-bold uppercase">Narrative</span>
              </button>
            </div>

            <div className="min-h-[200px] flex flex-col items-center justify-center text-center p-8 bg-slate-950 rounded-2xl border border-dashed border-slate-800">
              {activeTab === 'image' && (
                <div className="space-y-4">
                  <p className="text-sm text-slate-400">Upload a screenshot of a deceptive checkout or UI pattern.</p>
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-white text-slate-950 px-6 py-2 rounded-lg font-bold text-sm hover:bg-slate-200 transition-all"
                  >
                    Select Photo
                  </button>
                  <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={onImageUpload} />
                </div>
              )}
              {activeTab === 'video' && (
                <div className="space-y-4">
                  <p className="text-sm text-slate-400">Upload a screen recording of a manipulative flow.</p>
                  <button 
                    onClick={() => videoInputRef.current?.click()}
                    className="bg-white text-slate-950 px-6 py-2 rounded-lg font-bold text-sm hover:bg-slate-200 transition-all"
                  >
                    Select Video
                  </button>
                  <input type="file" ref={videoInputRef} className="hidden" accept="video/*" onChange={onVideoUpload} />
                </div>
              )}
              {activeTab === 'audio' && (
                <div className="space-y-4">
                  <p className="text-sm text-slate-400">Record yourself describing a frustrating web experience.</p>
                  <button 
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`px-8 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-violet-500 text-white hover:bg-violet-600'}`}
                  >
                    {isRecording ? <><Loader2 className="w-4 h-4 animate-spin" /> Stop & Analyze</> : <><Mic className="w-4 h-4" /> Start Recording</>}
                  </button>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-between items-center text-[10px] text-slate-500 font-mono tracking-tighter">
              <span>MODEL: {activeTab === 'audio' ? 'GEMINI-3-FLASH' : 'GEMINI-3-PRO'}</span>
              <button onClick={getFastDefinition} className="text-violet-400 hover:underline">RUN_LATENCY_TEST (FLASH-LITE)</button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 h-full flex flex-col ai-glow">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-5 h-5 text-violet-500" />
              <h3 className="text-lg font-bold text-white">Analysis Output</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto bg-slate-950/50 rounded-2xl border border-slate-800 p-6 min-h-[300px] relative">
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80 z-10 backdrop-blur-sm rounded-2xl">
                  <Loader2 className="w-10 h-10 text-violet-500 animate-spin mb-4" />
                  <p className="text-violet-400 font-bold text-sm animate-pulse tracking-widest">ILLUMINATING...</p>
                </div>
              )}

              {error && (
                <div className="flex items-start gap-3 text-red-400 bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              )}

              {result ? (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
                  <div className="flex items-center gap-2 text-green-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <CheckCircle2 className="w-3 h-3" /> Insight Generated
                  </div>
                  <p className="text-slate-300 leading-relaxed whitespace-pre-wrap text-sm italic">
                    {result}
                  </p>
                </div>
              ) : !loading && !error && (
                <div className="h-full flex flex-col items-center justify-center text-slate-600">
                  <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                  <p className="text-sm font-medium">Select an input on the left to begin analysis</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILab;
