import { JSONContent, useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Json } from "../../supabase/supabase";

interface Props {
  content: JSONContent | Json;
}
//El content de la prop llega como Json supabase hay que tiparlo a JSONContent
export const ProductDescription = ({ content }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content as JSONContent,
    editable: false,
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose-base max-w-none",
      },
    },
  });

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-center mb-8 underline">
        Descripcion
      </h2>

      <EditorContent editor={editor} />
    </div>
  );
};
