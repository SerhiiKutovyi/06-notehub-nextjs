import { fetchNoteById } from '@/app/lib/api';
import NoteDetailsClient from './NoteDetailsClient ';

type Props = {
  params: Promise<{ id: string }>;
};

async function NoteDetails({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <>{note && <NoteDetailsClient note={note} />}</>;
}
export default NoteDetails;
