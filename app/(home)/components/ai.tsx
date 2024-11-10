'use client';

import { experimental_useObject as useObject } from 'ai/react';
import { notificationSchema } from '@/app/api/notifications/schema';

export default function Ai() {
  const { isLoading, stop, object, submit, error } = useObject({
    api: '/api/notifications',
    schema: notificationSchema,
  });

  return (
    <>
      {error && <div>An error occurred.</div>}

      {isLoading && (
        <div>
          <p>Loading...</p>
          <button onClick={() => stop()} type='button'>
            Stop
          </button>
        </div>
      )}

      <button onClick={() => submit('Messages during finals week.')}>Generate notifications</button>

      {object?.notifications?.map((notification, index) => (
        <div key={index}>
          <p>{notification?.name}</p>
          <p>{notification?.message}</p>
        </div>
      ))}
    </>
  );
}
