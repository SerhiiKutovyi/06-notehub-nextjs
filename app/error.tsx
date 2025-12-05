'use client';

type Props = {
  error: Error;
};

function Error({ error }: Props) {
  return (
    <>
      <h2>Помилка при завантаженні</h2>
      <p>{error.message}</p>
    </>
  );
}
export default Error;
