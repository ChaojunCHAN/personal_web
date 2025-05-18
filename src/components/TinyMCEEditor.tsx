'use client';

import dynamic from 'next/dynamic';
import { EditorOptions } from '@tinymce/tinymce-react';

interface TinyMCEEditorProps {
  value: string;
  onEditorChange: (content: string) => void;
  apiKey?: string;
  init?: EditorOptions;
}

const ActualTinyMCEEditor = dynamic(
  () => import('@tinymce/tinymce-react').then(mod => mod.Editor),
  { ssr: false }
);

export default function TinyMCEEditor({ value, onEditorChange, apiKey, init }: TinyMCEEditorProps) {
  const defaultInit: EditorOptions = {
    height: 500,
    menubar: false,
    plugins: ['lists', 'link', 'image', 'table'],
    toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist | link image',
    content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 14px; }',
    skin: 'oxide-dark',
    content_css: 'dark',
  };

  const mergedInit = init ? { ...defaultInit, ...init } : defaultInit;

  return (
    <ActualTinyMCEEditor
      apiKey={apiKey || process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
      value={value}
      onEditorChange={onEditorChange}
      init={mergedInit}
    />
  );
} 