import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteNote } from '@/app/lib/api';

import css from './NoteList.module.css';
import type { Note } from '@/app/types/note';

interface NoteListProps {
  notes: Note[];
}

function NoteList({ notes }: NoteListProps) {
  const queryClient = useQueryClient();

  const { mutate: deleteNoteM, isPending } = useMutation({
    mutationFn: (id: Note['id']) => deleteNote(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },

    onError: error => {
      console.error(error);
    },
  });

  return (
    <>
      <ul className={css.list}>
        {notes.map(note => (
          <li key={note.id} className={css.listItem}>
            <h2 className={css.title}>{note.title}</h2>
            <p className={css.content}>{note.content}</p>
            <div className={css.footer}>
              <span className={css.tag}>{note.tag}</span>
              <button
                className={css.button}
                onClick={() => deleteNoteM(note.id)}
                disabled={isPending}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default NoteList;
