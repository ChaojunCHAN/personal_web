'use client';

import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';

interface EditorProps {
  value: string;
  onEditorChange: (content: string) => void;
}

export default function Editor({ value, onEditorChange }: EditorProps) {
  return (
    <TinyMCEEditor
      apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
      value={value}
      onEditorChange={onEditorChange}
      init={{
        height: 500,
        menubar: false,
        plugins: ['lists', 'link', 'image', 'table'],
        toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist | link image',
        content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 14px; }'
      }}
    />
  );
} 