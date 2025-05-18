'use client';

import dynamic from 'next/dynamic';
import { Editor as TinyMCEEditor, EditorOptions } from '@tinymce/tinymce-react';

const DynamicTinyMCEEditor = dynamic(
  () => import('@tinymce/tinymce-react').then((mod) => mod.Editor),
  { ssr: false }
);

interface EditorProps {
  value: string;
  onEditorChange: (content: string) => void;
  apiKey?: string;
  init?: EditorOptions;
}

export default function Editor({
  value,
  onEditorChange,
  apiKey,
  init,
}: EditorProps) {
  const defaultInit: EditorOptions = {
    height: 500,
    menubar: false,
    plugins: ['lists', 'link', 'image', 'table'],
    toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist | link image',
    content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 14px; }',
    skin: 'oxide-dark',
    content_css: 'dark',
  };

  return (
    <DynamicTinyMCEEditor
      apiKey={apiKey || process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
      value={value}
      onEditorChange={onEditorChange}
      init={init ? { ...defaultInit, ...init } : defaultInit}
    />
  );
} 